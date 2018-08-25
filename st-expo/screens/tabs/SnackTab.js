import React from 'react';
import { StyleSheet, Text, View, Image, Button,
    ImageBackground, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import scores from '../../config/scores'

export default class SnackTab extends React.Component {

    renderWhySnack(nutrient,score=0,percent=50,size=80) {
        return (
            <Text>
                {scores[score]} of {nutrient}.
                Each {size} serving of this snack has {percent}% of your daily suggested intake.
            </Text>
        )
    }

    renderShoppingList() {
        let {shoppingList} = this.props
        let renderedList = [];

        console.log("shopping list!!!ASGASGASGSAG");
        console.log(this.props);
        
        console.log(this.props.shoppingList);
        shoppingList.forEach((e,i) => {
            renderedList.push(
                <View key={i}>
                    <Text style={styles.MiniHeader}>{e.item.title}{"\n"}</Text>
                    <Image
                        style={{width: 300, height: 300}}
                        source={{uri: e.item.img}}
                    />
                    <Text style={{fontWeight:'bold'}}>Why this snack?</Text>
                    {this.renderWhySnack(e.type,e.level,e.percent,e.size)}
                    <Text>{"\n"}</Text>

                    <Button
                    onPress={(e) => { console.log("t")}}
                    title={`Buy on Amazon (${e.item.price})`}
                    color="#ff9500"
                    accessibilityLabel="Learn more about this purple button"
                    />
                    <Text>{"\n"}{"\n"}{"\n"}</Text>
                </View>
            )
        })
        return renderedList
    }


    render() {
      if(!this.props.shoppingList) return null;
      return (
        <View>
            <Text style={styles.Header}>My Snacks{"\n"}</Text>
            <Text>The following bars represent a visual comparison of your blood serum level (based on your DNA).</Text>
            <Text>{"\n"}{"\n"}</Text>            
            {this.renderShoppingList()}
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