import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';
import {NavigationContainer} from '@react-navigation/native';


import colors from "./app/config/colors";
import AppNavigator from './app/navigation/AppNavigator';


export default function App() {
  
    return ( 
      <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar backgroundColor={colors.primary} style='light'/>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
      </SafeAreaView>
   );
  
  
}

const styles = StyleSheet.create({
  container: {
    
  },
});
