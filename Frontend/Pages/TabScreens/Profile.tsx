import { View, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import BusinessContact from '../../Components/profile/BusinessContact'
import GalleryScroll from '../../Components/profile/GalleryScroll'
import { ScrollView } from 'react-native-gesture-handler'
import ProfileContact from '../../Components/profile/ProfileContact'
import AboutBusiness from '../../Components/profile/AboutBusiness'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { ProfileHeaderLeft, ProfileHeaderRight } from '../../Components/tabscreenHeaders/ProfileHeader'
import { ProfileDrawerParamList, ProfileDrawerRoutes } from '../types'
import { createDrawerNavigator, DrawerContent, DrawerContentScrollView, DrawerItem, DrawerItemList, DrawerNavigationProp, DrawerScreenProps } from '@react-navigation/drawer'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGears, faHome, faPenClip, faSignOut } from '@fortawesome/free-solid-svg-icons'
import Settings from '../DrawerScreen/Settings'
import EditProfile from '../DrawerScreen/EditProfile'
import { useAppDispatch } from '../../ReduxStore/slices/hooks'
import { setUserStore } from '../../ReduxStore/slices/user'

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
  const { work_images } = route.params
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if (userParams) {
      dispatch(setUserStore(route.params))
    }
  }, [userParams])
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

interface ProfileDrawerItem {
  label: string;
  onPress: () => void;
  icon: () => JSX.Element;
  isFocused: boolean;
}
const ProfileDrawers = createDrawerNavigator<ProfileDrawerParamList>();
export const ProfileScreens = ({ navigation, route }) => {
  const [drawerItem, setDrawerItem] = useState("Profile");
  const DrawerContent = () => {
    const navigation = useNavigation<DrawerNavigationProp<ProfileDrawerParamList>>();
    const DrawerItemIcon = (props: ProfileDrawerItem) => {
      return (
        <DrawerItem label={props.label} focused={props.isFocused} onPress={props.onPress} icon={props.icon}></DrawerItem>
      )
    }

    const handleDrawerChange = (name: ProfileDrawerRoutes) => {
      navigation.navigate(name);
      setDrawerItem(name);
    }
    return (
      <DrawerContentScrollView>
        <DrawerItemIcon isFocused={drawerItem === 'Profile' ? true : false} label={ProfileDrawerRoutes.PROFILE} icon={() => <FontAwesomeIcon icon={faHome}/>} onPress={() => handleDrawerChange(ProfileDrawerRoutes.PROFILE)}/>
        <DrawerItemIcon isFocused={drawerItem === 'Edit Profile' ? true : false} label={'Edit Profile'} onPress={() => handleDrawerChange(ProfileDrawerRoutes.EDIT_PROFILE)} icon={() => <FontAwesomeIcon icon={faPenClip}/>}/>
        <DrawerItemIcon isFocused={drawerItem === 'Settings' ? true : false} label={'Settings'} onPress={() => handleDrawerChange(ProfileDrawerRoutes.SETTINGS)} icon={() => <FontAwesomeIcon icon={faGears}/>}/>
        <DrawerItemIcon isFocused={drawerItem === 'Sign Out' ? true : false} label={'Sign Out'} onPress={() => {}} icon={() => <FontAwesomeIcon icon={faSignOut}/>}/>
      </DrawerContentScrollView>
    )
  }
  return (
    <NavigationContainer independent={true}>
      <ProfileDrawers.Navigator drawerContent={DrawerContent}>
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
          name={ProfileDrawerRoutes.EDIT_PROFILE}
          component={EditProfile}
        />
        <ProfileDrawers.Screen
          name={ProfileDrawerRoutes.SETTINGS}
          options={{ 
            headerTitle: ProfileDrawerRoutes.SETTINGS,
            headerLeft: ProfileHeaderLeft,
            headerShadowVisible: false,
            headerStyle: {
                backgroundColor: '#F47742',
            },  
          }}
          component={Settings}
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