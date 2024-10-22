import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import Accountstyles from '../Stylesheet/AccountStyles'
import { LinearGradient } from 'expo-linear-gradient'
import FavoritesComponent from '../FavoritesComponent'

const imageLogo = require('../../assets/Bibliotech_logo.png')
const threeBar = require('../../assets/three_bar.png')
const user_profile = require('../../assets/user_profile.png')

export function Account () {
  return (
    <View>
      <Image source={imageLogo}  style={Accountstyles.img_logo}/>
    <Image source={threeBar}  style={Accountstyles.threeBar}/>

    <View style={Accountstyles.grayContainer}>
    </View>
    
    <Image source={user_profile} style={Accountstyles.userProfile}/>
    
    <View style={Accountstyles.userContainer}>
        <Text style={Accountstyles.userName}>Userame</Text>
        <Text style={Accountstyles.tagName}>@TagName</Text>
    </View>

    <View>
    <Text style={Accountstyles.userBio}>Bio</Text>
    <Text style={Accountstyles.userFavorites}>Favorites</Text>
    </View>
    
    <ScrollView horizontal style={Accountstyles.FavoritesContainer} showsHorizontalScrollIndicator={false}>
        <FavoritesComponent/>
        <FavoritesComponent/>
        <FavoritesComponent/>
        <FavoritesComponent/>
        <FavoritesComponent/>
    </ScrollView>
    </View>
  )
}

export default Account