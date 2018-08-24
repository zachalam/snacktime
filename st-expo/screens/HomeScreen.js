import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity,
    ImageBackground, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NutritionTab from './tabs/NutritionTab';

export default class HomeScreen extends React.Component {

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

    render() {
      return (
        <View style = { styles.MainContainer }>

        <ScrollView style={styles.ScrollView}>
            <NutritionTab reportData={this.props.reportData} />
            <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        </ScrollView>

        <View style={ styles.bottomView} >


        <View style={styles.NavBox}>
        <Ionicons name="md-barcode" size={30} color="white" />
        <Text style={{color:'white'}}>Snacks</Text>
        </View>

        <View style={styles.NavBox}>
        <Ionicons name="md-analytics" size={30} color="white" />
        <Text style={{color:'white'}}>Nutrition</Text>
        </View>

        <View style={styles.NavBox}>
        <Ionicons name="md-contact" size={30} color="white" />
        <Text style={{color:'white'}}>About</Text>
        </View>

        
        <View style={styles.NavBox}>
        <TouchableOpacity style={styles.NavBox} onPress={this.logout}>
        <Ionicons name="md-close-circle" size={30} color="white" />
        <Text style={{color:'white'}}>Logout</Text>
        </TouchableOpacity>
        </View>
        

        </View>
        </View>
      );
    }
  
  }


const styles = StyleSheet.create(
{
    MainContainer:
    {
        flex: 1,
        backgroundColor: '#eeeeee',
    },

    ScrollView: 
    {
        paddingTop:50,
        paddingLeft:30,
        paddingRight:30,
        paddingBottom:200
    },

    NavBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    bottomView:{
    
        width: '100%', 
        height: 70, 
        backgroundColor: '#333333',
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row'
    },
    
    textStyle:{
    
        color: '#fff',
        fontSize:22
    }
});