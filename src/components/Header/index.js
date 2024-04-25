import {Component} from 'react'
import Cookies from 'js-cookie'
import {withRouter, Link, Redirect} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {MdMenu, MdClose, MdHome} from 'react-icons/md'
import {IoIosLogOut} from 'react-icons/io'
import {IoSunnyOutline} from 'react-icons/io5'
import {FaMoon} from 'react-icons/fa'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import Vidoecontext from '../../contextComponent/componetcontext'

import {
  HeaderContainer,
  ButtonEl,
  LogoEl,
  MenuBgCont,
  SmallDeviceCont,
  PopupContainer,
  AlertContainer,
  AlertPara,
  TopContUl,
  Heading,
  AlertBtnCont,
  ButtonCancel,
  ButtonConfirm,
  ButtonLogoutLg,
  LargeDeviceCont,
  ProfileImage,
  ListItem,
} from './styledComponents'

const sidenavList = [
  {
    id: 1,
    text: 'Home',
    path: '/',
  },
  {
    id: 2,
    text: 'Trending',
    path: '/trending',
  },
  {
    id: 3,
    text: 'Gaming',
    path: '/gaming',
  },
  {
    id: 4,
    text: 'Saved Videos',
    path: '/saved-videos',
  },
]

class Header extends Component {
  state = {activeId: sidenavList[0].id}

  setActive = id => {
    this.setState({activeId: id})
  }

  render() {
    return (
      <Vidoecontext.Consumer>
        {value => {
          const {isLight, changeTheme, toggleMenulist} = value

          const redirectToHome = () => <Redirect to="/" />

          const LogoutClicked = () => {
            const {history} = this.props
            Cookies.remove('jwt_token')
            history.replace('/login')
          }

          const logoImg = isLight
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          return (
            <HeaderContainer isLight={isLight}>
              <ButtonEl onClick={redirectToHome}>
                <LogoEl src={logoImg} alt="nxt logo" />
              </ButtonEl>
              <SmallDeviceCont>
                <ButtonEl onClick={changeTheme}>
                  {isLight ? <FaMoon /> : <IoSunnyOutline color="white" />}
                </ButtonEl>
                <PopupContainer>
                  <Popup
                    modal
                    trigger={
                      <ButtonEl onClick={toggleMenulist}>
                        <MdMenu color={`${isLight ? 'black' : 'white'}`} />
                      </ButtonEl>
                    }
                  >
                    {close => (
                      <>
                        <MenuBgCont isLight={isLight}>
                          <ButtonEl onClick={close()}>
                            <MdClose color={`${isLight ? 'black' : 'white'}`} />
                          </ButtonEl>
                          <TopContUl>
                            {sidenavList.map(each => {
                              const {id, text, path} = each
                              const {activeId} = this.state
                              const isActive = activeId === id
                              const buttonCLicked = () => {
                                this.setActive(id)
                              }
                              return (
                                <Link to={`${path}`}>
                                  <ListItem key={id} isActive={isActive}>
                                    <ButtonEl
                                      type="button"
                                      onClick={buttonCLicked}
                                    >
                                      {(() => {
                                        switch (id) {
                                          case 1:
                                            return (
                                              <MdHome
                                                color={
                                                  isActive ? 'red' : 'gray'
                                                }
                                              />
                                            )
                                          case 2:
                                            return (
                                              <HiFire
                                                color={
                                                  isActive ? 'red' : 'gray'
                                                }
                                              />
                                            )
                                          case 3:
                                            return (
                                              <SiYoutubegaming
                                                color={
                                                  isActive ? 'red' : 'gray'
                                                }
                                              />
                                            )
                                          case 4:
                                            return (
                                              <MdMenu
                                                color={
                                                  isActive ? 'red' : 'gray'
                                                }
                                              />
                                            )
                                          default:
                                            return null
                                        }
                                      })()}
                                    </ButtonEl>
                                    <Heading isActive={isActive}>
                                      {text}
                                    </Heading>
                                  </ListItem>
                                </Link>
                              )
                            })}
                          </TopContUl>
                        </MenuBgCont>
                      </>
                    )}
                  </Popup>
                </PopupContainer>
                <PopupContainer>
                  <Popup
                    modal
                    trigger={
                      <ButtonEl>
                        <IoIosLogOut color={`${isLight ? 'black' : 'white'}`} />
                      </ButtonEl>
                    }
                  >
                    {close => (
                      <>
                        <AlertContainer isLight={isLight}>
                          <AlertPara>
                            Are you sure you want to logout?
                          </AlertPara>
                          <AlertBtnCont>
                            <ButtonCancel
                              type="button"
                              className="trigger-button"
                              onClick={() => close()}
                            >
                              Cancel
                            </ButtonCancel>
                            <ButtonConfirm
                              type="button"
                              onClick={LogoutClicked}
                            >
                              Confirm
                            </ButtonConfirm>
                          </AlertBtnCont>
                        </AlertContainer>
                      </>
                    )}
                  </Popup>
                </PopupContainer>
              </SmallDeviceCont>
              <LargeDeviceCont>
                <ButtonEl onClick={changeTheme}>
                  {isLight ? <FaMoon /> : <IoSunnyOutline color="white" />}
                </ButtonEl>
                <ButtonEl>
                  <ProfileImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </ButtonEl>
                <PopupContainer>
                  <Popup
                    modal
                    trigger={
                      <ButtonLogoutLg isLight={isLight}>Logout</ButtonLogoutLg>
                    }
                  >
                    {close => (
                      <>
                        <AlertContainer>
                          <AlertPara>
                            Are you sure you want to logout?
                          </AlertPara>
                          <AlertBtnCont>
                            <ButtonCancel
                              type="button"
                              className="trigger-button"
                              onClick={() => close()}
                            >
                              Cancel
                            </ButtonCancel>
                            <ButtonConfirm
                              type="button"
                              onClick={LogoutClicked}
                            >
                              Confirm
                            </ButtonConfirm>
                          </AlertBtnCont>
                        </AlertContainer>
                      </>
                    )}
                  </Popup>
                </PopupContainer>
              </LargeDeviceCont>
            </HeaderContainer>
          )
        }}
      </Vidoecontext.Consumer>
    )
  }
}
export default withRouter(Header)
