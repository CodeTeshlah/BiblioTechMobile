import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import BasicSearch from './BasicSearch';
import Account from './Account';
import QRScanner from './QRScanner';
import { Pressable } from 'react-native-gesture-handler';
import BorrowedBook from './BorrowedBook';

const Drawer = createDrawerNavigator();
const threeBar = require('../../assets/three_bar.png')

export const CustomDrawer = ({ navigation }) => {

    const handleLogout = () => {
        // Reset navigation stack to LogIn page and clear history
        navigation.reset({
            index: 0,
            routes: [{ name: 'LogIn' }],
        });
    };

    return (

        <Drawer.Navigator
            drawerContent={(props) => {
                return (
                    <DrawerContentScrollView {...props}>
                        <Pressable onPress={() => props.navigation.closeDrawer()} style={{ marginBottom: 70, padding: 10 }}>
                            <Image source={threeBar} style={styles.threeBar} />
                        </Pressable>

                        <DrawerItemList {...props} />

                        <DrawerItem
                            label="Logout"
                            onPress={handleLogout}
                        />
                    </DrawerContentScrollView>
                );
            }}

            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#C709E4',
                drawerActiveTintColor: 'white',
                drawerStyle: {
                    backgroundColor: 'white',
                }
            }}
        >
            <Drawer.Screen name="Home Page" component={BasicSearch} options={{ headerShown: false }} />
            <Drawer.Screen name="Account" component={Account} options={{ headerShown: false }} />
            <Drawer.Screen name="QR Scanner" component={QRScanner} options={{ headerShown: false }} />
            <Drawer.Screen name="Borrowed Book" component={BorrowedBook} options={{ headerShown: false }} />
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

const styles = StyleSheet.create({

    threeBar: {
        height: 38,
        width: 25,
        top: "5%",
        resizeMode: 'contain',
        left: '80%',
        padding: 10,
    },
})