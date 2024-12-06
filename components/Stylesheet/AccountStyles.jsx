import { StyleSheet } from 'react-native'

export default Accountstyles = StyleSheet.create({

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

    grayContainer: {
        width: 415,
        height: 190,
        backgroundColor: '#CACACA',
        margin: 'auto',
        top: 50,
    },

    userProfile: {
        left: 30,
        top: -15,
        height: 150,
        width: 150,
    },

    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    tagName: {
        fontSize: 12,
        color: '#7D7D7D',
    },

    userContainer: {
        marginLeft: 30,
        top: 5,
        marginBottom: 20,
    },

    userBio: {
        fontSize: 18,
        color: '#7D7D7D',
        marginLeft: 30,
    },

    userFavorites: {
        color: '#7D3EEC',
        marginLeft: 31,
        top: 10,
        fontSize: 18,
    },

    FavoritesContainer: {
        width: 415,
        height: 240,
        backgroundColor: '#CACACA',
        margin: 'auto',
        top: 10,

    },
})