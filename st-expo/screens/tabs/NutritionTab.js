import React from 'react';
import { StyleSheet, Text, View, Image, Button,
    ImageBackground, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import scores from '../../config/scores'

import styles from '../../assets/css.js'
import explainGroup from '../../helpers/explainGroup'

export default class NutrtionTab extends React.Component {

    render() {
      let { reportData } = this.props
      let snackGroup = explainGroup(reportData.snackGroup)

      return (
        <View>
          <View style={styles.MainBg}>
              <Text style={styles.MiniHeader}>Lets take a look at</Text>
              <Text style={styles.Header}>Nutrition & DNA</Text> 
              <Text>Based solely on your DNA, we think you'll tend to enjoy
              snacks that are:</Text>
          </View>
          <View style={styles.GrayBg}>
            <Text style={styles.Header}>{snackGroup[0]}</Text>   
            <Text>What does this mean?</Text>     
            <Text style={styles.MiniHeader}>{snackGroup[1]}</Text>        
          </View>
          <View style={styles.MainBg}>
              <Text style={styles.MiniHeader}>Milk Allergy</Text>
              <Text style={styles.Header}>Less Likely</Text>        

              <Text style={styles.MiniHeader}>Peanut Allergy</Text>
              <Text style={styles.Header}>Less Likely</Text>        
          </View>
        </View>
      );
    }
  
  }


