import { StyleSheet, Text, TextInput, View, Image } from 'react-native'
import React from 'react'
const searchicon = require('../assets/search_icon.png')

export const TextBox = () => {
  return (
    <View>
      <TextInput style={styles.Textbox}></TextInput>
    </View>
  )
}

export const TextboxSearch = () => {
  return (
    <View style={styles.textboxContainer}>
      <TextInput style={styles.textboxSearchbar} placeholder='Search'></TextInput>
      <Image source={searchicon}  style={styles.searchicon}/>
    </View>
  )
}
export default TextBox

const styles = StyleSheet.create({
    Textbox: {
      height: 36,
      width: 330,
      padding: 10,
      marginLeft: 30,
      borderRadius: 5,
      backgroundColor: '#E9E9E9',
      color: '#7D3EEC',
    },

    //Search Bar

    textboxSearchbar: {
        height: 40,
        width: 250,
        padding: 10,
        marginLeft: 25,
        borderRadius: 35, 
        color: '#7D3EEC',
    },

    searchicon:{
      resizeMode: 'contain',
      height : 20,
      alignItems: 'center',
      marginRight: 35,
  },

  textboxContainer: {
    backgroundColor: '#E9E9E9',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    height: 40,
    width: 280,
    marginTop: 10,
    marginLeft: 30,
  },
})