import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { FontSize, GenStyle } from '../Common/GlobalStyles';
import { createPropertySignature } from 'typescript';
import { ScrollView } from 'react-native-gesture-handler';

interface ContactInfo {
    businessName: string;
    email: string;
    phone: string;
    profilePicture: string;
}

export default function ProfileContact(props: ContactInfo) {
  return (
    <View style={styles.contactContainer}>
      <Text style={[FontSize.subHeader, styles.header]}>{props.businessName}</Text>
      <Image style={[GenStyle.circle, styles.profileImgSize  ]}source={{uri: "https://snack-web-player.s3.us-west-1.amazonaws.com/v2/47/static/media/react-native-logo.79778b9e.png"}}/>
      <View style={styles.locations}>
        <Text>Tags</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    contactContainer: {
        width: '100%',
        padding: '3.5%',
        borderRadius: 15,
        backgroundColor: 'snow',
        shadowColor: 'black',
        borderColor: 'grey',
        borderWidth: 1,
        rowGap: 15,
        shadowOpacity: 1,
        shadowOffset: { height: 3, width: 3},
    }, 
    header: {
      fontWeight: '700',
    },
    profileImgSize: {
      width: 75,
      height: 75,
      alignSelf: 'center',
    }, 

    locations: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
    },
    circle: {
        borderRadius: 100,
        borderWidth: 1.5,
        borderColor: 'black',
    }

})