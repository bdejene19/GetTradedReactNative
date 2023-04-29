import { View, Text, ViewStyle, Image, ImageBackground } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { ImageStyle } from 'react-native';
import { FontSize, GenStyle } from '../../Common/GlobalStyles';

interface GalleryImg {
  image_id: number;
  file_path: string;
}
interface GalleryScrollProps {
    scrollHorizontal: boolean;
    containerStyle?: ViewStyle;
    imgCardStyle?: ImageStyle;
    label?: string;
    galleryImgs: GalleryImg[];
}
export default function GalleryScroll(props: GalleryScrollProps) {
  console.log('gal: ', props.galleryImgs)
  return (
    <View style={[GenStyle.fullWidth, { rowGap: 5, backgroundColor: 'white', paddingVertical: 10}]}>
        {props.label ? <Text style={[FontSize.subHeader, {paddingHorizontal: 15, }]}>{props.label}</Text> : null}
        <ScrollView 
          horizontal={true} 
          style={{flexDirection: 'row',  width: '100%', paddingLeft: 15, columnGap: 30}} 
          decelerationRate={0}
          snapToAlignment={"center"}
          snapToInterval={360}
        >
            {props.galleryImgs?.map((img) => <ImageBackground resizeMode='cover' key={img.image_id} style={{ width: 335, height: 300, shadowColor: 'lightgrey', marginRight: 30, shadowOffset: {height: 5, width: 5}, shadowOpacity: 1, }} source={{uri: img.file_path}} alt={""}/>)}
        </ScrollView>
    </View>

  )
}