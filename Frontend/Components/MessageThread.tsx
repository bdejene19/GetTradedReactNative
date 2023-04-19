import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { GenStyle } from '../Common/GlobalStyles';

interface MessageThreadProps {
    from: string;
    fromIcon: string;
    latestMessage: string;
    latestMessageDate: Date;
}
export default function MessageThread(props: MessageThreadProps) {
  return (
    <View style={styles.threadContainer}>
        <View style={styles.iconContainer}>
            <Image style={[GenStyle.circle]} source={{uri: props.fromIcon}}/>
        </View>
        <View style={styles.textContainer}>

            <View style={styles.headerWrap}>
                <Text style={styles.header}>{props.from}</Text>
                <Text style={styles.date}>{props.latestMessageDate?.toISOString()}</Text>
            </View>
            <View style={styles.mainContent}>
                <Text style={styles.subText}>{props.latestMessage}</Text>

            </View>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    threadContainer: {
        width: '100%',
        height: '35%',
        maxHeight: '20%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    
    iconContainer: {
        flexBasis: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    textContainer: {
        flexBasis: '80%',
        borderWidth: 1,
        borderColor: 'pink',
        padding: '1.5%',
    }, 
    headerWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
    }, 
    mainContent: {
        width: '80%',
    },
    date: {
        width: '20%',
        justifyContent: 'flex-end',
        borderWidth: 1,
        borderColor: 'black',
    },
    header: {
        width: '80%',
        fontWeight: '700',
    },
    subText: {
        fontSize: 16
    },
    dateContent: {
        flexBasis: '10%',
    }
})