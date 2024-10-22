import { StyleSheet, Text, View, Pressable, TouchableOpacity  } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'



export const CustomButton = () => {

  const navigation = useNavigation()
  return (
    <View>
       <Pressable style={styles.CustomButton} onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.ButtonText}>SIGN UP</Text>
       </Pressable>
    </View>
  )
}

export const CustomButtonFilled = () => {
  const navigation = useNavigation()
  return (
    <View >
       <TouchableOpacity onPress={() => navigation.navigate("LogIn")} style={styles.CustomButtonFilled}>
      {/* <LinearGradient style={styles.CustomButtonFilled} */}
       {/* colors={['#6234EC', '#C709E480']} */}
      {/* >  */}
      
        <Text style={styles.ButtonTextFilled}>LOGIN</Text>
        
        {/* </LinearGradient> */}
        </TouchableOpacity>
        
    </View>
  )
}

export const CustomButtonFilled2 = () => {
  const navigation = useNavigation()
  return (
    <View >
       <TouchableOpacity onPress={() => navigation.navigate("BasicSearch")} style={styles.CustomButtonFilled}>
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