import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PilarMediaListingScreen from '../screens/PilarMediaListingScreen';
import SocietyOfPilarListingScreen from '../screens/SocietyOfPilarListingScreen';
import PilarPraysListingScreen from '../screens/PilarPraysListingScreen';
import PadreAgneloListingScreen from '../screens/PadreAgneloListingScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import DrawerNavigator from './DrawerNavigator';
import PilarDivyaSancharScreen from '../screens/PilarDivyaSancharScreen';


const Stack = createStackNavigator();

const AppNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="PilarMediaListing" component={PilarMediaListingScreen} options={{ title: 'Pilar Media'}} />
      <Stack.Screen name="SocietyOfPilarListing" component={SocietyOfPilarListingScreen} options={{ title: 'Society Of Pilar'}}/>
      <Stack.Screen name="PilarPraysListing" component={PilarPraysListingScreen} options={{ title: 'Pilar Prays'}}/>
      <Stack.Screen name="PadreAgneloListing" component={PadreAgneloListingScreen} options={{ title: 'Padre Agnelo'}}/>

      <Stack.Screen name="PilarDivyaSanchar" component={PilarDivyaSancharScreen} options={{ title: 'Pilar Divya Sanchar'}}/>
    </Stack.Navigator>
  );
}
export default AppNavigator;