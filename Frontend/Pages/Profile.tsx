import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import ProfileContact from '../Components/ProfileContact'

export default function Profile() {

  return (
    <View>
        <ProfileContact businessName='Bemnet Dejene' email='' phone='' profilePicture='https://snack-web-player.s3.us-west-1.amazonaws.com/v2/47/static/media/react-native-logo.79778b9e.png' ></ProfileContact>
    </View>
  )
}