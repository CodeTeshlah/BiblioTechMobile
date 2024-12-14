import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const bookMark = require('../assets/bookmark.png')

const imagePlaceholder = require('../assets/image_placeholder.png')

function BookComponent({ bookTitle, bookCallNum, DaysNum, DaysText }) {

  const navigation = useNavigation()

  if (bookTitle == null) {
    bookTitle = "Empty Title"

  }

  if (bookCallNum == null) {
    bookCallNum = "Empty Call Number"
  }

  const bookMarked = () => {
    console.log("bookmark")
  }
  return (

    <View style={bookstyles.Bookcontainer}>
      <Pressable onPress={() => navigation.navigate("BookDetails")}>
        {/* <View style={bookstyles.book}></View> */}
        <Image source={imagePlaceholder} style={bookstyles.book} />

        <View style={bookstyles.bookInfo}>
          <Text style={bookstyles.bookTitle}>{bookTitle}</Text>
          <Text style={bookstyles.bookCallNum}>{bookCallNum}</Text>
          {<Text style={bookstyles.bookDays}>{DaysText}</Text>}
          {<Text style={bookstyles.bookDaysNum}>{DaysNum}</Text>}

        </View>
      </Pressable>
      <TouchableOpacity onPress={bookMarked} style={bookstyles.bookmark}>
        <Image source={bookMark} />
      </TouchableOpacity>
    </View>



  )
}

export default BookComponent

const bookstyles = StyleSheet.create({
  Bookcontainer: {
    position: 'relative',
    display: "flex",
    flexDirection: "row",
    height: 90,
    width: 380,
    margin: 'auto',
    top: 30,
    backgroundColor: '#FFFFFF',
    // borderRadius: 15,
    borderWidth: 1,
    borderColor: '#FFF',
    marginBottom: 15,
    resizeMode: 'contain',
  },

  book: {
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
    left: '6%',
    top: '25%',
    resizeMode: 'contain',
    height: 40,
    width: 40,
  },

  bookCallNum: {
    fontSize: 11,
    color: '#787878',
    top: 25,
    left: 25,
    textAlign: 'center',
  },

  bookDays: {
    fontSize: 14,
    color: '#787878',
    bottom: 18,
    left: 130,
    textAlign: 'center',
    color: 'black',
  },

  bookDaysNum: {
    fontSize: 11,
    color: '#787878',
    bottom: 18,
    left: 150,
    textAlign: 'center',
    fontSize: 11,
  },

  bookInfo: {
    position: 'relative',
    display: "flex",
    flexDirection: "column",
    height: 90,
    width: 300,
    top: '-90%',
    left: '-10%',
  },
})