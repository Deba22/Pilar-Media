import { FlatList, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import * as Linking from 'expo-linking';

import ListItemYoutube from '../components/ListItemYoutube';

const menuItems = [
    {
        id:1,
      title: "THIRD SUNDAY OF OT (DV 49) | YEAR C 2021 | FR. ANTHONY CASTELLO",
      youtubeUrl:"https://www.youtube.com/watch?v=zANNZF-xzzE",
      youtubeImageSrc:require('../assets/youtube1.png')
    },
    {
        id:2,
        title: "20 JAN | FR. AGNELO NOVENA MASS | KONKANI | LIVE STREAM | 8.00 AM IST",
        youtubeUrl:"https://www.youtube.com/watch?v=fjhMt5Vd8_A&t=11s",
        youtubeImageSrc:require('../assets/youtube2.png')
    },
    {
        id:3,
        title: "SECOND SUNDAY OF OT (DV 48) | YEAR C 2021 | FR. AGNELO",
        youtubeUrl:"https://www.youtube.com/watch?v=8FlIsl_28y8",
        youtubeImageSrc:require('../assets/youtube3.png')
    },
    {
        id:4,
        title: "THIRD SUNDAY OF OT (DV 49) | YEAR C 2021 | FR. ANTHONY CASTELLO",
        youtubeUrl:"https://www.youtube.com/watch?v=zANNZF-xzzE",
        youtubeImageSrc:require('../assets/youtube1.png')
      },
      {
          id:5,
        title: "20 JAN | FR. AGNELO NOVENA MASS | KONKANI | LIVE STREAM | 8.00 AM IST",
        youtubeUrl:"https://www.youtube.com/watch?v=fjhMt5Vd8_A&t=11s",
        youtubeImageSrc:require('../assets/youtube2.png')
    },
    {
        id:6,
        title: "SECOND SUNDAY OF OT (DV 48) | YEAR C 2021 | FR. AGNELO",
        youtubeUrl:"https://www.youtube.com/watch?v=8FlIsl_28y8",
        youtubeImageSrc:require('../assets/youtube3.png')
    },
  ];

export default class PilarDivyaSancharScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
       <FlatList
                  data={menuItems}
                  keyExtractor={(menuItem) => menuItem.id}
                  ItemSeparatorComponent={() => <View style={{ marginVertical: 10 }} />}
                  renderItem={({ item }) => (
                    <ListItemYoutube 
                      title={item.title}
                      youtubeUrl={item.youtubeUrl}
                      youtubeImageSrc={item.youtubeImageSrc}
                      onPress={() => {
                        Linking.openURL(item.youtubeUrl);                 
                            }}
                    />
                  )}
            />    
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:15,
        paddingTop:20
    }
});
