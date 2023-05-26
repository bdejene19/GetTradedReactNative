import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { BackendTypes, TextResources } from '../../Common/GlobalDeclarations'
import { Button, IconElement, Input, List, ListItem } from '@ui-kitten/components'
import { useAppDispatch, useAppSelector } from '../../ReduxStore/slices/hooks'
import { FontSize, GenStyle } from '../../Common/GlobalStyles'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleXmark, faDeleteLeft, faEye, faEyeSlash, faSearch, faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import { removeLocation, removeWorkImage, setUserContact } from '../../ReduxStore/slices/user'
import ImageUploader, { UploadProps } from '../ImageUploader'

interface DeleteIcon {
    onDelete: (location: number) => Promise<void>;
}

const RenderInputSecure = (props: { secure?: boolean, onChange?: () => void}) => {
    return (
        <TouchableWithoutFeedback onPress={props.onChange}>
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
      const [isSecure, setSecure] = useState(true);

      const dispatch = useAppDispatch();
      const [contact, setContact] = useState<BackendTypes.User>(user);
      const validateButton = () => {
          let disableBtn = true
          Object.keys(contact)?.map(key => {
            if (typeof contact[key] === 'string' && contact[key].trim() !== user[key]) {
                disableBtn = false
            }
          })
          return disableBtn;
      }
      
      const editContactInfo = async (user_id: number) => {
          try {
            const editRequest = (await fetch(`${TextResources.API_ROUTES.HOST}/${TextResources.API_ROUTES.PROFILE}/${user_id}`, {
                method: "PUT",
                body: JSON.stringify(contact),
                headers: {
                    "Content-Type": "application/json"
                  }
            }))

            if (editRequest.status === 200) {
                const edited = await editRequest.json()
                dispatch(setUserContact(edited))
            }

          } catch(e) {
              console.log("Error editing contact info", e);
          }
         


      }
    return (
        <View style={styles.contactContainer}>
            <Input label={TextResources.FormStrings.NAME} value={contact.name} onChangeText={(name: string) => setContact({...contact, name: name})}/>
            <Input label={TextResources.FormStrings.EMAIL} value={contact.email} onChangeText={(email: string) => setContact({...contact, email: email})}/>
            <Input label={TextResources.FormStrings.PHONE} value={contact.phone} onChangeText={(phone: string) => setContact({...contact, phone: phone})}/>
            <Input 
                label={TextResources.FormStrings.PASSWORD} 
                onChangeText={(password: string) => setContact({...contact, password: password})} 
                secureTextEntry={isSecure} 
                accessoryRight={() => <RenderInputSecure onChange={() => setSecure(!isSecure)} secure={isSecure}/>}   
                value={contact.password}
            />
            <Button appearance={'filled'} disabled={validateButton()}  style={[{position: 'absolute', bottom: 7, alignSelf: 'center',}, GenStyle.fullWidth]} onPress={() => editContactInfo(contact.user_id)}>Edit Contact</Button>
        </View>
    )
}

export const EditLocations = () => {
    const { locations, user_id } = useAppSelector((state) => ({
        locations: state.userStore.work_locations,
        user_id: state.userStore.user_id
    }))

    const dispatch = useAppDispatch();

    const renderItem = ({item, index}: {item: BackendTypes.WorkLocation, index: number}) => {
        const DeleteItemIcon = (props: DeleteIcon): IconElement => (
            <TouchableOpacity onPress={() => props.onDelete(item.location_id)}>
                <FontAwesomeIcon icon={faCircleXmark}/>
            </TouchableOpacity>
          );

          const deleteLocation = async (location_id: number) => {
            try {   
                const res = (await fetch(`${TextResources.API_ROUTES.HOST}/${TextResources.API_ROUTES.LOCATIONS}/${location_id}`, {
                    method: "DELETE",
                }))

                if (res.status === 200) {
                    const deleted = await res.json();
                    dispatch(removeLocation({location_id: location_id}))
                                    }
            } catch(err) {
                console.log("ERror deleting location: ")
            }
          }
        return (
            <View>
                <ListItem
                    title={`${item.name}`}
                    disabled
                    key={item.location_id}
                    accessoryRight={() => <DeleteItemIcon onDelete={() => deleteLocation(item.location_id)}/>}
                />
            </View>
          
        )
    }
    const [query, setQuery] = useState("");
        return (
            <View style={{paddingHorizontal: 15, rowGap: 15,}}>
                <Input 

                    placeholder={TextResources.FormStrings.SEARCH} 
                    accessoryRight={<FontAwesomeIcon icon={faSearchLocation}/>}
                    value={query}
                    onChangeText={(text: string) => setQuery(text)}
                />
                <List 
                    data={locations}
                    renderItem={renderItem}
                />

            </View>
        )
} 


export const EditGallery = (props:{ imgs: BackendTypes.WorkImage[] }) => {
    let { work_images, user_id } = useAppSelector((state) => ({
        work_images: state.userStore.work_images,
        user_id: state.userStore.user_id
    }))
    const dispatch = useAppDispatch();

    const GenericUpload: BackendTypes.WorkImage = {
        image_id: null,
        file_path: null,
        user_id: user_id
    }

    const deleteWorkImage = async (image_id: number) => {
        try {
            const deleteImgReq = await fetch(`${TextResources.API_ROUTES.HOST}/${TextResources.API_ROUTES.WORK_IMAGES}/${image_id}`, {
                method: "DELETE",
                body: JSON.stringify({image_id: image_id })
            });
            if (deleteImgReq.status === 200) {
                const deleted = await deleteImgReq.json();
                if (deleted) {
                    dispatch(removeWorkImage({ image_id: image_id }))
                }
            }
        } catch(e) {
            console.log('Error deleting image', e);
        }
        
    }
    const availableUploads = 6 - (work_images ? work_images.length : 0);
    const extras = work_images.concat(new Array(availableUploads).fill(GenericUpload));
 
    return useMemo(() => {
        return (
            <View style={{flexDirection: 'row', flexWrap: 'wrap', flexGrow: 1, columnGap: 15, rowGap: 15, justifyContent: 'space-evenly'}}>
    
                {extras?.map((img, index) => {
                    if (img.file_path !== null) {
                        return <ImageUploader onDelete={() => deleteWorkImage(img.image_id)} imgID={img.image_id} defaultURI={img.file_path}  />
                    } else {
                        return <ImageUploader imgID={index + 1}/>
                    }
                })}
            </View>
        )
    }, [])
} 
  

const styles = StyleSheet.create({
    contactContainer: {
        rowGap: 25,
        padding: 15,
        height: '80%',

    }
})