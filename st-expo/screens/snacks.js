import React from 'react';
import { StyleSheet, Text, View, Image, Button,
    ImageBackground, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Snacks extends React.Component {


    render() {
      return (
        <View style = { styles.MainContainer }>

        <View style={ styles.bottomView} >

        <View style={styles.NavBox}>
        <Ionicons name="md-barcode" size={32} color="white" />
        <Text style={{color:'white'}}>My Snacks</Text>
        </View>

        <View style={styles.NavBox}>
        <Ionicons name="md-analytics" size={32} color="white" />
        <Text style={{color:'white'}}>Nutrition</Text>
        </View>

        <View style={styles.NavBox}>
        <Ionicons name="md-close-circle" size={32} color="white" />
        <Text style={{color:'white'}}>Logout</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    
    NavBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    bottomView:{
    
        width: '100%', 
        height: 100, 
        backgroundColor: '#555555',
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