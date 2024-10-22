import { Text, View, Button, Image } from 'react-native'
import React from 'react'
import TextBox from '../TextBox'
import styles from '../Stylesheet/LoginStyles'
import { CustomButton, CustomButtonFilled2} from '../CustomButton'
import { useNavigation } from '@react-navigation/native'







const logoIMG = require('../../assets/Bibliotech_logo.png')

export const LogIn = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Image source={logoIMG} style={styles.logo}/>

      <View style={styles.centerPosition}>

      <Text style={styles.LoginTitle}>Log in to your Account</Text>
      <Text style={styles.LoginDesc}>Welcome Back! {"\n"}Please log in to continue.</Text>
      <View style={styles.TextboxContainer}>
      <Text style={styles.TxtName}>Email</Text>
      <TextBox />
      </View>
     
      <View style={styles.TextboxContainer}>
      <Text style={styles.TxtName}>Password</Text>
      <TextBox />
      </View>
      </View>

      <View>
      
      </View>
      
      {/*Buttons*/}
      <View style={styles.ButtonContainer}>

      <CustomButton />
      <CustomButtonFilled2/>
      
      </View>

   

     

    </View>
  )
}

export default LogIn



 