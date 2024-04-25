import {MdPlaylistAdd} from 'react-icons/md'
import Vidoecontext from '../../contextComponent/componetcontext'

import {
  HomeBgDiv,
  SideVideoDiv,
  VideosDiv,
  ColumnContSV,
  FailureImageSV,
  FailureH1SV,
  FailureParaSV,
  TypeVideosDiv,
  TypeCont,
  IconBgDiv,
  Heading,
  TrendingUlCont,
} from './styledComponents'

import Header from '../Header'
import SideNav from '../SideNav'
import TrendingVideosItem from '../TrendingVideosItem'

const SavedVideos = () => (
  <Vidoecontext.Consumer>
    {value => {
      const {isLight, savedVideoList} = value
      const failureImageUrl = isLight
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

      return (
        <HomeBgDiv>
          <Header />
          <SideVideoDiv>
            <SideNav />
            <VideosDiv>
              {savedVideoList.length !== 0 ? (
                <TypeVideosDiv>
                  <TypeCont>
                    <IconBgDiv isLight={isLight}>
                      <MdPlaylistAdd color="red" height="25px" width="25px" />
                    </IconBgDiv>
                    <Heading>Saved Videos</Heading>
                  </TypeCont>
                  <TrendingUlCont>
                    {savedVideoList.map(each => (
                      <TrendingVideosItem each={each} key={each.id} />
                    ))}
                  </TrendingUlCont>
                </TypeVideosDiv>
              ) : (
                <ColumnContSV>
                  <FailureImageSV src={failureImageUrl} alt="failure image" />
                  <FailureH1SV isLight={isLight}>
                    No saved videos found
                  </FailureH1SV>
                  <FailureParaSV isLight={isLight}>
                    You can save your videos while watching them
                  </FailureParaSV>
                </ColumnContSV>
              )}
            </VideosDiv>
          </SideVideoDiv>
        </HomeBgDiv>
      )
    }}
  </Vidoecontext.Consumer>
)
export default SavedVideos
