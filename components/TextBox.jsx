import { StyleSheet, TextInput, View, Image, Text } from 'react-native'
import React from 'react'
const searchicon = require('../assets/search_icon.png')

export const TextBox = ({ value, setValue, placeholder, secureTextEntry, boxName = "boxName" }) => {
  return (
    <View style={styles.CustomTextBoxContainer}>
      <Text style={styles.TxtName}>{boxName}</Text>
      <TextInput style={styles.Textbox} placeholder={placeholder} value={value} secureTextEntry={secureTextEntry}
        onChangeText={(value) => setValue(value)}></TextInput>
    </View>
  )
}

export const TextboxSearch = ({ searchValue, setSearchValue, style }) => {
  return (
    <View style={[styles.textboxContainer, style]}>
      <TextInput style={styles.textboxSearchbar} placeholder='Search' searchValue={searchValue} onChangeText={(searchValue) => setSearchValue(searchValue)}></TextInput>
      <Image source={searchicon} style={styles.searchicon} />
    </View>
  )
}
export default TextBox

const styles = StyleSheet.create({
  Textbox: {
    height: 36,
    minWidth: "85%",
    width: "100%",
    padding: 10,
    alignSelf: "center",
    borderRadius: 5,
    backgroundColor: '#E9E9E9',
    color: '#7D3EEC',
  },

  CustomTextBoxContainer: {
    minHeight: 'fit-content',
  },

  TxtName: {
    fontSize: 12,
    color: '#7D3EEC',

  },

  //Search Bar

  textboxSearchbar: {
    height: 40,
    width: '70%',
    padding: 10,
    marginLeft: 25,
    borderRadius: 35,
    color: '#7D3EEC',
  },

  searchicon: {
    // resizeMode: 'contain',
    // height: 15,
    // width: 15,
    // alignItems: 'center',
    // marginRight: 70,
  },

  textboxContainer: {
    backgroundColor: '#E9E9E9',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 35,
    height: 40,
    overflow: 'hidden',
    minWidth: 200,
    // width: 280,
    // margin: '',
    // marginTop: 10,
    // marginLeft: 30,
  },
})