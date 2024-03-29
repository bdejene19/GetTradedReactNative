import { StyleSheet } from 'react-native'
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
import { useAppDispatch, useAppSelector } from '../../ReduxStore/slices/hooks'
import { setUserStore } from '../../ReduxStore/slices/user'
import { useIsLarge } from '../../Common/customHooks'
import { Login } from '../StackScreens/Account/Login'

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
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => ({
    user: state.userStore
  }))


  useEffect(() => {
    if (userParams) {
      dispatch(setUserStore(route.params))
    }
  }, [userParams])
  return (
    <ScrollView style={styles.pageStyle}>
        <ProfileContact workLocations={user.work_locations} businessName={user.name} email={user.email} phone={user.phone} profilePicture='https://snack-web-player.s3.us-west-1.amazonaws.com/v2/47/static/media/react-native-logo.79778b9e.png' ></ProfileContact>
        
        <BusinessContact email={user.email} phone={user.phone} linkedIn=''/>
        {user.work_images ? <GalleryScroll 
          label='Our Work' 
          containerStyle={{...GalleryStyle.rows}} 
          galleryImgs={user.work_images} 
          scrollHorizontal={true} 
          imgCardStyle={{ padding: 100, height: 300, width: 350 }}
        /> : null}
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
  const [drawerItem, setDrawerItem] = useState(ProfileDrawerRoutes.PROFILE);
  const fontSize = useIsLarge();
  const DrawerContent = ({ navigation }) => {
    const drawerNavigator = useNavigation<DrawerNavigationProp<ProfileDrawerParamList>>();
    const DrawerItemIcon = (props: ProfileDrawerItem) => {
      return (
        <DrawerItem label={props.label} focused={props.isFocused} onPress={props.onPress} icon={props.icon}></DrawerItem>
      )
    }

    const handleDrawerChange = (name: ProfileDrawerRoutes) => {
      drawerNavigator.navigate(name);
      setDrawerItem(name);
    }
    return (
      <DrawerContentScrollView>
        <DrawerItemIcon isFocused={drawerItem === ProfileDrawerRoutes.PROFILE ? true : false} label={ProfileDrawerRoutes.PROFILE} icon={() => <FontAwesomeIcon icon={faHome}/>} onPress={() => handleDrawerChange(ProfileDrawerRoutes.PROFILE)}/>
        <DrawerItemIcon isFocused={drawerItem === ProfileDrawerRoutes.EDIT_PROFILE ? true : false} label={ProfileDrawerRoutes.EDIT_PROFILE} onPress={() => handleDrawerChange(ProfileDrawerRoutes.EDIT_PROFILE)} icon={() => <FontAwesomeIcon icon={faPenClip}/>}/>
        <DrawerItemIcon isFocused={drawerItem === ProfileDrawerRoutes.SETTINGS ? true : false} label={ProfileDrawerRoutes.SETTINGS} onPress={() => handleDrawerChange(ProfileDrawerRoutes.SETTINGS)} icon={() => <FontAwesomeIcon icon={faGears}/>}/>
        <DrawerItemIcon isFocused={drawerItem === ProfileDrawerRoutes.SIGN_OUT ? true : false} label={ProfileDrawerRoutes.SIGN_OUT} onPress={() => navigation.navigate("Login")} icon={() => <FontAwesomeIcon icon={faSignOut}/>}/>
      </DrawerContentScrollView>
    )
  }
  return (
    <NavigationContainer independent={true}>
      <ProfileDrawers.Navigator drawerContent={() => <DrawerContent navigation={navigation}/>}>
        <ProfileDrawers.Group screenOptions={{headerTitleAllowFontScaling: true, headerShadowVisible: false, headerStyle: {
          backgroundColor: '#F47742',
          ...fontSize.subHeader,

        }}}>
          <ProfileDrawers.Screen 
            name={ProfileDrawerRoutes.PROFILE}
            children={() => <Profile navigation={navigation} route={route}/>}
            options={{ 
              headerRight: ProfileHeaderRight,
              headerTitle: ProfileDrawerRoutes.PROFILE,
              headerLeft: ProfileHeaderLeft, 
            }}
          />
          <ProfileDrawers.Screen
            name={ProfileDrawerRoutes.EDIT_PROFILE}
            component={EditProfile}
            options={{ 
              headerTitle: ProfileDrawerRoutes.EDIT_PROFILE,
              headerLeft: ProfileHeaderLeft,
              headerShadowVisible: false,
               
            }}
          />

          <ProfileDrawers.Screen
            name={ProfileDrawerRoutes.SETTINGS}
            options={{ 
              headerTitle: ProfileDrawerRoutes.SETTINGS,
              headerLeft: ProfileHeaderLeft,
            }}
            component={Settings}
          />
        </ProfileDrawers.Group>
      

        <ProfileDrawers.Screen
          name={ProfileDrawerRoutes.SIGN_OUT}
          
          component={Login}
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