import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import colors from '../config/colors';
import HomeScreen from '../screens/HomeScreen';
import PilarMediaListingScreen from '../screens/PilarMediaListingScreen';
import AppNavigator from './AppNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({navigation}) => {
  return (
    <Drawer.Navigator>
    
      <Drawer.Screen name="Main" component={AppNavigator} options={{ title: '',drawerLabel: 'Home',headerStyle: {backgroundColor: 'transparent',},headerShadowVisible: false}}/>     
    </Drawer.Navigator>
  );
}

export default DrawerNavigator
