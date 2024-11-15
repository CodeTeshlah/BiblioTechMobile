import { Text, View, Button, Image } from 'react-native'
import React, { useState } from 'react'
import TextBox from '../TextBox'
import styles from '../Stylesheet/LoginStyles'
import { CustomButton, CustomButtonFilled2 } from '../CustomButton'
import { useNavigation } from '@react-navigation/native'

const logoIMG = require('../../assets/Bibliotech_logo.png')

export function LogIn() {
  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const BasicSearchScreen = () => {

    if (email == '' || password == '') {
      alert('Please enter your email and password')
    }
    else {
      navigation.navigate('BasicSearch')
    }
  }

  const SignUpScreen = () => {
    navigation.navigate('SignUp')
  }

  return (
    <View style={styles.LoginPage
    } >
      <View style={styles.LoginLogoContainer}>
        <Image source={logoIMG} style={styles.logo} />
        <Text style={styles.LoginTitle}>Log in to your Account</Text>
        <Text style={styles.LoginDesc}>Welcome Back! {"\n"}Please log in to continue.</Text>
      </View>
      {/* <View style={styles.TextboxContainer}>
        <Text style={styles.TxtName}>Password</Text>
        <TextBox value={password} setValue={setPassword} />
      </View> */}
      <View style={styles.TextboxContainer}>
        <TextBox boxName="Email" value={email} setValue={setEmail} />
        <TextBox boxName="Password" value={password} setValue={setPassword} secureTextEntry={true} />
      </View>
      <View style={[styles.ButtonContainer]}>
        <CustomButton customName='SIGN IN' style={styles.LoginButton} onPress={SignUpScreen} />
        <CustomButton customName='LOG IN' style={styles.LoginButton} onPress={BasicSearchScreen} />
      </View>

      {/* <CustomButtonFilled2 onPress={BasicSearchScreen} /> */}




    </View >
  )
}


export default LogIn



