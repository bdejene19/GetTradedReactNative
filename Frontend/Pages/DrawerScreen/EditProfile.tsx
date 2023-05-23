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
import { useIsLarge } from '../../Common/customHooks'


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

      const fontSize = useIsLarge()

    const HeaderEdit = (props: HeaderEditProps) => {
        return (
            <View style={{width: '100%', height: '30%'}}>
                <TouchableHighlight style={{height: '100%', alignItems: 'center', justifyContent: 'center'}} underlayColor={'lightblue'} onPress={props.onEdit}>
                    <View  style={{ flexDirection: 'row', padding: 15, height: 100, columnGap: 50, alignItems: 'center'}}>
                        <FontAwesomeIcon icon={props.icon} size={60}/>
                        <Text style={[fontSize.pageHeader,{ fontWeight: '700'}]}>{props.title}</Text>
                    </View>
                    
                </TouchableHighlight>
            </View>
        )
    }
    const EditProvider = ({ children }) => {
        const Header = (props: { title: string }) => {
            return (
                <View style={[styles.editHeader, {backgroundColor: "#F47742", padding: 15, }]}>
                    <TouchableOpacity onPress={() => setIsOpen(false)}>
                        <FontAwesomeIcon icon={faXmarkCircle} size={32}/>
                    </TouchableOpacity>
                    <Text style={{fontSize: 32}}>Edit {props.title}</Text>
                </View>
            )
        }
        return (
            <View style={{rowGap: 30}}>
                <Header title={modalSelected}/>
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
    <View style={{alignItems: 'center', backgroundColor: "#FFE19C", justifyContent:"center", height: '100%',}}>

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
        paddingTop: 50,
        flexDirection: 'row',
        columnGap: 20,
        alignItems: 'center',

    },
})