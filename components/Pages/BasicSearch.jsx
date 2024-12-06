import { View, Text, Image, TouchableOpacity, DrawerLayoutAndroid, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'
import { TextboxSearch } from '../TextBox'
import BasicSearchStyles from '../Stylesheet/BasicSearchStyles'
import BookComponent from '../BookComponent'
import PageNav from '../PageNav'
import { useNavigation } from '@react-navigation/native'



const imageLogo = require('../../assets/Bibliotech_logo.png')
const threeBar = require('../../assets/three_bar.png')
const filter = require('../../assets/filter_icon.png')

function BasicSearch() {
  const navigation = useNavigation()
  const drawer = useRef(null);

  return (
    <View>


      <View>
        <View style={BasicSearchStyles.header}>
          <Pressable onPress={() => {
            navigation.toggleDrawer()
          }}>
            <Image source={threeBar} style={BasicSearchStyles.threeBar} />
          </Pressable>
          <Image source={imageLogo} style={BasicSearchStyles.img_logo} />
        </View>
        <View style={BasicSearchStyles.search}>
          <TextboxSearch style={BasicSearchStyles.TextboxSearch} />
          <Image source={filter} style={BasicSearchStyles.filtericon} />
        </View>
      </View>

      <View >
        <View style={BasicSearchStyles.bookContainer}>
          <View style={BasicSearchStyles.books}>
            <BookComponent />
            <BookComponent />
          </View>
        </View>

        <PageNav />

      </View>
    </View>

  )
}





export default BasicSearch