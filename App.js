import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import StackNav from './components/Pages/StackNav'

 

const App = () => {
  return (
        <NavigationContainer>
            <StackNav/>   
        </NavigationContainer>

  )
     
}

export default App  
