import React from 'react';
import { StyleSheet, Text, View, Image, Button,
  ImageBackground, Linking } from 'react-native';
  import { AuthSession, SecureStore } from 'expo';

import MasterConfig from './config/master.js';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen.js';
import parseReport from './helpers/parseReport';

import snackList from './config/snacks.js';

export default class App extends React.Component {

  state = {
    reportData: null,   // stores genome traits (when logged in).
  }

  componentDidMount() {
    // load previously logged in data.
    SecureStore.getItemAsync('reportData').then((data) => { this.setState({reportData: JSON.parse(data)}) })
  }

  saveReportData = async (reportData) => {
    // get shopping list (for snacks).
    //let shoppingList = await this.fetchShoppingList();
    // save reportData and shoppingList to state and storage.
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

  shoppingList = (theReport) => {
    // generate shopping list of snacks based on report data.
    let { snackGroup } = theReport;
    // filter out all snacks not in this group.
    let shoppingList = snackList.filter(s => s.group === snackGroup)
    // randomly sort shopping list.
    return shoppingList.sort();
  }

  render() {
    let { reportData } = this.state;

    // check to see if  we need to login.
    if(reportData===null) return (<LoginScreen saveReportData={this.saveReportData} />);

    // already logged in; send report and shopping list to home screen.
    let parsedReport = parseReport(reportData)
    let shoppingList = this.shoppingList(parsedReport);

    return (
      <HomeScreen 
        reportData={parsedReport} 
        shoppingList={shoppingList}
        clearReportData={this.clearReportData}
      />
    );

  }

}