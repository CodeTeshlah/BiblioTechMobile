import { StyleSheet, Text, View, SafeAreaView, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CameraView } from 'expo-camera'
import { useCameraPermissions } from 'expo-camera'
import { Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const threeBar = require('../../assets/three_bar.png')
const Bibliotech_logo = require('../../assets/Bibliotech_logo.png')

export function QRScanner() {
    const [permission, requestPermission] = useCameraPermissions();
    const isPermissionGranted = Boolean(permission?.granted);
    const [scanned, setScanned] = useState(false);

    const navigation = useNavigation();

    // Automatically request permission when the component mounts
    useEffect(() => {
        if (!isPermissionGranted) {
            requestPermission();
        }
    }, [isPermissionGranted]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setScanned(false); // Reset scanned state when the screen is focused again
        });

        return unsubscribe;
    }, [navigation]);

    const handleBarCodeScanned = ({ data }) => {
        if (!scanned) {
            setScanned(true);
            navigation.navigate('PcClients', { qrData: data });
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>

            <View style={styles.header}>
                <Pressable onPress={() => navigation.toggleDrawer()} style={{ padding: 10 }}>
                    <Image source={threeBar} style={styles.threeBar} />
                </Pressable>

                <Image source={Bibliotech_logo} style={styles.img_logo} />
            </View>

            {isPermissionGranted ? (
                <CameraView
                    facing="back"
                    style={styles.absolueFillObject}
                    onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
                />
            ) : (
                <View style={styles.permissionMessage}>
                    <Text style={styles.permissionText}>
                        Camera permission is required to scan QR codes.
                    </Text>
                </View>
            )}

            <View style={styles.frame}>
                <Text style={styles.frameText}>Scan here</Text>
            </View>
        </SafeAreaView>
    );
}

export default QRScanner;

const styles = StyleSheet.create({
    absolueFillObject: {
        height: '90%',
        top: 10,
    },
    frame: {
        position: 'absolute',
        top: '30%',
        left: '10%',
        right: '10%',
        height: 250,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    frameText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    threeBar: {
        height: 38,
        width: 25,
        resizeMode: 'contain',
        padding: 10,
    },
    img_logo: {
        height: 70,
        width: 150,
        resizeMode: 'contain',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
        padding: 20,
        paddingBottom: 0,
    },
    permissionMessage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    permissionText: {
        color: 'gray',
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
});
