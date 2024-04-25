import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

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
  TypeCont,
  IconBgDiv,
  Heading,
  TrendingUlCont,
} from './styledComponents'

import Header from '../Header'
import SideNav from '../SideNav'
import GamingVideoItem from '../GamingVideoItem'

const currentStatus = {
  initial: 'initial',
  inProgress: 'inProgress',
  success: 'success',
  failure: 'failure',
}

class Gaming extends Component {
  state = {trendingVideosList: [], apiStatus: currentStatus.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: currentStatus.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const formattedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))

      this.setState({
        apiStatus: currentStatus.success,
        trendingVideosList: formattedData,
      })
    } else {
      this.setState({apiStatus: currentStatus.failure})
    }
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
            <RetryBtn onClick={this.getGamingVideos}>Retry</RetryBtn>
          </ColumnCont>
        )
      }}
    </Vidoecontext.Consumer>
  )

  renderSuccess = () => (
    <Vidoecontext.Consumer>
      {value => {
        const {isLight} = value
        const {trendingVideosList} = this.state

        return (
          <TypeVideosDiv>
            <TypeCont>
              <IconBgDiv isLight={isLight}>
                <SiYoutubegaming color="red" height="25px" width="25px" />
              </IconBgDiv>
              <Heading>Gaming</Heading>
            </TypeCont>
            <TrendingUlCont>
              {trendingVideosList.map(each => (
                <GamingVideoItem each={each} key={each.id} />
              ))}
            </TrendingUlCont>
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
export default Gaming
