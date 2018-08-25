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
    SecureStore.getItemAsync('reportData').then((data) => { this.setState({reportData: JSON.parse(data)}) })
    SecureStore.getItemAsync('shoppingList').then((data) => { this.setState({shoppingList: JSON.parse(data)}) })
  }

  fetchShoppingList = async () => {
    const response = await fetch(`${MasterConfig.apiUrl}/snacks/0/1/2/3/4`);
    const responseJson = await response.json();
    const { shoppingList } = responseJson;
    console.log('shopping list is what???!?!?!?!')
    console.log(shoppingList);
    return shoppingList;
  }

  saveReportData = async (reportData) => {
    // get shopping list (for snacks).
    let shoppingList = await this.fetchShoppingList();
    // save reportData and shoppingList to state and storage.
    SecureStore.setItemAsync('reportData', JSON.stringify(reportData));
    SecureStore.setItemAsync('shoppingList', JSON.stringify(shoppingList));
    // save report data in session
    this.setState({reportData,shoppingList})
  }

  clearReportData = () => {
    // delete report data to state and storage.
    SecureStore.deleteItemAsync('reportData');
    SecureStore.deleteItemAsync('shoppingList');
    // delete report data in session
    this.setState({reportData: null, shoppingList: ''})
  }

  render() {
    let { reportData } = this.state;
    if(reportData===null) return (<LoginScreen saveReportData={this.saveReportData} />);
    else return (<HomeScreen 
      reportData={this.state.reportData} 
      shoppingList={this.state.shoppingList}
      clearReportData={this.clearReportData}
    />);
  }

}