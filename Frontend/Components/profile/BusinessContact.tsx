import { View, Text, ViewStyle, Linking } from 'react-native'
import React, { ReactElement } from 'react'
import { StyleSheet } from 'react-native';
import { FontSize, GenStyle } from '../../Common/GlobalStyles';
import { TextResources } from '../../Common/GlobalDeclarations';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope, faMailBulk, faPencil, faPhone } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface AboutProps {
    content: string | null | undefined;
    containerStyle?: ViewStyle,
}

interface ContactProps {
    email: string;
    phone: string;
    linkedIn: string;
}

interface Shortcut {
    icon: IconProp;
    onPress: () => void;

}

export default function BusinessContact(props: ContactProps) {
    const Shortcut = (props: Shortcut) => (
        <TouchableOpacity style={{ padding: '3%', justifyContent: 'center', alignItems: 'center', borderRadius: 100, width: 50, height: 50, backgroundColor: 'lightgrey', shadowColor: 'black', shadowOffset: { height: 1.5, width: 1.5}, shadowOpacity: 0.3}} onPress={props.onPress}>
            <FontAwesomeIcon icon={props.icon} size={28} />
        </TouchableOpacity>
    )
    

    const quickURLAction = (actionType: string, payload: string) => {
        Linking.openURL(`${actionType}: ${payload}`)
    }
  return (
    <View style={[GenStyle.fullWidth, styles.contactContainer]}>
        <View style={[styles.contactHeader]}>
            <Text style={[FontSize.subHeader, {fontWeight: '700', width: '90%'}]}>{TextResources.FormStrings.CONTACT}</Text>
            <TouchableOpacity onPress={() => {}}>
                <FontAwesomeIcon icon={faPencil} style={{width: '10%'}}/>
            </TouchableOpacity>
        </View>
        <Shortcut key={TextResources.FormStrings.PHONE} icon={faPhone} onPress={() =>  quickURLAction("tel", props.phone)}/>
        <Shortcut key={TextResources.FormStrings.EMAIL} icon={faEnvelope} onPress={() => quickURLAction("email", props.email)}/>
        <Shortcut key={TextResources.FormStrings.PHONE} icon={faPhone} onPress={() =>  quickURLAction("email", props.phone)}/>

    </View>
  )
}

const styles = StyleSheet.create({
    contactContainer: {
        rowGap: 7,
        padding: '3.5%',
        width: '95%',
        alignSelf: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 100,
        maxHeight: 175,
        marginVertical: 30,
        backgroundColor: 'white',
        justifyContent: 'space-evenly'
    },
    contactHeader: {
        flexDirection: 'row',
    }
})