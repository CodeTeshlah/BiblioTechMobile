import { StyleSheet } from "react-native"


export default BasicSearchStyles = StyleSheet.create({
    img_logo: {
        height: 70,
        width: 150,
        top: 90,
        resizeMode: 'contain',
        marginLeft: 235,
        marginTop: -65,
    },

    threeBar: {
        height: 38,
        width: 25,
        top: 35,
        resizeMode: 'contain',
        left: 30,
        padding: 10,
    },

    search: {
        marginTop: 55,
    },

    filtericon: {
        marginLeft: 352,
        width: 15,
        height: 30,
        resizeMode: 'contain',
        marginTop: -35,
    },

    bookContainer: {
        width: 410,
        height: 548,
        backgroundColor: '#E8E8E8',
        top: 30,
    },

    books: {
        marginTop: -30,
    },

    threeBarDrawer: {
        height: 25,
        width: 25,
        top: 45,
        resizeMode: 'contain',
        // marginLeft: 130,
        left: 30,
    },

    drawerButton: {
        top: 120,
        paddingLeft: 30,
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: 'center',


    },

    drawerText: {
        fontSize: 20,
    },

    drawerSelected: {
        color: '#C709E4',
    },

    drawerContainer: {
        borderTopRightRadius: 10,
    }
})