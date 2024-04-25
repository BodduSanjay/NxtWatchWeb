import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css'
import Vidoecontext from './contextComponent/componetcontext'
import ProtectedRoute from './components/ProtectedRoute'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

class App extends Component {
  state = {isLight: true, savedVideoList: []}

  changeTheme = () => {
    this.setState(prevState => ({isLight: !prevState.isLight}))
  }

  removeSavedVideosList = id => {
    const {savedVideoList} = this.state
    const updatedSavedVideoList = savedVideoList.filter(each => each.id !== id)
    this.setState({savedVideoList: updatedSavedVideoList})
  }

  addSavedVideosList = videoItem => {
    this.setState(prevState => ({
      savedVideoList: [...prevState.savedVideoList, videoItem],
    }))
  }

  render() {
    const {isLight, savedVideoList} = this.state

    return (
      <Vidoecontext.Provider
        value={{
          isLight,
          savedVideoList,
          changeTheme: this.changeTheme,
          addSavedVideosList: () => {},
          removeSavedVideosList: () => {},
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute component={NotFound} />
        </Switch>
      </Vidoecontext.Provider>
    )
  }
}
export default App
