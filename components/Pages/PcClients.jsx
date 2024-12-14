import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ClientComponent from '../ClientComponent'

const prevbutton = require('../../assets/prevbutton.png')
const Bibliotech_logo = require('../../assets/Bibliotech_logo.png')
const PcClients = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.goBack()}>
                <Image source={prevbutton} style={styles.prevButton} />
            </Pressable>

            <View>
                <Image source={Bibliotech_logo} style={styles.logo} />
            </View>

            <View style={styles.PcClientContainer}>
                <ClientComponent clientStatus={"Online"} />
                <ClientComponent clientStatus={"Offline"} />
            </View>
        </View>
    )
}

export default PcClients

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    prevButton: {
        marginLeft: 30,
        marginTop: 43,
    },

    logo: {
        width: 144,
        top: -121,
        resizeMode: 'contain',
        marginLeft: 245,
    },

    PcClientContainer: {
        margin: 'auto',
        top: -180,
    },
})