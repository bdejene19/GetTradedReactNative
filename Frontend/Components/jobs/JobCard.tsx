import { View, Text, StyleSheet, ViewStyle, ImageBackground } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsLarge } from '../../Common/customHooks';

interface CardProps {
    header: string;
    bgImage: string;
    subText?: string;
    cardStyle?: ViewStyle;
    subStyle?: ViewStyle;
    bottomColor?: string;
    onPress: () => void;
}
export default function JobCard(props: CardProps) {
    const fontSize = useIsLarge();
  return (
    <TouchableOpacity style={props.cardStyle} onPress={props.onPress}>
        <Text style={[styles.headerStyle, fontSize.regText]}>{props.header}</Text>
        <ImageBackground  style={{height: '90%',}} resizeMode='cover' alt={props.header} source={{uri: props.bgImage}}>
        </ImageBackground>
        {/* <View style={[styles.bottomStyle, { backgroundColor: props.bottomColor}]}></View> */}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    headerStyle: {
        fontWeight: '700',
        height: '20%',
        padding: '5%',
    },
    bottomStyle: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderWidth: 3,
    }
})