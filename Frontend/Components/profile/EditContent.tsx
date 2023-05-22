import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { BackendTypes, TextResources } from '../../Common/GlobalDeclarations'
import { Button, IconElement, Input, List, ListItem } from '@ui-kitten/components'
import { useAppSelector } from '../../ReduxStore/slices/hooks'
import { FontSize } from '../../Common/GlobalStyles'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDeleteLeft, faEye, faEyeSlash, faSearch, faSearchLocation } from '@fortawesome/free-solid-svg-icons'

interface DeleteIcon {
    onDelete: (location: number) => Promise<void>;
}
const RenderInputSecure = (props: { secure?: boolean, onChange?: () => void}) => {
    return (
        <TouchableWithoutFeedback onPress={() => props?.onChange ? props?.onChange : props.secure}>
            <FontAwesomeIcon icon={props.secure ? faEye : faEyeSlash}/>
        </TouchableWithoutFeedback>
    )
}
export const EditContact  = () =>  {
    const user = useAppSelector((state) => ({
        name: state.userStore.name,
        email: state.userStore.email,
        phone: state.userStore.phone,
        password: state.userStore.password,
        user_id: state.userStore.user_id
      }))
      const [contact, setContact] = useState<BackendTypes.User>(user);
      const validateButton = () => {
          let disableBtn = true
          Object.keys(contact)?.map(key => {
            if (contact[key] !== user[key]) {
                disableBtn = false
            }
          })
          return disableBtn;
      }
    return (
        <View style={styles.contactContainer}>
            <Input label={TextResources.FormStrings.NAME} value={contact.name} onChangeText={(name: string) => setContact({...contact, name: name})}/>
            <Input label={TextResources.FormStrings.EMAIL} value={contact.email} onChangeText={(email: string) => setContact({...contact, email: email})}/>
            <Input label={TextResources.FormStrings.PHONE} value={contact.phone} onChangeText={(phone: string) => setContact({...contact, phone: phone})}/>
            <Input 
                label={TextResources.FormStrings.PASSWORD} 
                onChangeText={(password: string) => setContact({...contact, password: password})} 
                secureTextEntry={true} 
                accessoryRight={() => <RenderInputSecure onChange={() => {}} secure={true}/>}   
                value={contact.password}
            />
            <Button appearance={'filled'} disabled={validateButton()}>Edit Contact</Button>
        </View>
    )
}

export const EditLocations = () => {
    const { locations, user_id } = useAppSelector((state) => ({
        locations: state.userStore.work_locations,
        user_id: state.userStore.user_id
    }))


    const renderItem = ({item, index}: {item: BackendTypes.WorkLocation, index: number}) => {
        const deleteItemIcon = (props: DeleteIcon): IconElement => (
            <TouchableOpacity onPress={() => props.onDelete(item.location_id)}>
                <FontAwesomeIcon icon={faDeleteLeft}/>
            </TouchableOpacity>
          );

          const deleteLocation = async (location_id: number) => {
            try {   
                const deleted = await ((await fetch(`${TextResources.API_ROUTES.HOST}/${TextResources.API_ROUTES.LOCATIONS}/${location_id}`)).json())
                console.log('my deleted: ', deleted);
            } catch(err) {
                console.log("ERror deleting location: ")
            }
          }
        return (
            <ListItem
                title={`${item.name}`}
                disabled
                key={item.location_id}
                accessoryRight={deleteItemIcon({ onDelete: () => deleteLocation(item.location_id)})}
            />
        )
    }
    const [query, setQuery] = useState("");
        return (
            <View>
                <Input 
                    style={{width: '97.5%'}}
                    placeholder={TextResources.FormStrings.SEARCH} 
                    accessoryRight={<FontAwesomeIcon icon={faSearchLocation}/>}
                    value={query}
                    onChangeText={(text: string) => setQuery(text)}
                />
                <List 
                    style={{}}
                    data={locations}
                    renderItem={renderItem}
                />

            </View>
        )
} 

export const EditGallery = (props:{ imgs: BackendTypes.WorkImage[] }) => useMemo(() => {

    fetch(`${TextResources.API_ROUTES.HOST}/${TextResources.API_ROUTES.PROFILE}/user_id`)

    return (
        <View>
                        <Text style={{fontSize: 60}}>Edit Gallery</Text>

            {props.imgs?.map(img => <Image source={{uri: img.file_path}} alt={img.file_path} />)}
        </View>
    )
}, [])
  

const styles = StyleSheet.create({
    contactContainer: {
        rowGap: 25,
    }
})