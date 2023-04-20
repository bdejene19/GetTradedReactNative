import { View, Text, ViewStyle, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { ImageStyle } from 'react-native';
import { GenStyle } from '../Common/GlobalStyles';

interface GalleryScrollProps {
    scrollHorizontal: boolean;
    containerStyle?: ViewStyle;
    imgCardStyle?: ImageStyle;
    label?: string;
    galleryImgs: string[];
}
export default function GalleryScroll(props: GalleryScrollProps) {
  return (
    <View style={[GenStyle.fullWidth, { borderColor: 'black', borderWidth: 3}]}>
        {props.label ? <Text>{props.label}</Text> : null}
        <ScrollView style={{flexDirection: 'row',  columnGap: 30, width: '100%'}} horizontal={props.scrollHorizontal}>
            {props.galleryImgs?.map(img => (<View key='any' style={{padding: 30, width: '100%'}}><Image key={img} source={{uri: img}} alt={img}/></View>))}
        </ScrollView>
    </View>

  )
}