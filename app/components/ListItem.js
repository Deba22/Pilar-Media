import React from "react";
import { View, StyleSheet, TouchableHighlight,Text,Image } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({
  title,
  description,
  listItemStyle,
  arrowStyle,
  onPress
}) {
  return (

      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={[styles.container,listItemStyle]}>
          <View style={styles.detailsContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            {description && (
              <AppText style={styles.description} numberOfLines={2}>
                {description}
              </AppText>
            )}
          </View>      
          <View style={[styles.arrowInner,arrowStyle]}>
            <Image style={styles.listItemArrow} source={require('../assets/arrow.png')}></Image>
          </View>   
        </View>
      </TouchableHighlight>

  );
}

const styles = StyleSheet.create({
    arrowInner:{
        backgroundColor:colors.light,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:15,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        borderTopLeftRadius:40,
        borderBottomLeftRadius:40
    },
  container: {
    flexDirection:'row',
    borderRadius:10,
  },
  detailsContainer: {
    flex: 1,
    padding:15
  },
  description: {
   
  },
  listItemArrow:{
    height:20,
    width:20,   
  },
  title:{
    color: colors.white,
    fontSize: 17,
    fontWeight: "bold",
  }

});

export default ListItem;
