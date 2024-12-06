import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { CameraView } from 'expo-camera'
import { useCameraPermission } from 'expo-camera'
import { Link } from '@react-navigation/native'
import { useCameraDevice } from 'react-native-vision-camera'


export function QRScanner() {

    // const [permission, requestPermission] = useCameraPermissions();
    // const isPermissionGranted = Boolean(permission?.granted);


    const device = useCameraDevice('back')
    const { hasPermission } = useCameraPermission()

    if (!hasPermission) return <PermissionsPage />
    if (device == null) return <NoCameraDeviceError />


    return (
        <SafeAreaView style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
            <Text>QRScanner</Text>

            {/* <Pressable onPress={requestPermission}>
                <Text>Request Permission</Text>
            </Pressable>
            <Link to="/QRScanner" />
            <Pressable disabled={!isPermissionGranted} >
                <Text>Scan Code</Text>
            </Pressable>
            <CameraView
                style={styles.absolueFillObject}
                facing='back'
                onBarcodeScanned={({ data }) => console.log(data)}
            /> */}

            <Camera
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
            />


        </SafeAreaView>
    )
}

export default QRScanner

const styles = StyleSheet.create({})