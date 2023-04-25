import { View, Text, StyleSheet, ViewStyle } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

interface CardProps {
    header: string;
    subText?: string;
    cardStyle?: ViewStyle;
    subStyle?: ViewStyle;
    bottomColor?: string;
    onPress: () => void;
}
export default function JobCard(props: CardProps) {
  return (
    <TouchableOpacity style={props.cardStyle} onPress={props.onPress}>
        <Text style={styles.headerStyle}>{props.header}</Text>
        <View style={[styles.bottomStyle, { backgroundColor: props.bottomColor}]}></View>
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
        height: '80%',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    }
})