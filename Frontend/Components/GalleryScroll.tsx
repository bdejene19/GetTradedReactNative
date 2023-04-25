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
        <ScrollView 
          horizontal={true} 
          style={{flexDirection: 'row',  width: '100%', columnGap: 30}} 
          decelerationRate={0.9}
          snapToInterval={150}
          snapToAlignment={"center"}
          showsHorizontalScrollIndicator={false}
          disableIntervalMomentum={true}
        >
            {props.galleryImgs?.map(img => <Image key={img} style={{ width: 325, height: 150, shadowColor: 'white', shadowOffset: {height: 5, width: 5} }} source={{uri: img}} alt={img}/>)}
        </ScrollView>
    </View>

  )
}