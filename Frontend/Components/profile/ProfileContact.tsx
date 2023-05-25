import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FontSize, GenStyle } from '../../Common/GlobalStyles';
import { BackendTypes } from '../../Common/GlobalDeclarations';
import { useIsLarge } from '../../Common/customHooks';


interface ContactInfo {
    businessName: string;
    email: string;
    phone: string;
    profilePicture: string;
    workLocations: BackendTypes.WorkLocation[];
}

export default function ProfileContact(props: ContactInfo) {
  const fontSize = useIsLarge();
  const Bubble = (props: { text: string; }) => {

    return (
      <View style={styles.bubble}>
        <Text style={fontSize.smallText}>{props.text}</Text>
      </View>
    )
  }
  return (
    <View style={styles.contactContainer}>
      <Text style={[fontSize.subHeader, styles.header]}>{props.businessName}</Text>
      <Image style={[GenStyle.circle, styles.profileImgSize  ]}source={{uri: "https://snack-web-player.s3.us-west-1.amazonaws.com/v2/47/static/media/react-native-logo.79778b9e.png"}}/>
      <View style={styles.locations}>
        {props?.workLocations.map((location) => <Bubble key={location.location_id} text={location.name}/>)}
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    contactContainer: {
        width: '100%',
        padding: '3.5%',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        
        backgroundColor: '#F47742',
        borderColor: '#F47742',
        borderWidth: 1,
        rowGap: 15,
        /**
        shadowOpacity: 1,
        shadowOffset: { height: 3, width: 3},
         */
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
      rowGap: 10,
      columnGap: 15,
      alignItems: 'flex-start',
      flexWrap: 'wrap',
    },
    circle: {
        borderRadius: 100,
        borderWidth: 1.5,
        borderColor: 'black',
    },
    bubble: {
      backgroundColor: 'white', 
      borderRadius: 5, 
      padding: '1.5%'
    }

})