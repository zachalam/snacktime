import React from 'react';
import { StyleSheet, Text, View, Image, Button,
    ImageBackground, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import scores from '../../config/scores'

import styles from '../../assets/css.js'

export default class SnackTab extends React.Component {

    state = {
        itemNumber: 0
    }

    setNextItem = () => {
        // set the new item to view.
        let {shoppingList} = this.props
        let maxShoppingListIndex = shoppingList.length;
        let nextItemNumber = this.state.itemNumber+1
        if(nextItemNumber===maxShoppingListIndex) nextItemNumber=0
        this.setState({itemNumber: nextItemNumber})
    }

    renderWhySnack() {
        return (
            <Text>
                snack!!!
            </Text>
        )
    }

    renderShoppingList(itemNumber=0) {
        let {shoppingList} = this.props

        let e = shoppingList[itemNumber]
        let theName = e.name.split(",")[0]

        return (
            <View>
                <Text style={styles.MiniHeader}>How about some?</Text>
                <Text style={styles.Header}>{theName}{"\n"}</Text>

                <Button
                onPress={this.setNextItem}
                title={`Try Another Snack (${itemNumber+1} of ${shoppingList.length})`}
                color="#006aff"
                accessibilityLabel="Load another snack."
                />

                <Text>{"\n"}{"\n"}</Text>

                <Image
                    style={{width: 250, height: 250}}
                    source={{uri: e.img}}
                />
                <Text style={{fontWeight:'bold'}}>Why is this snack for me?</Text>
                {this.renderWhySnack()}
                <Text>{"\n"}</Text>

                 <Button
                onPress={(e) => { console.log("t")}}
                title={`Buy on Amazon`}
                color="#ff9500"
                accessibilityLabel="Load amazon shopping."
                />



                <Text>{"\n"}{"\n"}{"\n"}</Text>
            </View>
        )

    }


    render() {

        let {itemNumber} = this.state;
        return (
            <View>          
                {this.renderShoppingList(itemNumber)}
            </View>
        );
    }
  
}
