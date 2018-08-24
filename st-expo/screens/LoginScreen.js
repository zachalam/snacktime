import React from 'react';
import { StyleSheet, Text, View, Image, Button,
  ImageBackground, Alert } from 'react-native';
  import { AuthSession } from 'expo';

import MasterConfig from '../config/master.js';
import Spinner from 'react-native-loading-spinner-overlay';

export default class LoginScreen extends React.Component {

  state = {
    isLoading: false
  }

  couldNotLogin = () => {
    // could not login.
    setTimeout(() => {
      Alert.alert(
          'Could not Login',
          'We were unable to authenticate your account, please try again!'
      );
    }, 1000);
  }

  _handlePressAsync = async () => {
    let { authUrl } = MasterConfig;
    let redirectUrl = AuthSession.getRedirectUrl();

    this.setState({isLoading: true})

    let result = await AuthSession.startAsync({ authUrl });
    console.log("authurl is", authUrl);
    console.log("result is");
    console.log(result);
    if(result.params && result.params.code) {
      console.log("valid code");
      let { code } = result.params;
      try {
          const response = await fetch(`${MasterConfig.apiUrl}/reports/${code}`);
          const responseJson = await response.json();
          // save report data.
          this.setState({isLoading: false})
          this.props.saveReportData(responseJson);
      } catch(error){
          console.error(error);
          this.setState({isLoading: false})
          this.couldNotLogin();
      }  

    } else {
        this.couldNotLogin();
        // stop loading..
        this.setState({isLoading: false})
    }
  };

  render() {

    // show loading screen if authenticating...
    if(this.state.isLoading) {
      return (
      <View style={{ flex: 1 }}>
        <Spinner visible={this.state.isLoading} textContent={"Get ready to snack..."} textStyle={{color: '#FFF'}} />
      </View>
      )
    }

    // otherwise show login screen
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
          color="#b000f7"
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