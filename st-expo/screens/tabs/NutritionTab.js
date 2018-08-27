import React from 'react';
import { StyleSheet, Text, View, Image, Button,
    ImageBackground, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import scores from '../../config/scores'

import styles from '../../assets/css.js'

export default class NutrtionTab extends React.Component {

    render() {
      let { reportData } = this.props
      console.log(reportData);
      console.log("rp")
      return (
        <View>

            <Text style={styles.MiniHeader}>Lets take a look at</Text>
            <Text style={styles.Header}>Nutrition & DNA</Text>        

        </View>
      );
    }
  
  }


