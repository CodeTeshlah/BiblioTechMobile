import { View, Text, Image, TouchableOpacity, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
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

  const [searchText, setSearchText] = useState('');

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
          <TextboxSearch style={BasicSearchStyles.TextboxSearch} searchValue={searchText} setSearchValue={setSearchText} />
          <Image source={filter} style={BasicSearchStyles.filtericon} />
        </View>
      </View>

      <View >
        <View style={BasicSearchStyles.bookContainer}>

          <ScrollView style={{ height: '100%' }}>
            <BookComponent />
            <BookComponent />
          </ScrollView>

        </View>

        <PageNav />

      </View>
    </View>

  )
}





export default BasicSearch