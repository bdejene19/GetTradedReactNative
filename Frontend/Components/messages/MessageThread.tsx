import { View, Text, Image, Modal } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { Swipeable, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDeleteLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { GenStyle } from '../../Common/GlobalStyles';
import { TextResources } from '../../Common/GlobalDeclarations';

interface MessageThreadProps {
    thread_id: number;
    from: string;
    fromIcon: string;
    latestMessage: string;
    latestMessageDate: Date;
    onPress: () => void;
    onDelete: () => void;
}

export default function MessageThread(props: MessageThreadProps) {
    const DeleteThread = (props: { handleDelete: () => void}) => {
        console.log('props: ', props);
        return (
            <TouchableOpacity style={styles.deleteThreadWrap} onPress={props.handleDelete}>
                <FontAwesomeIcon icon={faTrash} size={20} color='white'/>
            </TouchableOpacity>
        )
    }
  return (
    <Swipeable renderLeftActions={() => <DeleteThread handleDelete={props.onDelete}/>} overshootLeft={true} leftThreshold={1} containerStyle={{height: '12.5%'}} rightThreshold={1} onSwipeableOpen={() => console.log('ran')}>
        <TouchableOpacity style={styles.threadContainer} onPress={props.onPress}>
            <View style={styles.iconContainer}>
                <Image style={[GenStyle.circle]} source={{uri: props.fromIcon}}/>
            </View>
            <View style={styles.textContainer}>

                <View style={styles.headerWrap}>
                    <Text style={styles.header}>{props.from}</Text>
                    <Text style={styles.date}>{`${props.latestMessageDate.getDay()}/${props.latestMessageDate.getMonth() + 1}`}</Text>
                </View>
                <View style={styles.mainContent}>
                    <Text style={styles.subText}>{props.latestMessage}</Text>

                </View>
            </View>

        </TouchableOpacity>
   
    </Swipeable>

  )
}

const styles = StyleSheet.create({
    threadContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { height: 1.5 , width: 1.5}
    },
    
    iconContainer: {
        flexBasis: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    textContainer: {
        flexBasis: '80%',
        rowGap: 5,
        height: '100%',
        borderColor: '#A55446',
        borderBottomWidth: 1.5,
        borderBottomLeftRadius: 5,
        padding: "2.5%",
        shadowOffset: { height: 1, width: 1},
        shadowColor: 'balack',
    }, 
    headerWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
    }, 
    mainContent: {
        width: '100%',
    },
    date: {
        width: '20%',
        justifyContent: 'flex-end',
        textAlign: 'center',
    },
    header: {
        width: '80%',
        fontWeight: '700',
    },
    subText: {
        fontSize: 16,
        justifyContent: 'flex-end',
        height: '80%',
        width: '100%',
    },
    dateContent: {
        flexBasis: '10%',
    },
    deleteThreadWrap: {
        width: 80,
        backgroundColor: 'red',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})