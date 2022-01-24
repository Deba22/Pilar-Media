import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import ListItem from '../components/ListItem';
import colors from '../config/colors';

const menuItems = [
    {
      title: "Daily Scriptures and Reflections",
      description:"Lorem Ipsum is simply dummy text of the printing industry"
    },
    {
        title: "Ordo",
        description:"Lorem Ipsum is simply dummy text of the printing industry"
    },
    {
        title: "Vademecum",
        description:"Lorem Ipsum is simply dummy text of the printing industry"
    },
    {
        title: "Prayer Book",
        description:"Lorem Ipsum is simply dummy text of the printing industry"
    },
    {
        title: "iBreviary",
        description:"Lorem Ipsum is simply dummy text of the printing industry"
    },
    {
        title: "Mass offerings",
        description:"Lorem Ipsum is simply dummy text of the printing industry"
    },
  ];
        
export default function PilarPraysListingScreen() {
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
                  listItemStyle={{backgroundColor:colors.block3}}
                  arrowStyle={{backgroundColor:colors.block3light}}
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
