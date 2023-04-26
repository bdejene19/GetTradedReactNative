import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClipboard, faHome, faMessage } from '@fortawesome/free-solid-svg-icons';
import JobBoard from '../Pages/TabScreens/JobBoard';
import Profile from '../Pages/TabScreens/Profile';
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
export default function Main() {
  return (
    <NavigationContainer independent={true}>
        <Tab.Navigator>
            <Tab.Screen 
                name={TabRoutes.PROFILE}
                component={Profile}
                
                options={{ 
                    headerRight: ProfileHeaderRight,
                    headerTitle: '',
                    headerLeft: ProfileHeaderLeft,
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: '#F47742',
                    },  
                    tabBarIcon: ProfileIcon
                }}
            />
            <Tab.Screen 
                name={TabRoutes.JOBS}
                component={JobBoard}
                options={{ headerTitle: '',  tabBarIcon: JobsIcon}}
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