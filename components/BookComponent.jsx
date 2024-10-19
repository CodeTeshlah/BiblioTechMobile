import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

const bookMark = require('../assets/bookmark.png')

function BookComponent({bookTitle, bookCallNum, style } ) {
  if (bookTitle == null) {
    bookTitle = "Empty Title"

  }

  if (bookCallNum == null) {
    bookCallNum = "Empty Call Number"
  }
  return (
    <View style={[bookstyles.Bookcontainer, style]}>
        <View style={bookstyles.book}></View>
      
      <Image source={bookMark} style={bookstyles.bookmark}/>

      <View>
      <Text style={bookstyles.bookTitle}>{bookTitle}</Text>
      <Text style={bookstyles.bookCallNum}>{bookCallNum}</Text>
      </View>
    </View>
  )
}

export default BookComponent

const bookstyles = StyleSheet.create({
    Bookcontainer: {
        position: 'relative',    
        display: "flex",
        flexDirection: "row",
        height: 80,
        width: 380,
        margin: 'auto',
        top: 40,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 15,
    }, 
  
    book: {
        padding: 23,
        margin: 10,
        backgroundColor: 'purple',
        width: 60,
        height: 60,
        borderRadius: 5,
    },

   bookTitle: {
    fontSize: 14,
    color: 'black',
    top: 20,
    left: 10,
    textAlign: 'center',
   },

   bookmark: {
    position: 'absolute',
    right: 10,
    top: 20,
   },

    bookCallNum: {
        fontSize: 11,
        color: '#787878',
        top: 25,
        left: 2,
        textAlign: 'center',
    },

    
})