import { StyleSheet, Text, View,ImageBackground,Image, Dimensions } from 'react-native';
import React from 'react';

import colors from '../config/colors';
import AppText from './AppText';

const {width, height} = Dimensions.get('window');

export default function Block({BlockImageSrc, BlockHeader, BlockDesc,arrowInnerColor}) {
  return (
    <ImageBackground style={styles.blockImage} source={BlockImageSrc} imageStyle={{ borderRadius: 10}}>
          <View style={styles.blockInner}>
            <AppText style={styles.blockHeader}>{BlockHeader}</AppText>
            <AppText style={styles.blockDesc}>{BlockDesc}</AppText>
          </View>
          <View style={[styles.arrowInner, arrowInnerColor]}>
            <Image style={styles.blockArrow} source={require('../assets/arrow.png')}></Image>
          </View>         
        </ImageBackground>
  );
}

const styles = StyleSheet.create({
    arrowInner:{
        padding:10,
        width:38,
        borderTopLeftRadius:10,
        borderBottomRightRadius:10,
        flexDirection:'row',
        justifyContent:'center',
        alignSelf:'flex-end',
      },
    blockImage:{
       width:width/2 -30,
       marginVertical:10,
      },
    blockInner:{
        paddingTop:10,
        paddingHorizontal:10,
      },
    blockHeader: {
        color: colors.white,
        fontSize: 17,
        fontWeight: "bold",
      },
    blockDesc:{
        paddingTop:5,
      },
    blockArrow:{
        height:15,
        width:15,   
      },
});
