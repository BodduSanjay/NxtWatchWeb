import styled from 'styled-components'

export const HomeBgDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`
export const SideVideoDiv = styled.div`
  display: flex;
  width: 100vw;
`
export const BannerBtn = styled.button`
  height: 35px;
  width: 110px;
  background-color: transparent;
  border: 1px solid black;
  color: black;
  font-weight: bold;
  padding: 3px;
  cursor: pointer;
`
export const VideosDiv = styled(HomeBgDiv)`
  height: 90vh;
  width: 70%;
  overflow-y: auto;

  @media (max-width: 767px) {
    width: 100%;
  }
`
export const ColumnCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  height: 400px;
  width: 400px;
  margin-bottom: 15px;

  @media (max-width: 767px) {
    height 200px;
    width: 200px;
    margin-bottom: 10px;
  }
`
export const FailureH1 = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  color: ${props => (props.isLigth ? 'black' : 'white')};
  margin-bottom: 15px;

  @media (max-width: 767px) {
    margin-bottom: 10px;
    font-size: 15px;
  }
`
export const FailurePara = styled.p`
  font-family: Roboto;
  color: #475569;
  font-size: 15px;
  margin-right: 10px;

  @media (max-width: 767px) {
    font-size: 10px;
    margin-right: 5px;
  }
`
export const RetryBtn = styled(BannerBtn)`
  background-color: #4f46e5;
  border-radius: 8px;
  color: white;
`
export const TypeVideosDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  width: 100%;
  height: 100%;
  background-color: ${props => (props.isLigth ? 'white' : 'black')};
`
export const TypeCont = styled(SideVideoDiv)`
  width: 100%;
  align-items: center;
  padding: 10px 0px 10px 20px;
  height: 25%;
  background-color: ${props => (props.isLigth ? 'gray' : '#212121')};
`
export const IconBgDiv = styled(SideVideoDiv)`
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: ${props => (props.isLigth ? '#d7dfe9' : 'black')};
`
export const Heading = styled.h1`
  font-family: Roboto;

  color: ${props => (props.isLigth ? 'white' : 'black')};
  font-size: 20px;

  @media (max-width: 767px) {
    font-size: 15px;
  }

  @media (max-width: 567px) {
    font-size: 10px;
  }
`
export const TrendingUlCont = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: ${props => (props.isLigth ? '#ebebeb' : 'black')};

  @media (max-width: 767px) {
    padding-left: 0%;
  }
`
export const TitlePara = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: ${props => (props.isLigth ? 'black' : 'white')};
  margin-bottom: 15px;
  margin-top: 10px;

  @media (max-width: 767px) {
    margin-bottom: 10px;
    font-size: 15px;
  }
`
export const RowCont = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;
  margin: 10px 0px 10px 0px;
  flex-wrap: wrap;
`
export const ViewsCont = styled(RowCont)`
  justify-content: flex-start;
  width: 40%
  flex-wrap: nowrap;

  @media(max-width: 567px) {
    width: 90%
  }
`
export const EngageCont = styled.div`
  display: flex;
  align-items: center;
`
export const DotPara = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
`
export const LikeContBtn = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  margin-right: 10px;
`
export const LikePara = styled.p`
  font-family: Roboto;
  color: ${props => (props.isLiked ? 'blue' : '#475569')};
  font-size: 15px;

  @media (max-width: 767px) {
    font-size: 10px;
    margin-right: 5px;
  }
`
export const DisLikePara = styled.p`
  font-family: Roboto;
  color: ${props => (props.isDisLiked ? 'blue' : '#475569')};
  font-size: 15px;

  @media (max-width: 767px) {
    font-size: 10px;
    margin-right: 5px;
  }
`
export const SavedPara = styled.p`
  font-family: Roboto;
  color: ${props => (props.isSaved ? 'blue' : '#475569')};
  font-size: 15px;

  @media (max-width: 767px) {
    font-size: 10px;
    margin-right: 5px;
  }
`
export const BorderPara = styled.p`
  width: 90%;
  border: 1px solid gray;
`
export const ChannelCont = styled(RowCont)`
  justify-content: flex-start;
`
export const ProfileCh = styled.img`
  height: 50px;
  width: 50px;
  margin-left: 10px;
`
export const ChannelNameCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
