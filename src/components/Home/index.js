import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {MdClose, MdSearch} from 'react-icons/md'
import {
  HomeBgDiv,
  SideVideoDiv,
  VideosDiv,
  PlanBannerDiv,
  ContentDiv,
  BannerLogo,
  BannerPara,
  BannerBtn,
  VideoSearchCont,
  SearchDiv,
  SearchInput,
  SearchButton,
  ColumnCont,
  FailureImage,
  Button,
  FailureH1,
  FailurePara,
  RetryBtn,
  UlCont,
} from './styledComponents'

import Vidoecontext from '../../contextComponent/componetcontext'
import VidoeListItem from '../VidoeListItem'
import Header from '../Header'
import SideNav from '../SideNav'

const currentStatus = {
  initial: 'initial',
  inProgress: 'inProgress',
  success: 'success',
  failure: 'failure',
}

class Home extends Component {
  state = {
    searchTerms: '',
    showPlanBanner: true,
    videosList: [],
    apiStatus: currentStatus.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: currentStatus.inProgress})
    const {searchTerms} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchTerms}`

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
        channel: each.channel,
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))

      this.setState({
        apiStatus: currentStatus.success,
        videosList: formattedData,
      })
    } else {
      this.setState({apiStatus: currentStatus.failure})
    }
  }

  closeBanner = () => {
    this.setState({showPlanBanner: false})
  }

  searchChange = event => {
    this.setState({searchTerms: event.target.value})
  }

  getSearchResults = () => {
    this.getVideos()
  }

  renderLoader = () => (
    <ColumnCont>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
    </ColumnCont>
  )

  renderSuccess = () => {
    const {videosList} = this.state
    return videosList.length === 0 ? (
      <Vidoecontext.Consumer>
        {value => {
          const {isLight} = value

          return (
            <ColumnCont>
              <FailureImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <FailureH1 isLight={isLight}>No Search results found</FailureH1>
              <FailurePara isLight={isLight}>
                Try different key words or remove search filter
              </FailurePara>
              <RetryBtn onClick={this.getVideos}>Retry</RetryBtn>
            </ColumnCont>
          )
        }}
      </Vidoecontext.Consumer>
    ) : (
      <UlCont>
        {videosList.map(each => (
          <VidoeListItem each={each} key={each.id} />
        ))}
      </UlCont>
    )
  }

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
            <RetryBtn onClick={this.getVideos}>Retry</RetryBtn>
          </ColumnCont>
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
    const {searchTerms, showPlanBanner} = this.state

    return (
      <Vidoecontext.Consumer>
        {value => {
          const {isLight} = value

          return (
            <HomeBgDiv>
              <Header />
              <SideVideoDiv>
                <SideNav />
                <VideosDiv>
                  {showPlanBanner && (
                    <PlanBannerDiv>
                      <ContentDiv>
                        <BannerLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt logo"
                        />
                        <BannerPara>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerPara>
                        <BannerBtn>Get It Now</BannerBtn>
                      </ContentDiv>
                      <Button type="button" onClick={this.CloseBanner}>
                        <MdClose />
                      </Button>
                    </PlanBannerDiv>
                  )}
                  <VideoSearchCont isLight={isLight}>
                    <SearchDiv isLight={isLight}>
                      <SearchInput
                        type="search"
                        value={searchTerms}
                        placeholder="Search"
                        onChange={this.searchChange}
                      />
                      <SearchButton onClick={this.getSearchResults}>
                        <MdSearch />
                      </SearchButton>
                    </SearchDiv>
                    {this.renderAll()}
                  </VideoSearchCont>
                </VideosDiv>
              </SideVideoDiv>
            </HomeBgDiv>
          )
        }}
      </Vidoecontext.Consumer>
    )
  }
}
export default Home
