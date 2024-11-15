import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogIn from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";
import BasicSearch from "./BasicSearch";
import BookDetails from "./BookDetails";
import Account from "./Account";

const StacksNav = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="BasicSearch" component={BasicSearch} options={{ headerShown: false }} />
            <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
            <Stack.Screen name="BookDetails" component={BookDetails} options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}

export default StacksNav;