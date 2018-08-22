import React from 'react';
import { StyleSheet, Text, View, Image, Button,
  ImageBackground, Linking } from 'react-native';
  import { AuthSession } from 'expo';

import MasterConfig from './config/master.js';
import LoginScreen from './screens/login.js';


export default class App extends React.Component {

  render() {
    return (
        <LoginScreen />
    );
  }
}
