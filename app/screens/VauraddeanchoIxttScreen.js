import { FlatList, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import * as Linking from 'expo-linking';

import ListItemMagzine from '../components/ListItemMagzine';

const menuItems = [
    {
      id:1,
      title: "THIRD SUNDAY OF OT (DV 49) | YEAR C 2021 | FR. ANTHONY CASTELLO",
      date:"30 April, 2021",
      coverImageSrc:require('../assets/magzine1.png')
    },
    {
        id:2,
        title: "20 JAN | FR. AGNELO NOVENA MASS | KONKANI | LIVE STREAM | 8.00 AM IST",
        date:"23 April, 2021",
        coverImageSrc:require('../assets/magzine2.png')
    },
    {
        id:3,
        title: "SECOND SUNDAY OF OT (DV 48) | YEAR C 2021 | FR. AGNELO",
        date:"16 April, 2021",
        coverImageSrc:require('../assets/magzine1.png')
    },
    {
        id:4,
        title: "THIRD SUNDAY OF OT (DV 49) | YEAR C 2021 | FR. ANTHONY CASTELLO",
        date:"9 April, 2021",
        coverImageSrc:require('../assets/magzine2.png')
      },
      {
          id:5,
        title: "20 JAN | FR. AGNELO NOVENA MASS | KONKANI | LIVE STREAM | 8.00 AM IST",
        date:"2 April, 2021",
        coverImageSrc:require('../assets/magzine1.png')
    },
   
  ];

export default class VauraddeanchoIxttScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
       <FlatList
                  data={menuItems}
                  keyExtractor={(menuItem) => menuItem.id}
                  ItemSeparatorComponent={() => <View style={{ marginVertical: 10 }} />}
                  renderItem={({ item }) => (
                    <ListItemMagzine 
                      title={item.title}
                      date={item.date}
                      coverImageSrc={item.coverImageSrc}
                     
                    />
                  )}
                  horizontal={false}
                  numColumns={2}
               
            />    
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,    
        paddingTop:20,
    },
    

});
