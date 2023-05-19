import { View, Text, StyleSheet, Modal } from 'react-native'
import React, { useState } from 'react'
import { BackendTypes, TextResources } from '../../Common/GlobalDeclarations'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { FontSize, GenStyle } from '../../Common/GlobalStyles'
import { faContactBook, faContactCard, faImages, faMapLocation, faPencil } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { EditContact } from '../../Components/profile/EditContent'

interface HeaderEditProps {
    title: string;
    icon: IconProp;
    onEdit: () => void;
}
interface ModalProps {
    modalFor: string;
}
export default function EditProfile(props: BackendTypes.User) {
    const [isOpen, setIsOpen] = useState(false);
    const HeaderEdit = (props: HeaderEditProps) => {
        return (
            <View style={{width: '100%'}}>
                <TouchableHighlight underlayColor={'lightblue'} onPress={props.onEdit}>
                    <View  style={{ flexDirection: 'row', padding: 15, height: 100, columnGap: 50, alignItems: 'center'}}>
                        <FontAwesomeIcon icon={props.icon} size={60}/>
                        <Text style={[{fontSize: 26, fontWeight: '700'}]}>{props.title}</Text>
                    </View>
                    
                </TouchableHighlight>
            </View>
        )
    }
  return (
    <View style={{rowGap: 50, alignItems: 'center', justifyContent:"center", borderWidth: 3, height: '100%',}}>
        <HeaderEdit title={`Business ${TextResources.FormStrings.CONTACT}`} onEdit={() => setIsOpen(!isOpen)} icon={faContactCard}/>
        <HeaderEdit title={`Work Locations`} onEdit={() => setIsOpen(!isOpen)} icon={faMapLocation}/>
        <HeaderEdit title={`Showcase Gallery`} onEdit={() => setIsOpen(!isOpen)} icon={faImages}/>
        <Modal presentationStyle={"overFullScreen"} visible={isOpen} collapsable={true}>
            <EditContact email={props.email} name={props.name} phone={props.phone} password={props.password} user_id={props.user_id} key={props.user_id}>hi</EditContact>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    contactHeader: {

    }
})