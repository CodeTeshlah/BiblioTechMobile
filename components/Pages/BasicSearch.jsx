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
      {/* <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={200}
        drawerPosition={'left'}
        renderNavigationView={navigationView}
      >
      </DrawerLayoutAndroid> */}
      <View>
        <View style={BasicSearchStyles.header}>
          <Pressable onPress={() => {
            drawer.current.openDrawer()
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
          </View>
        </View>

        <PageNav />

      </View>
    </View>

  )
}


const navigationView = () => (
  <View style={BasicSearchStyles.drawerContainer}>
    <Pressable onPress={() => {
      console.log('navigation')
      drawer.current.closeDrawer()
    }}>
      <Image source={threeBar} style={BasicSearchStyles.threeBarDrawer} />

    </Pressable>

    <TouchableOpacity style={BasicSearchStyles.drawerButton} onPress={() => navigation.navigate("BasicSearch")}>
      <Text style={BasicSearchStyles.drawerText}>Basic Search</Text>
    </TouchableOpacity>

    <TouchableOpacity style={BasicSearchStyles.drawerButton} onPress={() => navigation.navigate("Account")}>
      <Text style={BasicSearchStyles.drawerText}>Account</Text>
    </TouchableOpacity>

  </View>
);


export default BasicSearch