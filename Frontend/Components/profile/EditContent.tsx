import { View, Text, Image } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { BackendTypes, TextResources } from '../../Common/GlobalDeclarations'
import { Input } from '@ui-kitten/components'

export const EditContact  = (props: BackendTypes.User) =>  {
    const [contact, setContact] = useState<BackendTypes.User>();
  
    useMemo(() => {
        fetch(`${TextResources.API_ROUTES.HOST}/${TextResources.API_ROUTES.PROFILE}/1`).then(res => res.json()).then(res => setContact(res)).catch(err => console.log('err: ', err))
        console.log('ran')
    }, [contact]);
    return (
        <View>
            <Text style={{fontSize: 32}}>hiiii!!</Text>
            <Input label={"Test"}></Input>
        </View>
    )
}

export const EditLocations = () => useMemo(() => {
    
    fetch(`${TextResources.API_ROUTES.HOST}/${TextResources.API_ROUTES.LOCATIONS}/1`)

    return (
        <View>
            <Text>Edit Locations</Text>
        </View>
    )
}, [])

export const EditGallery = (props: BackendTypes.WorkImage[]) => useMemo(() => {

    fetch(`${TextResources.API_ROUTES.HOST}/${TextResources.API_ROUTES.PROFILE}/user_id`)

    return (
        <View>
            {props?.map(img => <Image source={{uri: img.file_path}} alt={img.file_path} />)}
        </View>
    )
}, [])
  