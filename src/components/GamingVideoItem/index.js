import {Link} from 'react-router-dom'

import Vidoecontext from '../../contextComponent/componetcontext'
import {ShortList, ThumbnailShort, ShortH1, ShortPara} from './styledComponents'

const GamingVideoItem = ({each}) => (
  <Vidoecontext.Consumer>
    {value => {
      const {isLight} = value
      const {id, title, thumbnailUrl, viewCount} = each

      return (
        <ShortList>
          <Link to={`/videos/${id}`}>
            <ThumbnailShort src={thumbnailUrl} alt={title} />
            <ShortH1 isLight={isLight}>{title}</ShortH1>
            <ShortPara isLight={isLight}>
              {viewCount} Watching WorldWide
            </ShortPara>
          </Link>
        </ShortList>
      )
    }}
  </Vidoecontext.Consumer>
)
export default GamingVideoItem
