import { View, Text, ViewStyle, StyleProp, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAdd, faImage } from '@fortawesome/free-solid-svg-icons';

interface UploadProps { 
    label: string;
    style?: StyleProp<ViewStyle>;
}
export default function ImageUploader(props: UploadProps) {
  return (
    <View style={styles.uploadContainer}>
      <FontAwesomeIcon size={35} icon={faImage}/>
      <View style={[styles.bottomRight]}>
        <FontAwesomeIcon icon={faAdd}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  uploadContainer: {
    width: '25%',
    height: '40%',
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