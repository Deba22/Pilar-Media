import { StyleSheet, Text, View,Image,ScrollView,TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';

import AppText from '../components/AppText';
import colors from '../config/colors';


export default function DailyScripturesReflectionsScreen() {
    const [shouldShowScriptures, setShouldShowScriptures] = useState(true);
    const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={styles.container}>
        <View style={styles.dropdownLayout}>
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                } style={styles.dropdown}>
                <Picker.Item label="English" value="en" />
                <Picker.Item label="Konkani" value="kn" />
            </Picker>
        </View>
        <View style={styles.header}>
            <Image style={styles.calendar} source={require('../assets/calendar-icon.png')}></Image>
            <View style={styles.details}>
                <Text style={styles.detailsHeader}>Fifth Sunday of Easter</Text>
                <AppText style={styles.detailsSubHeader}>2nd May, Sunday</AppText>
            </View>
            {shouldShowScriptures ?( 
            <TouchableWithoutFeedback onPress={() => setShouldShowScriptures(!shouldShowScriptures)}>
                <Image style={styles.pen} source={require('../assets/pen-icon.png')}></Image>
            </TouchableWithoutFeedback>
            ):(
            <TouchableWithoutFeedback onPress={() => setShouldShowScriptures(!shouldShowScriptures)}>
                <Image style={styles.bible} source={require('../assets/bible-icon.png')}></Image>
            </TouchableWithoutFeedback>
            )}
        </View>
        <ScrollView>
        {shouldShowScriptures ?( 
            <View style={styles.scriptures}>
                <View style={styles.scriptureHeader}>
                    <Text style={styles.readingTitle}>Reading I</Text>
                    <Text style={styles.verseTitle}>Acts 9:26-31</Text>
                </View>
                <View style={{borderBottomColor: colors.black, borderBottomWidth: 1,}}/>
                <Text style={styles.reading}>When Saul arrived in Jerusalem he tried to join the disciples,
                    but they were all afraid of him,
                    not believing that he was a disciple.
                    Then Barnabas took charge of him and brought him to the apostles,
                    and he reported to them how he had seen the Lord,
                    and that he had spoken to him,
                    and how in Damascus he had spoken out boldly in the name of Jesus.
                    He moved about freely with them in Jerusalem,
                    and spoke out boldly in the name of the Lord.
                    He also spoke and debated with the Hellenists,
                    but they tried to kill him.
                    And when the brothers learned of this,
                    they took him down to Caesarea
                    and sent him on his way to Tarsus.

                    The church throughout all Judea, Galilee, and Samaria was at peace.
                    It was being built up and walked in the fear of the Lord,
                    and with the consolation of the Holy Spirit it grew in numbers.
                </Text>


                <View style={styles.scriptureHeader}>
                    <Text style={styles.readingTitle}>Reading II</Text>
                    <Text style={styles.verseTitle}>1 Jn 3:18-24</Text>
                </View>
                <View style={{borderBottomColor: colors.black, borderBottomWidth: 1,}}/>
                <Text style={styles.reading}>Children, let us love not in word or speech
                    but in deed and truth.

                    Now this is how we shall know that we belong to the truth
                    and reassure our hearts before him
                    in whatever our hearts condemn,
                    for God is greater than our hearts and knows everything.
                    Beloved, if our hearts do not condemn us,
                    we have confidence in God
                    and receive from him whatever we ask,
                    because we keep his commandments and do what pleases him.
                    And his commandment is this:
                    we should believe in the name of his Son, Jesus Christ,
                    and love one another just as he commanded us.
                    Those who keep his commandments remain in him, and he in them,
                    and the way we know that he remains in us
                    is from the Spirit he gave us.
                </Text>


                <View style={styles.scriptureHeader}>
                    <Text style={styles.readingTitle}>Gospel</Text>
                    <Text style={styles.verseTitle}>Jn 15:1-8</Text>
                </View>
                <View style={{borderBottomColor: colors.black, borderBottomWidth: 1,}}/>
                    <Text style={styles.reading}>
                            Jesus said to his disciples:
                            “I am the true vine, and my Father is the vine grower.
                            He takes away every branch in me that does not bear fruit,
                            and every one that does he prunes so that it bears more fruit.
                            You are already pruned because of the word that I spoke to you.
                            Remain in me, as I remain in you.
                            Just as a branch cannot bear fruit on its own
                            unless it remains on the vine,
                            so neither can you unless you remain in me.
                            I am the vine, you are the branches.
                            Whoever remains in me and I in him will bear much fruit,
                            because without me you can do nothing.
                            Anyone who does not remain in me
                            will be thrown out like a branch and wither;
                            people will gather them and throw them into a fire
                            and they will be burned.
                            If you remain in me and my words remain in you,
                            ask for whatever you want and it will be done for you.
                            By this is my Father glorified,
                            that you bear much fruit and become my disciples.”
                </Text>
            </View>
        ):(
            <View style={styles.reflections}>
                <Text style={styles.reflectionsText}>
                “I am the vine, you are the branches. Whoever remains in me and I in him will bear much fruit, because without me you can do nothing.”

                What a great little reminder…“Without me you can do nothing.”

                At first, hearing this may hurt.  It may hurt our pride, and we may react to this idea negatively.  Is it really true?  Can we really do nothing without God?  Obviously the answer to that is “Yes.”  Jesus does not lie.  We can do nothing without God in our lives.

                In fact, if God were to forget us for one moment, we would cease to exist.  Even our very existence depends upon God continuing to will that we exist.  And as for doing good, making a difference, having a productive life, etc., we can do nothing good without God’s grace.

                Though this may be hard to hear at first, we should ponder it regularly.  And if we do ponder it and embrace this truth, two things will happen in our souls.  First, we will grow in humility.  Humility is the most important virtue in which we can grow.  It’s been referred to as “the mother of all virtues.”  This is because from this virtue, all other virtues flow.  Humility means we realize that God is everything and that we need Him with a 100% need.  This humble truth will enable us to seek God in all things and to invite Him deeply into every part of our lives.

                A second thing that will happen in our souls when we realize that we can do nothing without God is that we will grow in gratitude.  As we see that God is everything AND we begin to see that He provides us with constant grace in our lives, our only appropriate response will be “Thank you!”  We will be grateful to God for everything because we will realize that everything that is good is a gift from Him.

                Reflect, today, upon these truths of humility and gratitude and allow them to sink in.  As you do, allow these virtues to grow to greater fruition in your life.

                Lord, I do believe that I can do nothing without You.  Help me to believe this with an even greater conviction and, as I do, help me to grow in humility and gratitude.  Jesus, I trust in You.                          
                </Text>
            </View>
        )}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    bible:{
        height:36,
        width:36, 
    },
    container:{
        flex:1,
    },
    calendar:{
        height:30,
        width:30, 
    },
   
    dropdownLayout:{
        width:'35%',
        height:30,
        alignSelf:'flex-end',
        borderColor:colors.black,
        borderRadius:5,
        borderWidth: 1,
        overflow:'hidden',
        justifyContent:'center',
        marginVertical:10,
        marginHorizontal:10
    },
    details:{
        alignItems:'center'
    },
    detailsHeader:{
        color:colors.white,
        fontSize:17,
        fontWeight:'bold'
    },
    header:{
        backgroundColor:colors.primary,
        flexDirection:'row',
        paddingHorizontal:15,
        paddingVertical:10,
        justifyContent:'space-between',
        alignItems:'center'
    },
    pen:{
        height:30,
        width:30, 
    },
    readingTitle:{
        color:colors.black,
        fontSize:17,
        fontWeight:'bold'
    },
    reading:{
        color:colors.black,
        fontSize:15.5,
        lineHeight:30,
        paddingVertical:10
    },
    reflections:{
        marginHorizontal:15
    },
    reflectionsText:{
        color:colors.black,
        fontSize:15.5,
        lineHeight:30,
        paddingVertical:10
    },
    scriptures:{
        marginHorizontal:15
    },
    scriptureHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:10
    },
    verseTitle:{
        color:colors.black,
        fontSize:17,
        fontWeight:'bold'
    }
});
