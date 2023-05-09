import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { GenStyle } from '../../Common/GlobalStyles';

interface Message {
  text: string;
  sentDate: Date;
  fromUser: boolean;
}
export default function MessageBubble(props: Message) {
  return (
    <View style={[styles.bubbleWrap, props.fromUser ? styles.fromBg : styles.toBg]}>
      <Text style={styles.mainText}>{props.text}</Text>
      <Text>{props.sentDate.toString()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    bubbleWrap: {
        flexDirection: 'row',
        borderRadius: 5,
        padding: 5,
    },
    mainText: {
      width: '85%',
      alignContent: 'flex-start'
    },

    fromBg: {
      backgroundColor: 'lightblue',
    }, 
    toBg: {
      backgroundColor: 'white',
    }
})