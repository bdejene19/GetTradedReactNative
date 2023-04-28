import { View, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import BusinessContact from '../../Components/profile/BusinessContact'
import GalleryScroll from '../../Components/profile/GalleryScroll'

import { ViewStyle } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ProfileContact from '../../Components/profile/ProfileContact'
import AboutBusiness from '../../Components/profile/AboutBusiness'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProfileHeaderLeft, ProfileHeaderRight } from '../../Components/tabscreenHeaders/ProfileHeader'
import ProfileDrawer from '../DrawerScreen/ProfileDrawer'
import { ProfileStackParamList, ProfileStackRoutes } from '../types'

const GalleryStyle = StyleSheet.create({
  rows: {
    flexDirection: 'row',
    display: 'flex',

  },
  gaps: {

  } 
})
function Profile({ navigation, route }) {
  const userParams = route.params;
  return (
    <ScrollView style={styles.pageStyle}>
        <ProfileContact businessName={userParams.name} email={userParams.email} phone={userParams.phone} profilePicture='https://snack-web-player.s3.us-west-1.amazonaws.com/v2/47/static/media/react-native-logo.79778b9e.png' ></ProfileContact>
        
        <BusinessContact email='' phone='' linkedIn=''/>
        <GalleryScroll 
          label='Our Work' 
          containerStyle={{...GalleryStyle.rows}} 
          galleryImgs={["https://cdn.pixabay.com/photo/2015/03/17/02/01/cubes-677092__480.png",
        "https://cdn.pixabay.com/photo/2015/03/17/02/01/cubes-677092__480.png",
      "https://cdn.pixabay.com/photo/2015/03/17/02/01/cubes-677092__480.png"]} 
          scrollHorizontal={true} 
          imgCardStyle={{ padding: 100, height: 300, width: 350 }}
        />
        <AboutBusiness content='My about content'/>
    </ScrollView>
  )
}

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();
export const ProfileScreens = ({ navigation, route }) => {
  return (
    <NavigationContainer independent={true}>
      <ProfileStack.Navigator>
        <ProfileStack.Screen 
          name={ProfileStackRoutes.PROFILE}
          component={() => <Profile navigation={navigation} route={route}/>}
          options={{ 
            headerRight: ProfileHeaderRight,
            headerTitle: ProfileStackRoutes.PROFILE,
            headerLeft: ProfileHeaderLeft,
            headerShadowVisible: false,
            headerStyle: {
                backgroundColor: '#F47742',
            },  
          }}
        />
      </ProfileStack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  pageStyle: {
    backgroundColor: '#FFE19C',
    height: '100%',
  }
})