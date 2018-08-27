import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity,
    ImageBackground, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NutritionTab from './tabs/NutritionTab';
import SnackTab from './tabs/SnackTab';
import AboutTab from './tabs/AboutTab';

import styles from '../assets/css.js'

export default class HomeScreen extends React.Component {

    state = {
        screen: 'snacks'
    }

    snacks = () => { this.setState({screen: 'snacks'}) }
    nutrition = () => { this.setState({screen: 'nutrition'}) }
    about = () => { this.setState({screen: 'about'}) }

    // logout action..
    logout = () => {
        Alert.alert(
            'Are you sure?',
            'Your DNA reports will be removed (you can always log back in).',
            [
              {text: 'Nevermind', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Yes, Logout', onPress: this.props.clearReportData},
            ],
            { cancelable: false }
          )
        console.log("logout");
    }


    renderButtonNav(theAction,theText='Logout',theButton='md-close-circle') {
        // renders an individual button.
        return (
            <View style={styles.NavBox}>
                <TouchableOpacity style={styles.NavBox} onPress={theAction}>
                <Ionicons name={theButton} size={30} color="white" />
                <Text style={{color:'white'}}>{theText}</Text>
                </TouchableOpacity>
            </View>
        )
    }


    renderTab() {
        switch(this.state.screen) {
            case 'nutrition': 
                return (<NutritionTab reportData={this.props.reportData} />)
            case 'about': 
                return (<AboutTab reportData={this.props.reportData} />)                
            default:
                return (<SnackTab 
                    reportData={this.props.reportData}
                    shoppingList={this.props.shoppingList} />)
        }
    }

    render() {
      return (
        <View style = { styles.MainContainer }>
            <ScrollView style={styles.ScrollView}>
                {this.renderTab()}            
                <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
            </ScrollView>

            <View style={styles.bottomView}>
                {this.renderButtonNav(this.snacks,'My Snacks','md-barcode')}
                {this.renderButtonNav(this.nutrition,'Nutrition','md-analytics')}
                {this.renderButtonNav(this.about,'About','md-contact')}    
                {this.renderButtonNav(this.logout,'Logout','md-close-circle')}
            </View>
        </View>
      );
    }
  
  }

