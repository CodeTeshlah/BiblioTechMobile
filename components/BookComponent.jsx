import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'



const BookComponent = () => {
  return (
    <View style={bookstyles.Bookcontainer}>
        <View style={bookstyles.book}></View>
      <Text>BookComponent</Text>
    </View>
  )
}

export default BookComponent

const bookstyles = StyleSheet.create({
    Bookcontainer: {
        padding: 30,
        height: 80,
        width: 380,
        margin: 'auto',
        top: 40,
        backgroundColor: 'gray',
        borderRadius: 5,
    },

    logo: {
        height: 50,
        width: 50,
        margin: 'auto',
        top: 20,
    },

    book: {
        padding: 35,
        marginTop: 12,
        backgroundColor: 'Purple',
        width: 80,
        height: 10,
        
    },

   
})