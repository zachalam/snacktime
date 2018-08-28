import React from 'react';
import { StyleSheet, Text, View, Image, Button,
    ImageBackground, Alert, Dimensions, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import scores from '../../config/scores'
import explainGroup from '../../helpers/explainGroup'
import styles from '../../assets/css.js'

import FadeIn from 'react-native-fade-in-image';

const dimensions = Dimensions.get('window');
const imageSize = dimensions.width;


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

    renderWhySnack(theSnack) {
        return (
            <Text>
                {`\u2022`} This snack has {theSnack.carb}% carbohydrates by weight, and {theSnack.protein}% protein by weight.
                {"\n"}
                {`\u2022`} {explainGroup(theSnack.group)[2]}
            </Text>
        )
    }

    renderShoppingList(itemNumber=0) {
        let {shoppingList} = this.props

        let e = shoppingList[itemNumber]
        let theName = e.name.split(",")[0]

        return (
            <View>
                <View style={styles.GrayBg}>
                    <Text style={styles.MiniHeader}>You might enjoy:</Text>
                    <Text style={styles.Header}>{theName}{"\n"}</Text>

                    <Button
                    onPress={this.setNextItem}
                    title={`Next Snack (${itemNumber+1} of ${shoppingList.length})`}
                    color="#006aff"
                    accessibilityLabel="Load another snack."
                    />
                </View>

                <Text>{"\n"}</Text>
                <FadeIn>
                <Image
                    style={{ height: imageSize, width: imageSize }}
                    source={{uri: e.img}}
                />
                </FadeIn>

                <View style={styles.MainBg}>
                    <Text style={styles.MiniHeader}>Why is this snack for me?</Text>
                    {this.renderWhySnack(e)}
                    <Text>{"\n"}</Text>

                    <Button
                    onPress={() => { Linking.openURL(e.url) }}
                    title={`Buy on Amazon`}
                    color="#ff9500"
                    accessibilityLabel="Load amazon shopping."
                    />
                </View>


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
