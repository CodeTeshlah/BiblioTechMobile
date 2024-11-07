import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  LoginTitle: {
    color: 'black',
    fontSize: 24,
    paddingTop: 150,
    paddingLeft: 30,
    fontWeight: 'bold',

  },

  loginView: {
    display: 'inline-flex',
    justifyContent: 'center',
  },

  LoginDesc: {
    color: 'black',
    fontSize: 15,
    paddingLeft: 30,
    color: '#5E5E5E',
    top: 10,
  },

  TxtName: {
    marginTop: 73,
    marginLeft: 35,
    color: '#7D3EEC',
  },

  TextboxContainer: {
    marginBottom: -15,
    marginTop: -30,
  },


  logo: {
    width: 400,
    height: 70,
    margin: 'auto',
    top: 90,
    resizeMode: 'contain'
  },

  centerPosition: {
    display: 'flex',
    // justifyContent: 'center',
    // alignContent: 'center',
  },

  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginRight: 30,

  },

  LoginButton: {
    minWidth: '600px',
    width: '600px',
  },

})