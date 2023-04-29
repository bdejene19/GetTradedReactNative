import { View, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import BusinessContact from '../../Components/profile/BusinessContact'
import GalleryScroll from '../../Components/profile/GalleryScroll'
import { ScrollView } from 'react-native-gesture-handler'
import ProfileContact from '../../Components/profile/ProfileContact'
import AboutBusiness from '../../Components/profile/AboutBusiness'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProfileHeaderLeft, ProfileHeaderRight } from '../../Components/tabscreenHeaders/ProfileHeader'
import ProfileDrawer from '../DrawerScreen/ProfileDrawer'
import { ProfileDrawerParamList, ProfileDrawerRoutes } from '../types'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'

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
  console.log('profile params: ', userParams);
  const { work_images } = route.params;
  return (
    <ScrollView style={styles.pageStyle}>
        <ProfileContact workLocations={route.params.work_locations} businessName={userParams.name} email={userParams.email} phone={userParams.phone} profilePicture='https://snack-web-player.s3.us-west-1.amazonaws.com/v2/47/static/media/react-native-logo.79778b9e.png' ></ProfileContact>
        
        <BusinessContact email={userParams.email} phone={userParams.phone} linkedIn=''/>
        <GalleryScroll 
          label='Our Work' 
          containerStyle={{...GalleryStyle.rows}} 
          galleryImgs={work_images} 
          scrollHorizontal={true} 
          imgCardStyle={{ padding: 100, height: 300, width: 350 }}
        />
        <AboutBusiness content='My about content'/>
    </ScrollView>
  )
}

const ProfileDrawers = createDrawerNavigator<ProfileDrawerParamList>();
export const ProfileScreens = ({ navigation, route }) => {
  return (
    <NavigationContainer independent={true}>
      <ProfileDrawers.Navigator drawerContent={(props) => <DrawerContentScrollView {...props}><DrawerItem  {...props} label={"My Profile"} onPress={() => {}}/></DrawerContentScrollView>}>
        <ProfileDrawers.Screen 
          name={ProfileDrawerRoutes.PROFILE}
          children={() => <Profile navigation={navigation} route={route}/>}
          options={{ 
            headerRight: ProfileHeaderRight,
            headerTitle: ProfileDrawerRoutes.PROFILE,
            headerLeft: ProfileHeaderLeft,
            headerShadowVisible: false,
            headerStyle: {
                backgroundColor: '#F47742',
            },  
          }}
        />
        <ProfileDrawers.Screen
          name={ProfileDrawerRoutes.SIDE_MENU}
          component={() => <View></View>}
          />

    
       
      </ProfileDrawers.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  pageStyle: {
    backgroundColor: '#FFE19C',
    height: '100%',
  }
})