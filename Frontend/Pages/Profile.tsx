import { View, StyleSheet } from 'react-native'
import React from 'react'
import ProfileContact from '../Components/ProfileContact'
import AboutBusiness from '../Components/AboutBusiness'
import GalleryScroll from '../Components/GalleryScroll'
import { ViewStyle } from 'react-native'

const GalleryStyle = StyleSheet.create({
  rows: {
    flexDirection: 'row',
    display: 'flex',

  },
  gaps: {

  } 
})
export default function Profile() {

  return (
    <View style={styles.pageStyle}>
        <ProfileContact businessName='Bemnet Dejene' email='' phone='' profilePicture='https://snack-web-player.s3.us-west-1.amazonaws.com/v2/47/static/media/react-native-logo.79778b9e.png' ></ProfileContact>
        <AboutBusiness content='My About business Section'/>
        <GalleryScroll 
          label='Our Work' 
          containerStyle={{...GalleryStyle.rows}} 
          galleryImgs={["https://cdn.pixabay.com/photo/2015/03/17/02/01/cubes-677092__480.png",
        "https://cdn.pixabay.com/photo/2015/03/17/02/01/cubes-677092__480.png",
      "https://cdn.pixabay.com/photo/2015/03/17/02/01/cubes-677092__480.png"]} 
          scrollHorizontal={true} 
          imgCardStyle={{ padding: 100, height: 300, width: 350 }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  pageStyle: {
    rowGap: 25,

  }
})