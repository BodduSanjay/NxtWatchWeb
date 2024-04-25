import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Vidoecontext from '../../contextComponent/componetcontext'

import {
  LoginForm,
  InputLabel,
  Input,
  CheckboxLabel,
  Checkbox,
  LoginButton,
  BackgroundContainer,
  ImageEl,
  ErrorPara,
} from './styledComponents'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMessage: '',
  }

  handleInputChange = event => {
    const {value} = event.target
    this.setState({username: value})
  }

  handleInputChangePassword = event => {
    const {value} = event.target
    this.setState({password: value})
  }

  handleCheckboxChange = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  handleSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const apiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {
      username,
      password,
    }
    const options = {
      body: JSON.stringify(userDetails),
      method: 'POST',
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({
        showPassword: true,
        errorMessage: data.error_msg,
      })
    }
  }

  render() {
    const {username, password, showPassword, errorMessage} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <Vidoecontext.Consumer>
        {value => {
          const {isLight} = value

          const imageUrl = isLight
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          return (
            <BackgroundContainer isLight={isLight}>
              <LoginForm onSubmit={this.handleSubmit} isLight={isLight}>
                <ImageEl src={imageUrl} alt="nxt watch" />

                <InputLabel isLight={isLight} htmlFor="username">
                  USERNAME
                </InputLabel>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={this.handleInputChange}
                />

                <InputLabel isLight={isLight} htmlFor="password">
                  PASSWORD
                </InputLabel>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={password}
                  onChange={this.handleInputChangePassword}
                />

                <CheckboxLabel isLight={isLight}>
                  <Checkbox
                    type="checkbox"
                    checked={showPassword}
                    onChange={this.handleCheckboxChange}
                  />
                  Show Password
                </CheckboxLabel>
                <LoginButton type="submit">Login</LoginButton>
                {showPassword && <ErrorPara>*{errorMessage}</ErrorPara>}
              </LoginForm>
            </BackgroundContainer>
          )
        }}
      </Vidoecontext.Consumer>
    )
  }
}

export default LoginPage
