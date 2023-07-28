import { View, Text, ViewStyle, StyleProp, StyleSheet } from 'react-native'
import React, { Context, forwardRef, useContext, useEffect, useImperativeHandle, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAdd, faImage, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';
import { GenStyle } from '../Common/GlobalStyles';
import { ImageUploadContext, SelectedImage } from '../Pages/StackScreens/Account/WorkLocations';

export type UploadProps = { 
  imgID: number;
  label?: string;
  style?: StyleProp<ViewStyle>;
  defaultURI?: string;
  onDelete?: () => void;
}
export const ImageUploader = forwardRef((props: UploadProps, ref) => {
  const { photos, setPhotos } = useContext(ImageUploadContext); 
  const Select = async (imgKey: number) => {
    let photo = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
    let temp = photos;
    temp[props.imgID].uri = photo.assets[0].uri  
    console.log('my photos updating: ', temp)
    
    setPhotos(temp)
  }

  useEffect(() => {
    console.log('my photos: ', photos[props.imgID])
  }, [photos])

  return (
    <View  style={styles.uploadContainer}>
      {photos[props.imgID].uri !== "" 
        ? 
      <ImageBackground style={[GenStyle.fullHeight, GenStyle.fullWidth, { borderRadius: 10}]} alt='image from user library' source={{uri: photos[props.imgID].uri }}>
        {props.defaultURI ? <TouchableOpacity style={[styles.topRight]} onPress={() => console.log('delete')}>
        <FontAwesomeIcon icon={faXmarkCircle}/>
      </TouchableOpacity>  
      : null}
        <TouchableWithoutFeedback style={{width: '100%', height: '100%'}} onPress={() => Select(props.imgID)}/>
      </ImageBackground>
      : 
        <TouchableOpacity style={styles.uploadContainer} onPress={() => Select(props.imgID)}>
          <FontAwesomeIcon size={35} icon={faImage}/>
           <View style={[styles.bottomRight]}>
            <FontAwesomeIcon icon={faAdd}/>
          </View> 
          
        </TouchableOpacity>
      }
     
    
    </View>

  )
})

const styles = StyleSheet.create({
  uploadContainer: {
    width: 100,
    height: 250,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'pink',
    borderWidth: 1,
    shadowOffset: { width: 1, height: 1},
    shadowColor: 'orangered',
    shadowOpacity: 0.5,
    backgroundColor: 'white',

  },

  bottomRight: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    right: 0,
    padding: '10%',
    borderColor: 'red',
    borderWidth: 3,
    borderRadius: 100,
    marginHorizontal: '-10%',
    marginVertical: '-10%',
    backgroundColor: 'white',
  },
  topRight: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    right: 0,
    padding: '10%',
    borderColor: 'red',
    borderWidth: 3,
    borderRadius: 100,
    marginHorizontal: '-10%',
    marginVertical: '-10%',
    backgroundColor: 'white',
  }
})