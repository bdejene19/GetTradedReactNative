import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Drawer = createNativeStackNavigator()
export default function ProfileDrawer(props: { drawerOpen: boolean }, { navigation, route}) {
    useEffect(() => {
        if (props.drawerOpen) {

        }
    }, [props.drawerOpen])
    const SettingDrawer = () => (
        <View>
            <Text>my drawer</Text>
        </View>
    )
  return (
    <NavigationContainer independent={true}> 
        <Drawer.Navigator>
            <Drawer.Screen
                name={"Main Drawer"}
                component={SettingDrawer}
            />
        </Drawer.Navigator>
      </NavigationContainer>
  )
}