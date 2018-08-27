import React from 'react';
import { StyleSheet, Text, View, Image, Button,
    ImageBackground, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import scores from '../../config/scores'

export default class NutrtionTab extends React.Component {


    renderNutritionBar(title,score=1) {
        let scoreProgress = [0.2,0.4,0.6,0.8,1]
        return (
            <View>
                <Text style={styles.MiniHeader}>{title}{"\n"}</Text>
                <Text>{scores[score]}{"\n"}</Text>
                <Progress.Bar 
                    progress={scoreProgress[score]} 
                    width={250} 
                    animationType={'spring'} 
                    height={40}
                    color={'#b000f7'} />
                <Text>{"\n"}</Text>
            </View>
        )
    }

    getTraitScore(theTrait='calcium') {
        let { reportData } = this.props
        console.log("rd is");
        console.log(reportData);
        if(reportData) return (reportData.find(e=>e.trait===theTrait) || {}).score
        return 0
    }

    render() {
      let { reportData } = this.props
      console.log(reportData);
      console.log("rp")
      return (
        <View>

            <Text style={styles.Header}>Nutrition{"\n"}</Text>
            <Text>The following bars represent a visual comparison of your blood serum level (based on your DNA).</Text>
            <Text>{"\n"}{"\n"}</Text>

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