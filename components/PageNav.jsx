import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const prevbutton = require('../assets/prevbutton.png')
const nextbutton = require('../assets/nextbutton.png')
export function PageNav() {
  return (
    <View style={styles.container}>
      <Image source={prevbutton} style={styles.prevbutton}/>

      <View style={styles.pageContainer}>
      <View>
        <Text style={[styles.pageButton, styles.pageSelected]}>1</Text>
      </View>
      <View>
        <Text style={styles.pageButton}>2</Text>
      </View>
      <View>
        <Text style={styles.pageButton}>3</Text>
      </View>
      <View>
        <Text style={styles.pageButton}>4</Text>
      </View>
      <View>
        <Text style={styles.pageButton}>...</Text>
      </View>
      <View>
      <Image source={nextbutton} style={styles.nextbutton}/>
      </View>
      </View>

     
      
    </View>
  )
}

export default PageNav

const styles = StyleSheet.create({

    prevbutton: {
        resizeMode: 'contain',
        marginTop: 21,
        marginRight: 60,
        width: 21,
        height: 21, 
    },

    nextbutton: {
        resizeMode: 'contain',
        marginTop: 21,
        marginLeft: 40,
        width: 21,
        height: 21, 
        
    },

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 30,
        margin: 'auto',
        
    },

    pageButton: {
        padding: 15,
        fontSize: 18,
        color: '#AEAEAE',
        top: 10,
    },

    pageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
    },

    pageSelected: {
        color: '#7D3EEC',
    },
})