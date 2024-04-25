import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import Vidoecontext from '../../contextComponent/componetcontext'

import {
  ListItemVideo,
  ThumbnailImage,
  TitleLogoCont,
  ChannelLogo,
  VideoDetailsCont,
  Title,
  ReachCont,
  ChannelName,
  ChannelNameDont,
  SmDot,
  Reach,
} from './styledComponent'

const VidoeListItem = ({each}) => (
  <Vidoecontext.Consumer>
    {value => {
      const {isLight} = value
      const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = each
      const formattedChannel = {
        name: channel.name,
        profileImageUrl: channel.profile_image_url,
      }
      const {name, profileImageUrl} = formattedChannel
      return (
        <Link to={`/videos/${id}`}>
          <ListItemVideo>
            <ThumbnailImage src={thumbnailUrl} alt={title} />
            <TitleLogoCont>
              <ChannelLogo src={profileImageUrl} alt={name} />
              <VideoDetailsCont>
                <Title isLight={isLight}>{title}</Title>
                <ReachCont>
                  <ChannelName isLight={isLight}>{name}</ChannelName>
                  <SmDot isLight={isLight}>.</SmDot>
                  <Reach>
                    <ChannelName isLight={isLight}>
                      {viewCount} views
                    </ChannelName>
                    <ChannelNameDont isLight={isLight}>.</ChannelNameDont>
                    <ChannelName isLight={isLight}>
                      {formatDistanceToNow(new Date({publishedAt}))}
                    </ChannelName>
                  </Reach>
                </ReachCont>
              </VideoDetailsCont>
            </TitleLogoCont>
          </ListItemVideo>
        </Link>
      )
    }}
  </Vidoecontext.Consumer>
)
export default VidoeListItem
