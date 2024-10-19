import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export const TextBox = () => {
  return (
    <View>
      <TextInput style={styles.Textbox}></TextInput>
    </View>
  )
}

export const TextboxSearch = () => {
  return (
    <View>
      <TextInput></TextInput>
    </View>
  )
}
export default TextBox

const styles = StyleSheet.create({
    Textbox: {
    height: 36,
    width: 350,
    padding: 10,
    marginLeft: 30,
    borderRadius: 5,
    backgroundColor: '#E9E9E9',
    color: '#7D3EEC',
    },
})