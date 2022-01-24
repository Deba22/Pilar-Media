import React from 'react'
import { StyleSheet, View,FlatList } from 'react-native'

import ListItem from '../components/ListItem';
import colors from '../config/colors';

const menuItems = [
    {
      title: "About our Society",
      description:"Lorem Ipsum is simply dummy text of the printing industry"
    },
    {
        title: "Our missions",
        description:"Lorem Ipsum is simply dummy text of the printing industry"
    },
    {
        title: "Pilar Pages",
        description:"Lorem Ipsum is simply dummy text of the printing industry"
    },
    {
        title: "Help train a Pilar seminarian",
        description:"Lorem Ipsum is simply dummy text of the printing industry"
    },
  ];

export default function SocietyOfPilarListingScreen() {
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
                  listItemStyle={{backgroundColor:colors.block2}}
                  arrowStyle={{backgroundColor:colors.block2light}}
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
        paddingTop:20
    }
})
