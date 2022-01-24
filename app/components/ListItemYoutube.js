import React from "react";
import { View, StyleSheet,TouchableHighlight, TouchableWithoutFeedback,Text,Image,ImageBackground,Share } from "react-native";


import colors from "../config/colors";
import AppText from "./AppText";

function ListItemYoutube({
  title,
  youtubeUrl,
  youtubeImageSrc,
  onPress
}) {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: youtubeUrl,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      //error
    }
  };
  return (
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View>
            <ImageBackground style={styles.youtubeImage} source={youtubeImageSrc} resizeMode="contain">
                <Image style={styles.youtubeIcon} source={require('../assets/youtube-icon.png')}></Image>      
            </ImageBackground>
            <View style={styles.detailsLayout}>
                <Text style={styles.title}>{title}</Text>
                <TouchableWithoutFeedback onPress={onShare}>
                  <Image style={styles.shareIcon} source={require('../assets/share-icon.png')} resizeMode="contain" ></Image>
                </TouchableWithoutFeedback>
            </View>   
        </View>
      </TouchableHighlight>

  );
}

const styles = StyleSheet.create({
detailsLayout:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
shareIcon:{
    flex:1,
    height:20,
    width:20
    },   
  title:{
      flex:9,
    color: colors.black,
    fontSize: 16,
    fontWeight: '600',
    textTransform:'uppercase'
  },
  youtubeImage:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      width:'100%',
      height:200
  },
  youtubeIcon:{
    width:50,
    height:35
  }

});

export default ListItemYoutube;
