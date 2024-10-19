import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LogIn from './components/Pages/LogIn'
import SignUp from './components/Pages/SignUp'
import BookComponent from './components/BookComponent'

const App = () => {
  return (
    <View>
      {/*<LogIn />*/}
      {/*<SignUp/>*/}
      <BookComponent/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    color: 'black',
    fontSize: 24,
    paddingTop: 172,
    paddingLeft: 30,
  },
})