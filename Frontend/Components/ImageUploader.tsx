import { View, Text, ViewStyle, StyleProp, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAdd, faImage } from '@fortawesome/free-solid-svg-icons';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';
import { GenStyle } from '../Common/GlobalStyles';
import { ImageUploadContext } from '../Pages/StackScreens/WorkLocations';
interface UploadProps { 
  imgID: number;
  label?: string;
  style?: StyleProp<ViewStyle>;
}
export default function ImageUploader(props: UploadProps) {
  const [selectURI, setURI] = useState("");
  const Select = async () => {
    let photo = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
    setURI(photo.assets[0].uri);
  }
  return (
    <View  style={styles.uploadContainer}>
      {selectURI !== "" 
        ? 

      <ImageBackground style={[GenStyle.fullHeight, GenStyle.fullWidth]} alt='image from user library' source={{uri: selectURI}}>
        <TouchableWithoutFeedback style={{width: '100%', height: '100%'}} onPress={Select}/>
      </ImageBackground>
      : 
        <TouchableOpacity style={styles.uploadContainer} onPress={Select}>
          <FontAwesomeIcon size={35} icon={faImage}/>
          <View style={[styles.bottomRight]}>
            <FontAwesomeIcon icon={faAdd}/>
          </View>
        </TouchableOpacity>
      }
     
    
    </View>

  )
}

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
  }
})