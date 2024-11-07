import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const image_placeholder = require('../assets/image_placeholder.png')
export function FavoritesComponent () {
  return (
    <View>
      <View style={styles.container}>
        <Image source={image_placeholder} style={styles.image}/>
        <Text>Book Title</Text>
      </View>
    </View>
  )
}

export default FavoritesComponent

const styles = StyleSheet.create({
    
    container: {
        width: 150,
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        flexDirection: 'column',
        top: 10,
    },

    image: {
        width: 120,
        height: 140,
        borderRadius: 15,
        top: -10,
        resizeMode: 'contain',
       
    },
})