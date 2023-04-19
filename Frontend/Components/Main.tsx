import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from '../Pages/Profile';
import MessageBoard from '../Pages/MessageBoard';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDashboard, faHome, faMessage } from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();
const ProfileIcon = () => (
    <FontAwesomeIcon icon={faHome}/>
)
const MessageIcon = () => (
    <FontAwesomeIcon icon={faMessage}/>
)

const JobsIcon = () => (
    <FontAwesomeIcon icon={faDashboard}/>
)
export default function Main() {
  return (
    <NavigationContainer independent={true}>
        <Tab.Navigator>
            <Tab.Screen 
                name='Profile'
                component={Profile}
                
                options={{ headerShown: false, tabBarIcon: ProfileIcon}}
            />
            <Tab.Screen 
                name='Jobs'
                component={Profile}
                options={{ headerShown: false, tabBarIcon: JobsIcon}}
            />
            <Tab.Screen 
                name='Messages' 
                component={MessageBoard}
                options={{ headerShown: false, tabBarIcon: MessageIcon}}

            />
        </Tab.Navigator>
    </NavigationContainer>
  )
}