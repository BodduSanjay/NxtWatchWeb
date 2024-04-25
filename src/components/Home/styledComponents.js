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
export const VideosDiv = styled(HomeBgDiv)`
  height: 90vh;
  width: 70%;
  overflow-y: auto;

  @media (max-width: 767px) {
    width: 100%;
  }
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const PlanBannerDiv = styled(SideVideoDiv)`
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
`
export const ContentDiv = styled(HomeBgDiv)`
  height: 90%;
  width: 50%;

  @media (max-width: 767px) {
    width: 70%;
  }
`
export const BannerLogo = styled.img`
  height: 50px;
  width: 200px;
  margin-bottom: 10px;

  @media (max-width: 767px) {
    height 40px;
    width: 160px;
    margin-bottom: 5px;
  }
`
export const BannerPara = styled.p`
  font-family: Roboto;
  font-size: 10px;
  color: #181818;
  margin-bottom: 25px;
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
export const VideoSearchCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => (props.isLigth ? 'gray' : 'black')};
`
export const SearchDiv = styled.div`
  display: flex;
  margin: 10px;
  width: 90%;
  max-width: 400px;
  background-color: ${props => (props.isLigth ? 'white' : 'transparent')};
`
export const SearchInput = styled.input`
  height: 40px;
  width: 70%;
  background-color: transparent;
  border: 1px solid gray;
  padding: 5px;
  cursor: pointer;
  outline: none;
`
export const SearchButton = styled.button`
  height: 40px;
  width: 70%;
  cursor: pointer;
  outline: none;
`
export const ColumnCont = styled(HomeBgDiv)`
  width: 100%;
  height: 80%;
  padding: 10px;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  height: 400px;
  width: 400px;
  margin-bottom: 15px;

  @media (max-width: 767px){
    height 200px;
    width: 200px;
    margin-bottom: 10px;
  }
`
export const FailureH1 = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  color: ${props => (props.isLigth ? 'black' : 'white')}
  margin-bottom: 15px;

  @media (max-width: 767px){
    margin-bottom: 10px;
    font-size: 15px;
  }
`
export const FailurePara = styled(BannerPara)`
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
export const UlCont = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    padding-left: 0%;
  }
`
