import React from 'react';
import { StyleSheet, Text, View, Image, Button,
  ImageBackground, Alert } from 'react-native';
  import { AuthSession } from 'expo';

import MasterConfig from '../config/master.js';

export default class Login extends React.Component {

  _handlePressAsync = async () => {
    let { authUrl } = MasterConfig;
    let redirectUrl = AuthSession.getRedirectUrl();
    let result = await AuthSession.startAsync({ authUrl });
    console.log("authurl is", authUrl);
    console.log("result is");
    console.log(result);
    if(result.params && result.params.code) {
      console.log("valid code");
    } else {
        console.log("failed");
        setTimeout(() => {
            Alert.alert(
                'Could not Login',
                'We were unable to authenticate your account, please try again!'
            );
        }, 1000);


    }
    this.setState({ result });
  };

  render() {
    return (
      <ImageBackground
        style={{
          backgroundColor: '#ccc',
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
        source={require('../assets/lander.png')}
      >

        <View style = { styles.MainContainer }>

        <View style={ styles.bottomView} >

        <Button
          onPress={this._handlePressAsync}
          title="Login with genomelink.io"
          color="#CC38E7"
          accessibilityLabel="Learn more about this purple button"
        />

        </View>

        </View>

      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create(
  {
      MainContainer:
      {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
      },
   
      bottomView:{
   
        width: '100%', 
        height: 100, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
      },
   
      textStyle:{
   
        color: '#fff',
        fontSize:22
      }
  });