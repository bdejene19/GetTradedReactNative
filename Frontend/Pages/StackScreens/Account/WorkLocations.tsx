import { View, Text } from 'react-native'
import React, { useState, createContext, SetStateAction, Dispatch, useEffect, useRef } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { Button } from '@ui-kitten/components'
import { ScrollView } from 'react-native-gesture-handler'
import { TextResources } from '../../../Common/GlobalDeclarations'
import { GenStyle } from '../../../Common/GlobalStyles'
import { useIsLarge } from '../../../Common/customHooks';
import { useAppDispatch, useAppSelector } from '../../../ReduxStore/slices/hooks';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackLoginRoutes, StackRootParamList } from '../../types';
import { ImageUploader } from '../../../Components/ImageUploader';
import { SelectedImage, photoContextType } from './helpers/types';
import { createAccount } from './helpers/methods';


const initialPhotos: SelectedImage = {
  1: {
    uri: "",
  },
  2: {
    uri: "",
  },
  3: {
    uri: "",
  },
  4: {
    uri: "",
  },
  5: {
    uri: "",
  },
  6: {
    uri: "",
  },
}

export const ImageUploadContext = createContext<photoContextType>({});
export default function WorkLocations({ navigation, route}) {
  const fontSize = useIsLarge();
  const loginNav = useNavigation<NavigationProp<StackRootParamList>>()
  const [photos, setPhotos] = useState<SelectedImage>(initialPhotos);

  const convertToSchema = (photos: SelectedImage) => {
    let temp = [];
    Object.keys(photos).map(photo => {
      if (photos[photo].uri !== "") {
        temp.push({
          file_path: photos[photo].uri
        })
      }
    });
    
   return temp;
  }
  const createNewAccount = async () => {
    let created = await createAccount(route.params.promise(), photos);
    created ? loginNav.navigate(StackLoginRoutes.MAIN, created) : console.log(created);

   
  }

  return (
    <ScrollView style={{rowGap: 40, height: '100%'}}>
        {/* <Locator label={TextResources.CreateAccountText.locations} location={''}/> */}
        <Text style={fontSize.pageHeader}>Upload Images of your Work!</Text>
        <View style={{rowGap: 40, paddingTop: 30, flexDirection: 'row', flexWrap: 'wrap', columnGap: 12, justifyContent:'space-evenly' }}>
          <ImageUploadContext.Provider value={{photos, setPhotos}}>
            <ImageUploader key={'photo-1'} imgID={1}/>
            <ImageUploader key={'photo-2'} imgID={2}/>
            <ImageUploader key={'photo-3'} imgID={3}/>
            <ImageUploader key={'photo-4'} imgID={4}/>
            <ImageUploader key={'photo-5'} imgID={5}/>
            <ImageUploader key={'photo-6'} imgID={6}/>
          </ImageUploadContext.Provider>
        </View>
        <View style={[GenStyle.fullWidth, { marginVertical: 50, rowGap: 15}]}>
          <Button onPress={createNewAccount}>Finish</Button>
          <Button appearance={'outline'}>Skip</Button>
        </View>
       
    </ScrollView>
  
  )
}