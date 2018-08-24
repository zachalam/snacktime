import React from 'react';
import { StyleSheet, Text, View, Image, Button,
  ImageBackground, Linking } from 'react-native';
  import { AuthSession, SecureStore } from 'expo';

import MasterConfig from './config/master.js';
import LoginScreen from './screens/login.js';
import SnackScreen from './screens/snacks.js';


export default class App extends React.Component {

  state = {
    reportData: null,   // stores genome traits (when logged in).
    shoppingList: ''
  }

  componentDidMount() {
    // load previously logged in data.
    SecureStore.getItemAsync('reportData')
               .then((reportData) => {
                // async loaded report data.
                console.log("got report Data");
                console.log(reportData);
                // parse json report and store in state..
                reportData = JSON.parse(reportData);
                this.setState({reportData})
               })
  }

  saveReportData = (reportData) => {
    // save report data to state and storage.
    SecureStore.setItemAsync('reportData', JSON.stringify(reportData));
    // get shopping list for this report
    console.log("reportData");
    console.log(reportData);
    this.setState({reportData})
  }

  render() {
    let { reportData } = this.state;
    if(reportData===null) return (<LoginScreen saveReportData={this.saveReportData} />);
    else return (<SnackScreen />);
  }

}