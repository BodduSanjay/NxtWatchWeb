import styled from 'styled-components'

export const ListItemVideo = styled.li`
  width: 30%;
  margin: 20px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  list-style-type: none;

  @media (max-width: 767px) {
    width: 45%;
  }

  @media (max-width: 576px) {
    width: 100%;
    margin: 0px;
  }
`
export const ThumbnailImage = styled.img`
  height: 120px;
  width: 100%;

  @media (max-width: 767px) {
    height: 140px;
  }

  @media (max-width: 576px) {
    height: 160px;
  }
`
export const TitleLogoCont = styled.div`
  display: flex;
  padding: 10px 0px 0px 0px;

  @media (max-width: 576px) {
    padding: 10px;
  }
`
export const ChannelLogo = styled.img`
  height: 50px;
  width: 50%;
  margin-right: 10px;
`
export const VideoDetailsCont = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled.p`
  font-family: Roboto;
  font-size: 10px;
  font-weight: 300;
  margin-bottom: 10px;
  color: ${props => (props.isLight ? 'black' : 'white')};
`
export const ReachCont = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 576px) {
    flex-direction: row;
    align-items: center;
  }
`
export const ChannelName = styled(Title)`
  color: #7e858e;
  margin: 0px 5px 10px 0px;
`
export const ChannelNameDont = styled(ChannelLogo)`
  font-weight: bold;
`
export const SmDot = styled(ChannelName)`
  display: none;
  @media (max-width: 576px) {
    display: flex;
  }
`
export const Reach = styled.div`
  display: flex;
  align-items: center;
`
