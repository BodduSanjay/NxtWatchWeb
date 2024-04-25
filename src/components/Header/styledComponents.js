import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${props => (props.isLight ? 'white' : 'black')};
`
export const LogoEl = styled.img`
  height: 50px;
  width: 200px;

  @media (max-width: 767px) {
    height: 40px;
    width: 160px;
  }
`
export const SmallDeviceCont = styled(HeaderContainer)`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    height: 100%;
    padding: 0px;
    width: 30%;
    justify-content: space-evenly;
  }
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
export const AlertContainer = styled(HeaderContainer)`
  background-color: ${props => (props.isLight ? 'white' : '#424242')};
  flex-direction: column;
  border: none;
  min-height: 250px;
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  max-width: 400px;
`

export const AlertPara = styled.p`
  color: #00306e;
  font-size: 15px;
  font-family: Roboto;
`
export const AlertBtnCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ButtonCancel = styled(Button)`
  border: 1px solid gray;
  height: 30px;
  width: 90px;
  border-radius: 5px;
  color: gray;
`
export const ButtonConfirm = styled(ButtonCancel)`
  background-color: #3b82f6;
  border: none;
  color: white;
`
export const LargeDeviceCont = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-evenly;

  @media (max-width: 767px) {
    display: none;
  }
`
export const ButtonLogoutLg = styled(ButtonCancel)`
  width: 110px;
  color: ${props => (props.isLight ? '#3b82f6' : 'white')};
  border: 1px solid ${props => (props.isLight ? '#3b82f6' : 'white')};
`
export const MenuBgCont = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.isLight ? 'white' : '#424242')};
`
export const TopContUl = styled.div`
  display: flex;
  width: 100%;
  padding-left: 0%;
  flex-direction: column;
`
export const ProfileImage = styled.img`
  height: 50px;
  width: 50px;
`
export const ListItem = styled.li`
  list-style-type: none;
  width: 100%;
  padding: 10px;
  background-color: ${props => (props.isActive ? 'gray' : 'transparent')};
  display: flex;
  align-items: center;
`
export const ButtonEl = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const Heading = styled.h1`
  color: ${props => (props.isActive ? 'gray' : 'black')};
  font-size: 10px;
  margin-left: 10px;
  font-family: Roboto;
`
