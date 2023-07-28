import { View, Text } from 'react-native'
import React from 'react'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
export default function QuickSignIn() {
    GoogleSignin.configure()
  return (
    <View>
        <GoogleSigninButton 
         onPress={() => console.log('pressed')}
         disabled={true}

        />
    </View>
  )
}