import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  LoginPage: {
    backgroundColor: 'white',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 70,
  },


  LoginLogoContainer: {
    display: 'flex',
    padding: 0,
    flexDirection: 'column',
    height: "fit-content",
    alignItems: 'center',
    width: '77%',
  },

  logo: {
    width: '100%',
    height: 70,
    resizeMode: 'contain'
  },

  LoginTitle: {
    color: 'black',
    fontSize: 24,
    justifySelf: 'center',
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
    padding: 0,

  },

  LoginDesc: {
    textAlign: 'left',
    fontSize: 15,
    color: '#5E5E5E',
    width: '100%',
  },

  loginView: {
    display: 'inline-flex',
    justifyContent: 'center',
  },

  TextboxContainer: {
    width: '77%',
    gap: 30,
  },

  ButtonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '77%',
  },

  LoginButton: {
    width: '100%',
    height: 40,
  },


})