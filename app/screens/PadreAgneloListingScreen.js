import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import ListItem from '../components/ListItem';
import colors from '../config/colors';

const menuItems = [
    {
      title: "Life of Fr. Agnelo",
      description:"Lorem Ipsum is simply dummy text of the printing industry"
    },
    {
        title: "Favours",
        description:"Lorem Ipsum is simply dummy text of the printing industry"
    },
    {
        title: "Different Books on Life of Fr. Agnelo",
        description:"Lorem Ipsum is simply dummy text of the printing industry"
    },
  ];

export default function PadreAgneloListingScreen() {
    return (
        <View style={styles.container}>
        <FlatList
              data={menuItems}
              keyExtractor={(menuItem) => menuItem.title}
            //   ItemSeparatorComponent={ListItemSeparator}
            ItemSeparatorComponent={() => <View style={{ marginVertical: 10 }} />}
              renderItem={({ item }) => (
                <ListItem 
                  title={item.title}
                  description={item.description}
                  listItemStyle={{backgroundColor:colors.block4}}
                  arrowStyle={{backgroundColor:colors.block4light}}
                //   onPress={() => navigation.navigate(item.targetScreen)}
                />
              )}
        />            
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:15,
        paddingTop :20
    }
})
