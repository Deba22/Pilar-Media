import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import routes from '../navigation/routes';

const menuItems = [
    {
      title: "Pilar Divya Sanchar",
      description:"Lorem Ipsum is simply dummy text of the printing industry",
      targetScreen:routes.PILARDIVYASANCHAR
    },
    {
        title: "Vauraddeancho Ixtt",
        description:"Lorem Ipsum is simply dummy text of the printing industry",
        targetScreen:routes.VAURADDEANCHOIXTT
    },
    {
        title: "Fr. Agnel's Call",
        description:"Lorem Ipsum is simply dummy text of the printing industry",
        targetScreen:routes.FRAGNELCALL
    },
    {
        title: "Facebook, Twitter, Instagram",
        description:"Lorem Ipsum is simply dummy text of the printing industry"
    },
    {
        title: "Book Store",
        description:"Lorem Ipsum is simply dummy text of the printing industry"
    },
  ];

export default function PilarMediaListingScreen({navigation}) {
    return (
        <View style={styles.container}>
            <FlatList
                  data={menuItems}
                  keyExtractor={(menuItem) => menuItem.title}
                  ItemSeparatorComponent={() => <View style={{ marginVertical: 10 }} />}
                  renderItem={({ item }) => (
                    <ListItem 
                      title={item.title}
                      description={item.description}
                      listItemStyle={{backgroundColor:colors.block1}}
                      arrowStyle={{backgroundColor:colors.block1light}}
                      onPress={() => navigation.navigate(item.targetScreen)}
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
