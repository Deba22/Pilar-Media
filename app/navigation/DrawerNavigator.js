import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import HomeScreen from '../screens/HomeScreen';


const Drawer = createDrawerNavigator();

const DrawerNavigator = ({navigation}) => {
  return (
    <Drawer.Navigator>     
      <Drawer.Screen name="Main" component={HomeScreen} options={{ title: '',drawerLabel: 'Home',headerStyle: {backgroundColor: 'transparent',},headerShadowVisible: false,  }}/>     
    </Drawer.Navigator>
  );
}

export default DrawerNavigator
