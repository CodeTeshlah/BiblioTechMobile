import { View, Text, Image, ScrollView, DrawerLayoutAndroid, Pressable, TouchableOpacity } from 'react-native'
import React, {useRef, useState}from 'react'
import Accountstyles from '../Stylesheet/AccountStyles'
import { LinearGradient } from 'expo-linear-gradient'
import FavoritesComponent from '../FavoritesComponent'
import { useNavigation } from '@react-navigation/native'

const imageLogo = require('../../assets/Bibliotech_logo.png')
const threeBar = require('../../assets/three_bar.png')
const user_profile = require('../../assets/user_profile.png')

export function Account () {

  const navigation = useNavigation()
  const drawer = useRef(null);

  const navigationView = () => (
    <View style={BasicSearchStyles.drawerContainer}>
      <Pressable onPress={() => drawer.current.closeDrawer()}>
      <Image source={threeBar} style={BasicSearchStyles.threeBarDrawer}/>
      
      </Pressable>
      
      <TouchableOpacity style={BasicSearchStyles.drawerButton} onPress={() => navigation.navigate("BasicSearch")}>
        <Text style={BasicSearchStyles.drawerText}>Basic Search</Text>
      </TouchableOpacity>

      <TouchableOpacity style={BasicSearchStyles.drawerButton} onPress={() => navigation.navigate("Account")}>
        <Text style={BasicSearchStyles.drawerText}>Account</Text>
      </TouchableOpacity>
      
    </View>
     );

  return (
    <DrawerLayoutAndroid 
      ref={drawer}
      drawerWidth={200}
      drawerPosition={'left'}
      renderNavigationView={navigationView}>
    <View>
    
    <Image source={imageLogo}  style={Accountstyles.img_logo}/>

      <Pressable onPress={() => drawer.current.openDrawer()}>
      <Image source={threeBar}  style={Accountstyles.threeBar}/>
      </Pressable>
      
    

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
    </DrawerLayoutAndroid>
  )
}

export default Account