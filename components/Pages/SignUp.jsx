import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SignUpStyles from '../Stylesheet/SignUpStyles'
import { CustomButtonFilled } from '../CustomButton'
import TextBox from '../TextBox'
import { useNavigation } from '@react-navigation/native'


const logoIMG = require('../../assets/Bibliotech_logo.png')

export const SignUp = () => {
  const navigation = useNavigation()
  const [Username, setUsername] = useState("")
  const [Password, setPassword] = useState("")
  const [ID, setID] = useState("")

  const LogIn = () => {
    navigation.navigate("LogIn");
  }

  return (
    <View style={SignUpStyles.SignUpContainer}>
      <Image source={logoIMG} style={SignUpStyles.SignUp_logo} />

      <View style={SignUpStyles.SignUp_centerPosition}>

        <Text style={SignUpStyles.SignUpTitle}>Create an Account</Text>
        <Text style={SignUpStyles.SignUpDesc}>Welcome! Please enter your details
          to create an account.</Text>
        <View style={SignUpStyles.SignUp_TextboxContainer}>

          <TextBox boxName='Username' value={Username} setValue={setUsername} />
          <TextBox boxName='ID number' value={ID} setValue={setID} />
          <TextBox boxName='Password' value={Password} setValue={setPassword} />
        </View>

      </View>

      <View style={SignUpStyles.SignUp_ButtonContainer}>

        <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
          <Text style={SignUpStyles.SignUp_TextLink}>Already have an account.</Text>
        </TouchableOpacity>

        <CustomButtonFilled onPress={LogIn} />
      </View>

    </View>
  )
}

export default SignUp