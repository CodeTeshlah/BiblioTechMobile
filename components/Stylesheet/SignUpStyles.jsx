import {StyleSheet} from 'react-native'

export default SignUpStyles = StyleSheet.create({

    SignUpTitle: {
        color: 'black',
        fontSize: 24,
        paddingTop: 150,
         paddingLeft: 30,
        fontWeight: 'bold',
    },

    SignUpDesc: {
        color: 'black',
        fontSize: 15,
        paddingLeft: 30,
        color: '#5E5E5E',
        top: 10,
        paddingRight: 60,
      },

      SignUp_TxtName: {
        marginTop: 73,
        marginLeft: 35  ,
        color: '#7D3EEC',
        },
  
        SignUp_TextboxContainer: {
        marginBottom: -15,
        marginTop: -40,
        },
  
       
        SignUp_logo: {
          width: 400,
          height: 70,
          margin: 'auto',
          top: 90,
          resizeMode: 'contain'
        },
  
        SignUp_centerPosition: {
          justifyContent: 'center',
        },
  
        SignUp_ButtonContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginRight:  30,
          bottom: 20,
        },

        SignUp_TextLink: {
            marginLeft: 30,
            marginTop: 110,
            color: '#7D3EEC',
        },

        
})