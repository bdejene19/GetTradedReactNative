import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

const Drawer = createDrawerNavigator()
export default function ProfileDrawer() {
    const SettingDrawer = () => (
        <View>
            <Text>my drawer</Text>
        </View>
    )
  return (
    <NavigationContainer independent={true}> 
        <Drawer.Navigator>
            <Drawer.Screen
                name={"Settings"}
                component={SettingDrawer}
            />
        </Drawer.Navigator>
      <Text>ProfileDrawer</Text>
    </NavigationContainer>
  )
}