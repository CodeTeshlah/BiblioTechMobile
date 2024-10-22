import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import {TextboxSearch} from '../TextBox'
import BasicSearchStyles from '../Stylesheet/BasicSearchStyles'
import BookComponent from '../BookComponent'
import PageNav from '../PageNav'
import { useNavigation } from '@react-navigation/native'


const imageLogo = require('../../assets/Bibliotech_logo.png')
const threeBar = require('../../assets/three_bar.png')
const filter = require('../../assets/filter_icon.png')


function BasicSearch() {
  const navigation = useNavigation()
  return (
    <View >
      
      <Image source={imageLogo}  style={BasicSearchStyles.img_logo}/>
      
      <Image source={threeBar}  style={BasicSearchStyles.threeBar} />
      
      <View style={BasicSearchStyles.search}>
      <TextboxSearch />
      <Image source={filter}  style={BasicSearchStyles.filtericon}/>

      </View>

      <View style={BasicSearchStyles.bookContainer}>
        <View style={BasicSearchStyles.books}>

      <Pressable onPress={() => navigation.navigate("BookDetails")}>
        <BookComponent />
      </Pressable>
        
        
        </View>
      </View>

      <View>
      <PageNav/>
      </View>

    </View>
  )
}

export default BasicSearch