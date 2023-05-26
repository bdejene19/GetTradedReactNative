import { View, Text } from 'react-native'
import React, { useState, createContext, SetStateAction, Dispatch } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { Button } from '@ui-kitten/components'
import { ScrollView } from 'react-native-gesture-handler'
import { Locator } from '../../Common/Locator'
import { BackendTypes, TextResources } from '../../Common/GlobalDeclarations'
import ImageUploader from '../../Components/ImageUploader'
import { GenStyle } from '../../Common/GlobalStyles'
import { ImagePickerCanceledResult, ImagePickerResult } from 'expo-image-picker';
import { useIsLarge } from '../../Common/customHooks';
import { useAppDispatch } from '../../ReduxStore/slices/hooks';
import { setUserStore, UserStore} from '../../ReduxStore/slices/user';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackLoginRoutes, StackRootParamList } from '../types';

export type SelectedImage = {
  [key: number]: {
    uri: string;
  };
}

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
export const ImageUploadContext = createContext({});
export default function WorkLocations({ navigation, route}) {
  const fontSize = useIsLarge();
  const dispatch = useAppDispatch();
  const loginNav = useNavigation<NavigationProp<StackRootParamList>>()
  const [photos, setPhotos] = useState<SelectedImage>(initialPhotos);
  const pickPhoto = async (key: number) => {
    let photo = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
    let tempPhotos = photos;
    tempPhotos[key].uri = photo.assets[0].uri;
    console.log('temp photos uri: ', tempPhotos)
    setPhotos(tempPhotos);
  }

  const createAccount = async () => {
    try {
      const accountDetails = await route.params.promise();
      const userInfo = {
        name: accountDetails.businessName,
        email: accountDetails.email,
        phone: accountDetails.phone,
        password: accountDetails.pswd,
        work_images: [],
        work_locations: [],
    }
      console.log('accou: ',)
      const userCreated = await (await fetch(`${TextResources.API_ROUTES.HOST}/${TextResources.API_ROUTES.PROFILE}/newUser`, {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json"
        }
      })).json().catch(e => console.log(e));

      console.log('user: ', userCreated);
      if (userCreated)  {
        console.log('if hit')
        // dispatch(setUserStore(userCreated))
        loginNav.navigate(StackLoginRoutes.MAIN, userCreated);
      }
    } catch(e) {

    }
   
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
          <Button onPress={createAccount}>Finish</Button>
          <Button appearance={'outline'}>Skip</Button>
        </View>
       
    </ScrollView>
  
  )
}