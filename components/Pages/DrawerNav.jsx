import React from "react";
import { View, Image, StyleSheet } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import BasicSearch from "./BasicSearch";
import Account from "./Account";



const three_bar = require('../../assets/three_bar.png')

export function  DrawerNav () {
    const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator 
    drawerContent={
        (props) => {
            return(
                <SafeAreaView>
                    <View style={{
                        height: 130,
                    }}>
                        <Image source={three_bar} style={styles.three_bar}/>
                    </View>
                    
                    <DrawerItemList {...props} />
                    
                </SafeAreaView>
            )
        }
    }    
    screenOptions={{
        drawerPosition:"right",
        drawerActiveTintColor: '#C709E4',
        drawerActiveBackgroundColor: '#ffffff',
        drawerStyle: {
            width: 250,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            
        },
        drawerLabelStyle: {
            fontSize: 24,
            marginLeft: 21,
        },
        }}>


      <Drawer.Screen name="Basic Search" component={BasicSearch} options={{ headerShown: false }}/>
      <Drawer.Screen name="Account" component={Account} options={{ headerShown: false }}/>
    </Drawer.Navigator>
  );
}

export default DrawerNav;

const styles = StyleSheet.create({

    three_bar: {
        height: 38,
        width: 25,
        marginLeft: 175,
        marginTop: 20,
        resizeMode: 'contain',
    },

    
})