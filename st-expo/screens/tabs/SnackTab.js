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

    renderShoppingList(itemNumber=0) {
        let {shoppingList} = this.props

        let e = shoppingList[itemNumber]

        return (
            <View>
                <Text style={styles.MiniHeader}>{e.item.title}{"\n"}</Text>
                <Image
                    style={{width: 300, height: 300}}
                    source={{uri: e.item.img}}
                />
                <Text style={{fontWeight:'bold'}}>Why is this snack for me?</Text>
                {this.renderWhySnack(e.type,e.level,e.percent,e.size)}
                <Text>{"\n"}</Text>

                <Button
                onPress={(e) => { console.log("t")}}
                title={`Buy on Amazon (${e.item.price})`}
                color="#ff9500"
                accessibilityLabel="Learn more about this purple button"
                />

                <Button
                onPress={(e) => { console.log("t")}}
                title={`Try Another Snack: 1/9`}
                color="#dddddd"
                accessibilityLabel="Learn more about this purple button"
                />

                <Text>{"\n"}{"\n"}{"\n"}</Text>
            </View>
        )

    }


    render() {
      if(!this.props.shoppingList) return null;
      return (
        <View>          
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
        fontSize: 22,
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