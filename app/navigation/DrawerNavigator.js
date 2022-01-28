import { createDrawerNavigator , DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer';
import React from 'react'


import HomeScreen from '../screens/HomeScreen';
import styles from '../config/styles';
import CustomDrawerContent from '../components/CustomDrawerContent';
import colors from '../config/colors';




const Drawer = createDrawerNavigator();

const DrawerNavigator = ({navigation}) => {
  return (
    <Drawer.Navigator  drawerContent={(props) => <CustomDrawerContent {...props} />}>     
      <Drawer.Screen name="Main" component={HomeScreen} options={{ title: '',drawerLabel: 'Home',drawerInactiveTintColor:colors.black,drawerActiveBackgroundColor:colors.primarylight,drawerActiveTintColor:colors.primary,headerStyle: {backgroundColor: 'transparent',},headerShadowVisible: false,  }}/>     
    </Drawer.Navigator>
  );
}

export default DrawerNavigator
