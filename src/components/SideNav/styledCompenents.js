import styled from 'styled-components'

export const SideNavBgCont = styled.div`
  height: 90vh;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.isLight ? 'white' : '#424242')};
  }
`
export const TopContUl = styled.div`
  display: flex;
  width: 100%;
  padding-left: 0%;
  flex-direction: column;
`

export const ListItem = styled.li`
  list-style-type: none;
  width: 100%;
  padding: 10px;
  background-color: ${props => (props.isActive ? 'gray' : 'transparent')};
  display: flex;
  align-items: center;
`
export const Button = styled.button`
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
export const Heading2 = styled(Heading)`
  color: ${props => (props.isLight ? '#1e293b' : 'white')};
`
export const DetailsCont = styled(TopContUl)`
  padding: 10px;
`
export const SocialItemCont = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 90%;
`
export const SocialLogo = styled.img`
  height: 30px;
  width: 30px
  margin-right: 10px;
`
export const ParaContact = styled.p`
  color: ${props => (props.isLight ? '#1e293b' : 'white')};
  font-size: 10px;
  font-family: Roboto;
  font-weight: bold;
`
