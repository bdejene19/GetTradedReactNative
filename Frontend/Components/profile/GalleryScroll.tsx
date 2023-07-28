import { View, Text, ViewStyle, Image, ImageBackground } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { ImageStyle } from 'react-native';
import { GenStyle } from '../../Common/GlobalStyles';
import { useIsLarge } from '../../Common/customHooks';

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
  const fontSize = useIsLarge();
  return (
    <View style={[GenStyle.fullWidth, { rowGap: 5, backgroundColor: 'white', paddingVertical: 10}]}>
        {props.label ? <Text style={[fontSize.subHeader, {paddingHorizontal: 15 }]}>{props.label}</Text> : null}
        <ScrollView 
          horizontal={true} 
          style={{flexDirection: 'row',  width: '100%', paddingLeft: 15, columnGap: 30}} 
          decelerationRate={0}
          snapToAlignment={"center"}
          snapToInterval={360}
        >
            {props.galleryImgs?.map((img) => <ImageBackground resizeMode='cover' key={img.image_id} style={{ width: 335, height: 300, shadowColor: 'lightgrey', marginRight: 30, shadowOffset: {height: 5, width: 5}, shadowOpacity: 1, justifyContent: 'flex-end' }} source={{uri: img.file_path}} alt={""}>
              <View style={{backgroundColor: 'white', opacity: 0.8, padding: '1.5%', width: '100%', height: '35%'}}>
                <Text style={[fontSize.regText]}>hiiii</Text>
              </View>
            </ImageBackground>)}
        </ScrollView>
    </View>

  )
}