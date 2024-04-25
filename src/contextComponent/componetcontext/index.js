import React from 'react'

const Vidoecontext = React.createContext({
  savedVideoList: [],
  isLight: true,
  changeTheme: () => {},
  addSavedVideosList: () => {},
  removeSavedVideosList: () => {},
})
export default Vidoecontext
