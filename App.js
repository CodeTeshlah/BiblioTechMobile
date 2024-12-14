import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogIn from './components/Pages/LogIn'
import SignUp from './components/Pages/SignUp'
import BookDetails from './components/Pages/BookDetails'
import Account from './components/Pages/Account'
import CustomDrawer from './components/Pages/CustomDrawer'
import pcClients from './components/Pages/PcClients'


const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="BasicSearch" component={CustomDrawer} options={{ headerShown: false }} />
        <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
        <Stack.Screen name="BookDetails" component={BookDetails} options={{ headerShown: false }} />
        <Stack.Screen name="PcClients" component={pcClients} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>

  )

}

export default App  
