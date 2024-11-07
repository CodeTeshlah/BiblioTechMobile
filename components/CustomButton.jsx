import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'



export const CustomButton = ({ onPress, style, customName = "Insert Name" }) => {

  const navigation = useNavigation()
  return (
    <View style={[]}>
      <Pressable style={[styles.CustomButton, style]} onPress={onPress}>
        <Text style={styles.ButtonText}>{customName}</Text>
      </Pressable>
    </View>
  )
}

export const CustomButtonFilled = ({ onPress }) => {
  const navigation = useNavigation()
  return (
    <View >
      <TouchableOpacity onPress={onPress} style={styles.CustomButtonFilled}>
        {/* <LinearGradient style={styles.CustomButtonFilled} */}
        {/* colors={['#6234EC', '#C709E480']} */}
        {/* >  */}

        <Text style={styles.ButtonTextFilled}>LOGIN</Text>

        {/* </LinearGradient> */}
      </TouchableOpacity>

    </View>
  )
}

export const CustomButtonFilled2 = ({ onPress }) => {
  const navigation = useNavigation()
  return (
    <View >
      <TouchableOpacity onPress={onPress} style={styles.CustomButtonFilled}>
        {/* <LinearGradient style={styles.CustomButtonFilled} */}
        {/* colors={['#6234EC', '#C709E480']} */}
        {/* >  */}

        <Text style={styles.ButtonTextFilled}>LOGIN</Text>

        {/* </LinearGradient> */}
      </TouchableOpacity>

    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  CustomButton: {
    alignItems: 'center',
    borderWidth: 2,
    padding: 15,
    // width: 145,
    minWidth: 100,
    borderRadius: 30,
    top: 100,
    marginLeft: 30,
    borderColor: '#7D3EEC',
  },

  ButtonText: {
    fontSize: 16,
    color: '#7D3EEC',
  },

  CustomButtonFilled: {
    alignItems: 'center',
    borderWidth: 2,
    padding: 15,
    width: 145,
    borderRadius: 30,
    top: 100,
    marginLeft: 30,
    backgroundColor: '#7D3EEC',
    borderColor: '#7D3EEC',

  },

  ButtonTextFilled: {
    fontSize: 16,
    color: '#FFFFFF',
  },


})