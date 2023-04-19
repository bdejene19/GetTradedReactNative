import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { GenStyle } from '../Common/GlobalStyles';

interface ContactInfo {
    businessName: string;
    email: string;
    phone: string;
    profilePicture: string;
}

export default function ProfileContact(props: ContactInfo) {
  return (
    <View>
      <Text>{props.businessName}</Text>
      <Image style={[GenStyle.circle,  ]}source={{uri: "https://snack-web-player.s3.us-west-1.amazonaws.com/v2/47/static/media/react-native-logo.79778b9e.png"}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    contactContainer: {
        width: '100%',
        height: '35%',
    }, 
    circle: {
        borderRadius: 100,
        borderWidth: 1.5,
        borderColor: 'black',
    }

})