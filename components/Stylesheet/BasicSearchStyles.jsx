import { StyleSheet } from "react-native"


export default BasicSearchStyles = StyleSheet.create({
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

    search: {
        // marginTop: 55,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
    },

    filtericon: {
        width: 15,
        height: 30,
        resizeMode: 'contain',
    },

    TextboxSearch: {
        height: 40,
        backgroundColor: '#E9E9E9',
        borderRadius: 5,
        padding: 10,
        marginTop: -10,
    },

    bookContainer: {
        width: 410,
        height: 548,
        backgroundColor: '#E8E8E8',
        top: 30,
    },

    books: {
        top: -30,
    },

    threeBarDrawer: {
        height: 25,
        width: 25,
        top: 45,
        resizeMode: 'contain',
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