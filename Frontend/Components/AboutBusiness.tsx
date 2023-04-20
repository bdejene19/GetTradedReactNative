import { View, Text, ViewStyle } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { FontSize, GenStyle } from '../Common/GlobalStyles';

interface AboutProps {
    content: string | null | undefined;
    containerStyle?: ViewStyle,
}
export default function AboutBusiness(props: AboutProps) {
  return (
      props.content ? 
            <View style={[GenStyle.fullWidth, styles.aboutContainer]}>
                <Text style={[FontSize.subHeader, {fontWeight: '700'}]}>About</Text>
                <Text>{props.content}</Text>
            </View>
            :
            null
  )
}

const styles = StyleSheet.create({
    aboutContainer: {
        rowGap: 7,
        padding: '3.5%',
        borderRadius: 15,
        backgroundColor: 'snow',
        shadowColor: 'black',
        borderColor: 'grey',
        borderWidth: 1,
        shadowOpacity: 1,
        shadowOffset: { height: 3, width: 3},
    }
})