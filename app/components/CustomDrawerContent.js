import { DrawerContentScrollView,
    DrawerItemList,
    DrawerItem, } from '@react-navigation/drawer';
import * as Linking from 'expo-linking';
import { StyleSheet, Text, View,Image,ScrollView,TouchableWithoutFeedback } from 'react-native';
import React, { Component } from 'react';
import colors from '../config/colors';

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
        <DrawerItemList {...props} />
        <DrawerItem label="Rate the app" onPress={() => {Linking.openURL("https://play.google.com/store/apps/")}} inactiveTintColor={colors.black}/>
        <DrawerItem label="Send us your feedback" onPress={() => {Linking.openURL("https://play.google.com/store/apps/")}} inactiveTintColor={colors.black}/>
        <View style={styles.container}>
          <View style={styles.footer}>
            <Text style={styles.followText}>Follow us</Text>
            <TouchableWithoutFeedback onPress={() => {Linking.openURL("https://www.facebook.com/societyofpilar/");}}>
                <Image style={styles.socialIcon} source={require('../assets/fb-icon.png')}></Image>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {Linking.openURL("https://www.facebook.com/societyofpilar/");}}>
                <Image style={styles.socialIcon} source={require('../assets/instagram-icon.png')}></Image>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {Linking.openURL("https://twitter.com/societyofpilar");}}>
                <Image style={styles.socialIcon} source={require('../assets/twitter-icon.png')}></Image>
            </TouchableWithoutFeedback>
          </View>
          <Text style={styles.version}>v 1.0</Text>
        </View>
      </DrawerContentScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:15,
        marginVertical:10,
        justifyContent:'flex-end',      
    },
    footer:{
       flexDirection:'row',
       marginVertical:20,
       alignItems:'center'

    },
    followText:{
        color:colors.black,
        fontSize:17,
        marginRight:20
    },
    socialIcon:{
        height:36,
        width:36, 
        marginRight:15
    },
    version:{
        color:colors.black
    }
  });

  export default CustomDrawerContent;