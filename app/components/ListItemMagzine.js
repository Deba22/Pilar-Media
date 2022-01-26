import React from "react";
import { View, StyleSheet,TouchableHighlight, Dimensions,Text,Image,ImageBackground,Share } from "react-native";
const {width, height} = Dimensions.get('window');

import colors from "../config/colors";
import AppText from "./AppText";

function ListItemMagzine({
  title,
  date,
  coverImageSrc,
}) {

  return (
      <TouchableHighlight underlayColor={colors.light}>
          <View style={styles.container}>
              <Image style={styles.youtubeImage} source={coverImageSrc} ></Image>
           
            <View style={styles.detailsLayout}>
                <Text style={styles.title}>{date}</Text>
              
            </View>   
        </View>
      </TouchableHighlight>

  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:width/2-30,
        backgroundColor:colors.grey,
        marginHorizontal:15
    },
detailsLayout:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:6
    },  
  title:{
      flex:9,
    color: colors.black,
    fontSize: 16,
    fontWeight: '600',
  },
  youtubeImage:{
    width:width/2-30,
      height:200
  },

});

export default ListItemMagzine;
