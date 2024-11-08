import { StyleSheet, Text, View, Image, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const bookMark = require('../assets/bookmark.png')

const imagePlaceholder = require('../assets/image_placeholder.png')

function BookComponent({bookTitle, bookCallNum, style } ) {

  const navigation = useNavigation()

  if (bookTitle == null) {
    bookTitle = "Empty Title"

  }

  if (bookCallNum == null) {
    bookCallNum = "Empty Call Number"
  }
  return (
    <Pressable onPress={() => navigation.navigate("BookDetails")}>
      <View style={[bookstyles.Bookcontainer,style]}>
        {/* <View style={bookstyles.book}></View> */}
        <Image source={imagePlaceholder} style={bookstyles.book}/>
      
      <Image source={bookMark} style={bookstyles.bookmark}/>

      <View>
      <Text style={bookstyles.bookTitle}>{bookTitle}</Text>
      <Text style={bookstyles.bookCallNum}>{bookCallNum}</Text>
      </View>
    </View>
    </Pressable>
    
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
        borderColor: '#FFF',
        marginBottom: 15,
        
    }, 
  
    book: {
        padding: 23,
        margin: 10,
        width: 60,
        height: 60,
        borderRadius: 5,
        resizeMode: 'contain',
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
        left: 25,
        textAlign: 'center',
    },

    
})