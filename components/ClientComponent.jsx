import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { MaterialIcons } from '@expo/vector-icons';

const ClientComponent = ({ name, location, clientStatus }) => {

    const [status, setStatus] = useState(false);

    useEffect(() => {

        if (clientStatus === "Online") {
            setStatus(true);
        } else {
            setStatus(false);
        }
    }, [clientStatus]);

    return (

        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                <Text>Name: {name}</Text>

                <View style={{ flexDirection: 'row', width: '25%', justifyContent: 'space-between', top: '65%', right: '5%' }}>
                    <Text>{clientStatus}</Text>
                    <MaterialIcons name="circle" size={21} color={status ? 'green' : 'red'} />
                </View>
            </View>
            <Text>Location: {location}</Text>
        </View>

    )
}

export default ClientComponent

const styles = StyleSheet.create({

    container: {
        width: '95%',
        height: '23%',
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
        paddingLeft: 20,
        margin: 10,
        flexDirection: 'column',
        top: 10,
        elevation: 5,
        gap: 10
    },


})