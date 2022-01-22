import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PilarMediaListingScreen from '../screens/PilarMediaListingScreen';
import SocietyOfPilarListingScreen from '../screens/SocietyOfPilarListingScreen';
import PilarPraysListingScreen from '../screens/PilarPraysListingScreen';
import PadreAgneloListingScreen from '../screens/PadreAgneloListingScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>    
      <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="PilarMediaListing" component={PilarMediaListingScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="SocietyOfPilarListing" component={SocietyOfPilarListingScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="PilarPraysListing" component={PilarPraysListingScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="PadreAgneloListing" component={PadreAgneloListingScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
export default AppNavigator;