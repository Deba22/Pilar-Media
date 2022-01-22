import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";

import colors from "./app/config/colors";
import HomeScreen from './app/screens/HomeScreen';
import OnboardingScreen from './app/screens/OnboardingScreen';
import DrawerNavigator from './app/navigation/DrawerNavigator';

const Stack = createStackNavigator();
const StackNavigator = ()=>(
  <Stack.Navigator>
    <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }}></Stack.Screen>
    <Stack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }}></Stack.Screen>
  </Stack.Navigator>
)

export default function App() {
  
    return ( 
      <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar backgroundColor={colors.primary} style='light'/>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
      </SafeAreaView>
   );
  
  
}

const styles = StyleSheet.create({
  container: {
    
  },
});
