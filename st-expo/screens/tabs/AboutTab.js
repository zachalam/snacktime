import React from 'react';
import { StyleSheet, Text, View, Image, Button,
    ImageBackground, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import scores from '../../config/scores'

export default class AboutTab extends React.Component {



    render() {

      return (
        <View>
            <Text>About</Text>
        </View>
      );
    }
  
  }


const styles = StyleSheet.create(
{
    Header:
    {
        fontSize: 36,
        fontWeight: 'bold'
    },
    MiniHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#666666'        
    },
    MainContainer:
    {
        display: 'flex',
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
        height: 80, 
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