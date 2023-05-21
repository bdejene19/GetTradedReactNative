import { View, Text, StyleSheet, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BackendTypes, TextResources } from '../../Common/GlobalDeclarations'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { FontSize, GenStyle } from '../../Common/GlobalStyles'
import { faContactBook, faContactCard, faImages, faMapLocation, faPencil, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { EditContact, EditGallery, EditLocations } from '../../Components/profile/EditContent'
import { useAppSelector } from '../../ReduxStore/slices/hooks'

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
    const [modalSelected, setModal] = useState("");
    const [modalContent, setContent] = useState<JSX.Element>(<View></View>)
    const user = useAppSelector((state) => ({
        name: state.userStore.name,
        email: state.userStore.email,
        phone: state.userStore.phone,
        password: state.userStore.password,
        user_id: state.userStore.user_id
      }))
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
    const EditProvider = ({ children }) => {
        return (
            <View style={{padding: 15,}}>
                <View style={styles.editHeader}>
                    <TouchableOpacity onPress={() => setIsOpen(false)}>
                        <FontAwesomeIcon icon={faXmarkCircle} size={32}/>
                    </TouchableOpacity>
                </View>
                {children}
            </View>
        )
    }
   
    useEffect(() => {
        if (modalSelected === 'Business') {
            setContent(<EditContact/>)
        } else if (modalSelected === 'Work Locations') {
            setContent(<EditLocations/>)
        } else if (modalSelected === 'Showcase Gallery') {
            setContent(<EditGallery imgs={[]}/>)
        }
    }, [isOpen])

    const openModal = (name: string) => {
        setModal(name)
        setIsOpen(true);

    }
  return (
    <View style={{rowGap: 50, alignItems: 'center', justifyContent:"center", height: '100%',}}>
        <HeaderEdit title={`Business ${TextResources.FormStrings.CONTACT}`} onEdit={() => openModal('Business')} icon={faContactCard}/>
        <HeaderEdit title={`Work Locations`} onEdit={() => openModal('Work Locations')} icon={faMapLocation}/>
        <HeaderEdit title={`Showcase Gallery`} onEdit={() => openModal('Showcase Gallery')} icon={faImages}/>
        <Modal presentationStyle={"fullScreen"} animationType="slide" visible={isOpen} collapsable={true}>
            <EditProvider>
                {modalContent}
            </EditProvider>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    contactHeader: {

    },
    editHeader: {
        paddingTop: 30,
    },
})