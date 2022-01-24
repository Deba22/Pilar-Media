import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';

import colors from '../config/colors';
import Block from '../components/Block';
import { LinearGradient } from 'expo-linear-gradient';
import AppText from '../components/AppText';

export default function HomeScreen({navigation}) {
  const [loaded] = useFonts({
    HalantRegular: require('../assets/fonts/Halant-Regular.ttf'),
    HalantSemiBold: require('../assets/fonts/Halant-SemiBold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.quote}>
        <Text style={styles.startQuote}>
        I can do all
        </Text>
        <Text>{" "}</Text>
        <Text style={styles.endQuote}>
        things through Christ
        </Text>
      </Text>
      <View style={styles.blocksLayout}>
        <Block BlockImageSrc={require('../assets/pilar-media-bg-image.png')} BlockHeader={'Pilar Media'} BlockDesc={'Lorem Ipsum is simply dummy text of the printing industry.Lorem Ipsum is simply dummy text'} arrowInnerColor={{backgroundColor:colors.block1light}}  onPress={() => navigation.navigate('PilarMediaListing')}/>
        <Block BlockImageSrc={require('../assets/society-of-pilar-bg-image.png')} BlockHeader={'Society of Pilar'} BlockDesc={'Lorem Ipsum is simply dummy text of the printing industry.Lorem Ipsum is simply dummy text'} arrowInnerColor={{backgroundColor:colors.block2light}} onPress={() => navigation.navigate('SocietyOfPilarListing')}/>
        <Block BlockImageSrc={require('../assets/pilar-prays-bg-image.png')} BlockHeader={'Pilar Prays'} BlockDesc={'Lorem Ipsum is simply dummy text of the printing industry.Lorem Ipsum is simply dummy text'} arrowInnerColor={{backgroundColor:colors.block3light}} onPress={() => navigation.navigate('PilarPraysListing')}/>
        <Block BlockImageSrc={require('../assets/padre-agnelo-bg-image.png')} BlockHeader={'Padre Agnelo'} BlockDesc={'Lorem Ipsum is simply dummy text of the printing industry.Lorem Ipsum is simply dummy text'} arrowInnerColor={{backgroundColor:colors.block4light}} onPress={() => navigation.navigate('PadreAgneloListing')}/>
      </View>
     
        <LinearGradient colors={['#2D3D75', '#747A9A']}  start={{ x: 0, y: 0 }}
        end={{ x: 0.9, y: 0 }}>
        <View style={styles.verseOfTheDaylayout}>
        <View style={styles.verseInner}>
          <Text style={styles.verseHeader}>Verse of the day</Text>
          <AppText style={styles.verseDesc}>I am the vine, you are the branches. Whoever remains in me and I in him will bear much fruit, because without me you can do nothing.</AppText>
        </View>
        <View style={styles.chapterInner}>
          <AppText style={styles.chapter}>Jn 15:1-8</AppText>
          <AppText style={styles.saintOfTheDay}>Saint of the day</AppText>
        </View>
        </View>
        </LinearGradient>
     
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  blocksLayout:{
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap',
    paddingVertical:10  
  },
  container:{
    flex:1,
    paddingHorizontal:15,
  },  
  chapterInner:{
    paddingTop:20,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  chapter:{
    backgroundColor: '#8F96BBF5',
    paddingHorizontal:20
  },
  endQuote:{
    fontFamily:'HalantSemiBold',
    lineHeight:30
  },
  saintOfTheDay:{
    backgroundColor:'#8F96BBFF',
    paddingHorizontal:20
  },
  startQuote:{
    fontFamily:'HalantRegular'
  },
  quote:{
    color: colors.primary,
    fontSize: 26,
  },
  verseOfTheDaylayout:{
    padding:10
  },
  verseHeader:{
    color: colors.white,
    fontSize: 20,
  },
  verseDesc:{
   paddingTop:10
  },

});
