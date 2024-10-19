import { StyleSheet, Text, View, Pressable  } from 'react-native'
import React from 'react'



export const CustomButton = () => {
  return (
    <View>
       <Pressable style={styles.CustomButton}>
        <Text style={styles.ButtonText}>SIGN UP</Text>
       </Pressable>
    </View>
  )
}

export const CustomButtonFilled = () => {
  return (
    <View>
      
      <Pressable style={styles.CustomButtonFilled}>
        <Text style={styles.ButtonTextFilled}>LOGIN</Text>
       </Pressable>
       
      
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    CustomButton: {
        alignItems: 'center',
        borderWidth: 2,
        padding: 15,
        width: 145,
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