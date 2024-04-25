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
export const ColumnContSV = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`
export const FailureImageSV = styled.img`
  height: 400px;
  width: 400px;
  margin-bottom: 15px;

  @media (max-width: 767px) {
    height 200px;
    width: 200px;
    margin-bottom: 10px;
  }
`
export const FailureH1SV = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  color: ${props => (props.isLigth ? 'black' : 'white')};
  margin-bottom: 15px;

  @media (max-width: 767px) {
    margin-bottom: 10px;
    font-size: 15px;
  }
`
export const FailureParaSV = styled.p`
  font-family: Roboto;
  color: #475569;
  font-size: 15px;
  margin-bottom: 15px;

  @media (max-width: 767px) {
    margin-bottom: 10px;
    font-size: 10px;
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
  display: flex;
  flex-direction: column;
  height: 75%;
  overflow-y: auto;
  width: 100%;
  background-color: ${props => (props.isLigth ? '#ebebeb' : 'black')};
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
  margin-bottom: 15px;

  @media (max-width: 767px) {
    margin-bottom: 10px;
    font-size: 10px;
  }
`
