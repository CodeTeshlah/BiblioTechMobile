import { View, Text,  Image, Pressable} from 'react-native'
import React from 'react'
import BookDetailsStyle from '../Stylesheet/BookDetailsStyle'
import { useNavigation } from '@react-navigation/native'

const Prevbutton = require('../../assets/prevbutton.png')
const Bibliotech_logo = require('../../assets/Bibliotech_logo.png')
const bookCover = require('../../assets/bookCover.png')
const bookCoverMark = require('../../assets/bookCoverMark.png')

export function BookDetails () {
  const navigation = useNavigation()
  return (
    <View>
      <Pressable onPress={() => navigation.navigate("BasicSearch")}>
      <Image source={Prevbutton} style={BookDetailsStyle.prevButton}/>
      </Pressable>
      
      <Image source={Bibliotech_logo} style={BookDetailsStyle.logo}/>

      <View>
            <Image source={bookCover} style={BookDetailsStyle.bookCoverContainer}/>
            <Image source={bookCoverMark} style={BookDetailsStyle.bookCoverMark}/>
      </View>

      <View style={BookDetailsStyle.bookDescription}>
        <Text style={BookDetailsStyle.bookTitle}>Book Title</Text>

        <View style={BookDetailsStyle.AuthorContainer}>
        <Text style={BookDetailsStyle.authorText}>Author(s): </Text>
        <Text style={BookDetailsStyle.authorNameText}>Author Name</Text>
        </View>

        <Text style={BookDetailsStyle.CallNumber}>Call Number</Text>

        <View style={BookDetailsStyle.container}>
        <Text style={BookDetailsStyle.TextBookTitle}>Topical Terms</Text>
        <Text style={BookDetailsStyle.TextBookDesc}>Lorem ipsum odor amet, consectetuer adipiscing elit. </Text>
        </View>
        
        <View style={BookDetailsStyle.container}>
        <Text style={BookDetailsStyle.TextBookTitle}>PHYSICAL DESCRIPTION</Text>
        <Text style={BookDetailsStyle.TextBookDesc}>Lorem ipsum odor amet, consectetuer adipiscing elit. </Text>
        </View>
        
      </View>
    </View>
  )
}

export default BookDetails