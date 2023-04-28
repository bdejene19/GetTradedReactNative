import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClipboard, faHome, faMessage } from '@fortawesome/free-solid-svg-icons';
import JobBoard from '../Pages/TabScreens/JobBoard';
import { ProfileScreens } from '../Pages/TabScreens/Profile';
import MessageBoard from '../Pages/TabScreens/MessageBoard';
import { TabRootParamList, TabRoutes } from '../Pages/types';
import { ProfileHeaderLeft, ProfileHeaderRight } from './tabscreenHeaders/ProfileHeader';

const ProfileIcon = () => (
    <FontAwesomeIcon icon={faHome}/>
)
const MessageIcon = () => (
    <FontAwesomeIcon icon={faMessage}/>
)



const JobsIcon = () => (
    <FontAwesomeIcon icon={faClipboard}/>
)

const Tab = createBottomTabNavigator<TabRootParamList>();
export default function Main({ navigation, route }) {
    const userParams = route.params
    console.log('main params: ', userParams);
  return (
    <NavigationContainer independent={true}>
        <Tab.Navigator>
            <Tab.Screen 
                name={TabRoutes.PROFILE}
                component={() => <ProfileScreens navigation={navigation} route={route}/>}
                
                options={({ navigation, route }) => ({ 
                    headerShown: false,
                    tabBarIcon: ProfileIcon
                })}
            />
            <Tab.Screen 
                name={TabRoutes.JOBS}
                component={JobBoard}
                options={{ 
                    headerShown: false,
                    tabBarIcon: JobsIcon
                }}
            />
            <Tab.Screen 
                name={TabRoutes.MESSAGES} 
                
                component={MessageBoard}
                options={({ navigation,}) => ({ headerShown: false, tabBarIcon: MessageIcon })}
            />
        </Tab.Navigator>
    </NavigationContainer>
  )
}