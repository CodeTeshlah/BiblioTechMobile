import React , {useRef, useState}from 'react'
import { View, Image, StyleSheet, DrawerLayoutAndroid, TouchableOpacity, Pressable, Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import BasicSearch from "./BasicSearch";
import Account from "./Account";
import BasicSearchStyles from '../Stylesheet/BasicSearchStyles';



const three_bar = require('../../assets/three_bar.png')

export function  DrawerNav () {
    const Drawer = createDrawerNavigator();
    const drawer = useRef(null);

    const navigationView = () => (
        <View style={BasicSearchStyles.drawerContainer}>
          <Pressable onPress={() => drawer.current.closeDrawer()}>
          <Image source={three_bar} style={BasicSearchStyles.threeBarDrawer}/>
          
          </Pressable>
          
          <TouchableOpacity style={BasicSearchStyles.drawerButton} onPress={() => navigation.navigate("BasicSearch")}>
            <Text style={BasicSearchStyles.drawerText}>Basic Search</Text>
          </TouchableOpacity>
    
          <TouchableOpacity style={BasicSearchStyles.drawerButton} onPress={() => navigation.navigate("Account")}>
            <Text style={BasicSearchStyles.drawerText}>Account</Text>
          </TouchableOpacity>
          
        </View>
         );

  return (
    // <Drawer.Navigator 
    // drawerContent={
    //     (props) => {
    //         return(
    //             <SafeAreaView>
    //                 <View style={{
    //                     height: 130,
    //                 }}>
    //                     <Image source={three_bar} style={styles.three_bar}/>
    //                 </View>
                    
    //                 <DrawerItemList {...props} />
                    
    //             </SafeAreaView>
    //         )
    //     }
    // }    
    // screenOptions={{
    //     drawerPosition:"left",
    //     drawerActiveTintColor: '#C709E4',
    //     drawerActiveBackgroundColor: '#ffffff',
    //     drawerStyle: {
    //         width: 250,
    //         borderTopLeftRadius: 10,
    //         borderBottomLeftRadius: 10,
            
    //     },
    //     drawerLabelStyle: {
    //         fontSize: 24,
    //         marginLeft: 21,
    //     },
    //     }}>


    //   <Drawer.Screen name="Basic Search" component={BasicSearch} options={{ headerShown: false }}/>
    //   <Drawer.Screen name="Account" component={Account} options={{ headerShown: false }}/>
    // </Drawer.Navigator>
    <DrawerLayoutAndroid
    ref={drawer}
    drawerWidth={200}
    drawerPosition={'left'}
    renderNavigationView={navigationView}
    >
        <View>
        <Pressable onPress={() => drawer.current.openDrawer()}>
      <Image source={three_bar}  style={BasicSearchStyles.threeBar} />
      
      </Pressable>
        </View>
    </DrawerLayoutAndroid>
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