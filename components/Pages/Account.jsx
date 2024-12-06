import { View, Text, Image, ScrollView, DrawerLayoutAndroid, Pressable, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import Accountstyles from '../Stylesheet/AccountStyles'
import { LinearGradient } from 'expo-linear-gradient'
import FavoritesComponent from '../FavoritesComponent'
import { useNavigation } from '@react-navigation/native'

const imageLogo = require('../../assets/Bibliotech_logo.png')
const threeBar = require('../../assets/three_bar.png')
const user_profile = require('../../assets/user_profile.png')

export function Account() {

  const navigation = useNavigation()


  return (

    <View>
      <View style={Accountstyles.header}>

        <Pressable onPress={() => navigation.toggleDrawer()}>
          <Image source={threeBar} style={Accountstyles.threeBar} />
        </Pressable>

        <Image source={imageLogo} style={Accountstyles.img_logo} />
      </View>
      <View style={Accountstyles.grayContainer}>
      </View>

      <Image source={user_profile} style={Accountstyles.userProfile} />

      <View style={Accountstyles.userContainer}>
        <Text style={Accountstyles.userName}>Userame</Text>
        <Text style={Accountstyles.tagName}>@TagName</Text>
      </View>

      <View>
        <Text style={Accountstyles.userBio}>Bio</Text>
        <Text style={Accountstyles.userFavorites}>Favorites</Text>
      </View>

      <ScrollView horizontal style={Accountstyles.FavoritesContainer} showsHorizontalScrollIndicator={false}>
        <FavoritesComponent />
        <FavoritesComponent />
        <FavoritesComponent />
        <FavoritesComponent />
        <FavoritesComponent />
      </ScrollView>
    </View>

  )
}

export default Account