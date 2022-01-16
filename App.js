import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingScreen from './app/screens/OnboardingScreen';
import AppLoading from 'expo-app-loading';

import colors from "./app/config/colors";

export default function App() {
  
    return ( 
      <OnboardingScreen/>
   );
  
  
}

const styles = StyleSheet.create({
  container: {
    
  },
});
