import { View, Text, Image, TouchableOpacity, DrawerLayoutAndroid, Pressable, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import { TextboxSearch } from '../TextBox'
import BookComponent from '../BookComponent'
import PageNav from '../PageNav'
import { useNavigation } from '@react-navigation/native'



const imageLogo = require('../../assets/Bibliotech_logo.png')
const threeBar = require('../../assets/three_bar.png')
const filter = require('../../assets/filter_icon.png')

export function BorrowedBook() {
    const navigation = useNavigation()

    return (
        <View>


            <View>
                <View style={styles.header}>
                    <Pressable onPress={() => {
                        navigation.toggleDrawer()
                    }}>
                        <Image source={threeBar} style={styles.threeBar} />
                    </Pressable>
                    <Image source={imageLogo} style={styles.img_logo} />
                </View>

            </View>

            <View >
                <View style={styles.bookContainer}>
                    <View style={styles.books}>
                        <BookComponent DaysText={"Days Left"} DaysNum={"3"} />
                    </View>
                </View>

                <PageNav />

            </View>
        </View>

    )
}





export default BorrowedBook

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
        padding: 20,
        paddingBottom: 0,
        bottom: 15,
    },

    img_logo: {
        height: 70,
        width: 150,
        resizeMode: 'contain',
    },

    threeBar: {
        height: 38,
        width: 25,
        // top: 35,
        resizeMode: 'contain',
        // left: 30,
        padding: 10,
    },

    search: {
        // marginTop: 55,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
    },

    filtericon: {
        width: 15,
        height: 30,
        resizeMode: 'contain',
        right: '3%',
    },

    TextboxSearch: {
        height: 40,
        backgroundColor: '#E9E9E9',
        borderRadius: 5,
        padding: 10,
        marginTop: -10,
    },

    bookContainer: {
        width: 410,
        height: 548,
        backgroundColor: '#E8E8E8',
        top: 10,
    },

    books: {
        bottom: 5,
    },

    threeBarDrawer: {
        height: 25,
        width: 25,
        top: 45,
        resizeMode: 'contain',
        left: 30,
    },

    drawerButton: {
        top: 120,
        paddingLeft: 30,
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: 'center',


    },

    drawerText: {
        fontSize: 20,
    },

    drawerSelected: {
        color: '#C709E4',
    },

    drawerContainer: {
        borderTopRightRadius: 10,
    }
}
)

