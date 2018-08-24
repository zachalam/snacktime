import React from 'react';
import { StyleSheet, Text, View, Image, Button,
    ImageBackground, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Snacks extends React.Component {


    render() {
      return (
        <View style = { styles.MainContainer }>

        <ScrollView>
            <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum convallis lectus. Nullam eros ipsum, interdum quis velit a, porttitor tincidunt metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet nunc vitae arcu consectetur porttitor nec sed ante. Vestibulum lobortis quam quis tempus aliquam. Pellentesque et risus turpis. Vestibulum congue sapien eu fringilla vestibulum. Suspendisse sagittis, magna at ultricies aliquet, sem lacus ornare felis, id feugiat magna nisi id magna. Nullam dapibus risus ut orci auctor facilisis. Aenean convallis enim iaculis, sollicitudin urna eget, ornare tortor. Donec quis euismod erat, at tincidunt augue. Nam quis accumsan mi.

Aliquam imperdiet ante mi. Morbi sem nisi, facilisis et fermentum sit amet, consectetur sit amet lacus. Ut eros quam, fringilla id justo et, egestas bibendum nunc. Nunc interdum blandit tristique. Vivamus id rutrum turpis, vulputate malesuada tortor. Nunc eu tortor metus. Aliquam tempus enim nec rhoncus vehicula. Fusce at leo sed ipsum lobortis malesuada. Nullam vitae nibh sit amet est feugiat congue ac non diam. Quisque ultrices neque eget mattis bibendum. Ut tristique nisi non elit gravida volutpat.

Curabitur mattis rhoncus felis at mattis. Sed bibendum, dolor sit amet fermentum dignissim, nisi neque aliquam enim, vitae tincidunt lectus ligula vitae turpis. Vestibulum et lacus ut ex dignissim posuere. Nunc viverra libero et enim mattis, nec tincidunt velit commodo. Aenean egestas enim sem, a auctor erat venenatis at. Cras dictum leo non ornare efficitur. Aenean tempus magna urna, sed vehicula odio egestas vel. Morbi et lacus sed sapien tincidunt suscipit semper et dolor. Vivamus porta a neque aliquam egestas. Vestibulum quis finibus odio. Donec sit amet elementum urna. Vivamus at gravida dolor. Aliquam erat volutpat. Cras ut leo in enim bibendum sagittis. Nulla facilisis justo pharetra leo ultricies, sed laoreet libero gravida. Morbi rutrum sollicitudin tellus viverra tempor.

Sed est sem, suscipit sed interdum ut, suscipit id neque. Etiam a nisl a orci elementum ullamcorper quis eu massa. Fusce sed purus auctor, sodales risus a, blandit quam. Nulla at arcu in urna luctus varius vitae in massa. Fusce nec aliquet est, sit amet pharetra ex. Suspendisse varius dolor vel interdum ornare. Aliquam at quam vitae leo vulputate egestas. Aenean mattis feugiat lectus, et ultricies risus. Integer libero leo, placerat eu ex eget, interdum gravida lectus. Aliquam rhoncus ultricies velit ut tempus. Quisque at ornare orci. Maecenas suscipit nunc ut risus mattis tristique. Maecenas vulputate lacinia venenatis.

Praesent et lorem ut metus luctus vulputate at vitae nulla. Donec porttitor, mauris sed ultricies congue, augue ante euismod sapien, ac blandit risus nisi rutrum tortor. Mauris fermentum risus et augue fermentum, quis viverra quam blandit. Morbi molestie suscipit hendrerit. Suspendisse imperdiet enim risus, vitae lobortis turpis sollicitudin et. Maecenas mattis lectus quis risus eleifend lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque tempus, sapien eu elementum consectetur, augue erat malesuada dolor, eget placerat ex diam eget diam. Vestibulum porttitor condimentum orci vel iaculis. Curabitur erat mi, hendrerit id pellentesque id, ultricies in est. In nec lectus vel sem tempus dignissim a porta mi. Praesent augue libero, commodo et tellus ut, hendrerit lobortis turpis.
            </Text>
        </ScrollView>

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