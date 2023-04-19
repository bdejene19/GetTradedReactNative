import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { CommonTextInput } from '../Common/CommonInput'
import { Button, Icon } from '@ui-kitten/components'
import { GenStyle, LightMode } from '../Common/GlobalStyles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export const Login = ({navigation}) => {
  return (
    <View style={{...LightMode.screenPadding, rowGap: 20}}>
        <CommonTextInput label='Email' placeholder='jdoe@gmail.com' onChange={() => {}} />
        <CommonTextInput label='Password' secureEntry={true} placeholder='GetTraded123' onChange={() => {}} />
        <Button appearance={'filled'} style={GenStyle.fullWidth} onPress={() => navigation.navigate("Main")}>Login</Button>
        <Button appearance={'outline'} style={GenStyle.fullWidth} onPress={() => navigation.navigate("Create Account")}>Create Account</Button>
        <View style={styles.horizontalRule}/>
    </View>
  )
}

const styles = StyleSheet.create({
    horizontalRule: {
        borderBottomColor: 'black',
        borderBottomWidth: 5,
        width: '80%',
    },
    containerBottom: {
      position: 'absolute',
      bottom: 15,
    }
})