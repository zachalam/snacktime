import React from 'react';
import { StyleSheet, Text, View, Image, Button,
  ImageBackground, Linking } from 'react-native';
  import { AuthSession, SecureStore } from 'expo';

import MasterConfig from './config/master.js';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen.js';


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
    // save report data in session
    this.setState({reportData})
  }

  clearReportData = () => {
    // delete report data to state and storage.
    SecureStore.deleteItemAsync('reportData');
    // delete report data in session
    this.setState({reportData: null})
  }

  render() {
    let { reportData } = this.state;
    if(reportData===null) return (<LoginScreen saveReportData={this.saveReportData} />);
    else return (<HomeScreen 
      reportData={this.state.reportData} 
      clearReportData={this.clearReportData}
    />);
  }

}