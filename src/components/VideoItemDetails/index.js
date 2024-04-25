import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import Vidoecontext from '../../contextComponent/componetcontext'
import {
  HomeBgDiv,
  SideVideoDiv,
  VideosDiv,
  ColumnCont,
  FailureImage,
  FailureH1,
  FailurePara,
  RetryBtn,
  TypeVideosDiv,
  TitlePara,
  RowCont,
  ViewsCont,
  EngageCont,
  DotPara,
  LikeContBtn,
  LikePara,
  DisLikePara,
  SavedPara,
  BorderPara,
  ChannelCont,
  ProfileCh,
  ChannelNameCont,
} from './styledComponents'

import Header from '../Header'
import SideNav from '../SideNav'

const currentStatus = {
  initial: 'initial',
  inProgress: 'inProgress',
  success: 'success',
  failure: 'failure',
}
class VideoItemDetails extends Component {
  state = {
    videoItem: {},
    apiStatus: currentStatus.initial,
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: currentStatus.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const formattedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: data.video_details.channel,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }

      this.setState({
        apiStatus: currentStatus.success,
        videoItem: formattedData,
      })
    } else {
      this.setState({apiStatus: currentStatus.failure})
    }
  }

  liked = () => {
    this.setState({isLiked: true, isDisLiked: false})
  }

  disLiked = () => {
    this.setState({isDisLiked: true, isLiked: false})
  }

  renderLoader = () => (
    <ColumnCont>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
    </ColumnCont>
  )

  renderFailure = () => (
    <Vidoecontext.Consumer>
      {value => {
        const {isLight} = value
        const failureImageUrl = isLight
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

        return (
          <ColumnCont>
            <FailureImage src={failureImageUrl} alt="failure image" />
            <FailureH1 isLight={isLight}>Oops! Something Went Wrong</FailureH1>
            <FailurePara isLight={isLight}>
              We are having some truoble to complete your request. Please try
              again.
            </FailurePara>
            <RetryBtn onClick={this.getVideoDetails}>Retry</RetryBtn>
          </ColumnCont>
        )
      }}
    </Vidoecontext.Consumer>
  )

  renderSuccess = () => (
    <Vidoecontext.Consumer>
      {value => {
        const {
          isLight,
          savedVideoList,
          addSavedVideosList,
          removeSavedVideosList,
        } = value
        const {videoItem, isDisLiked, isLiked} = this.state

        const {
          id,
          title,
          videoUrl,
          channel,
          viewCount,
          publishedAt,
          description,
        } = videoItem
        const dataChannerFrmt = {
          name: channel.name,
          profileImageUrl: channel.profile_image_url,
          subscriberCount: channel.subscriber_count,
        }
        const isSaved = savedVideoList.some(obj => obj.id === id)

        const toggleSave = () => {
          if (isSaved) {
            removeSavedVideosList(id)
          } else {
            addSavedVideosList(videoItem)
          }
        }

        const {name, profileImageUrl, subscriberCount} = dataChannerFrmt

        return (
          <TypeVideosDiv>
            <ReactPlayer url={videoUrl} playing controls width="90%" />
            <TitlePara isLight={isLight}>{title}</TitlePara>
            <RowCont>
              <ViewsCont>
                <FailurePara>{viewCount} views</FailurePara>
                <DotPara>.</DotPara>
                <FailurePara>
                  {formatDistanceToNow(new Date({publishedAt}))}
                </FailurePara>
              </ViewsCont>
              <EngageCont>
                <LikeContBtn onClick={this.liked}>
                  <AiOutlineLike color={isLiked ? 'blue' : '#94a3b8'} />
                  <LikePara isLiked={isLiked}>Like</LikePara>
                </LikeContBtn>
                <LikeContBtn onClick={this.disLiked}>
                  <AiOutlineDislike color={isLiked ? 'blue' : '#94a3b8'} />
                  <DisLikePara isDisLiked={isDisLiked}>Dislike</DisLikePara>
                </LikeContBtn>
                <LikeContBtn onClick={toggleSave}>
                  <MdPlaylistAdd color={isSaved ? 'blue' : '#94a3b8'} />
                  <SavedPara isSaved={isSaved}>
                    {isSaved ? 'Saved' : 'Save'}
                  </SavedPara>
                </LikeContBtn>
              </EngageCont>
            </RowCont>
            <BorderPara> </BorderPara>
            <ChannelCont>
              <ProfileCh src={profileImageUrl} alt={name} />
              <ChannelNameCont>
                <TitlePara>{name}</TitlePara>
                <FailurePara>{subscriberCount} subscribers</FailurePara>
              </ChannelNameCont>
            </ChannelCont>
            <FailurePara>{description}</FailurePara>
          </TypeVideosDiv>
        )
      }}
    </Vidoecontext.Consumer>
  )

  renderAll = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case currentStatus.inProgress:
        return this.renderLoader()
      case currentStatus.success:
        return this.renderSuccess()
      case currentStatus.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <HomeBgDiv>
        <Header />
        <SideVideoDiv>
          <SideNav />
          <VideosDiv>{this.renderAll()}</VideosDiv>
        </SideVideoDiv>
      </HomeBgDiv>
    )
  }
}
export default VideoItemDetails
