import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import BasicSearch from './BasicSearch';
import Account from './Account';
import QRScanner from './QRScanner';

const Drawer = createDrawerNavigator();
export const CustomDrawer = () => {
    return (

        <Drawer.Navigator>
            <Drawer.Screen name="BasicSearch" component={BasicSearch} options={{ headerShown: false }} />
            <Drawer.Screen name="Account" component={Account} options={{ headerShown: false }} />
            <Drawer.Screen name="QRScanner" component={QRScanner} options={{ headerShown: false }} />
        </Drawer.Navigator>

    )
}

export function DrawerNav() {
    return (
        <NavigationContainer >
            <CustomDrawer />
        </NavigationContainer>
    )
}
export default CustomDrawer

const styles = StyleSheet.create({})