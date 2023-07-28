import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button, Input } from '@ui-kitten/components'
import { GenStyle, LightMode } from '../../../Common/GlobalStyles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { TextResources } from '../../../Common/GlobalDeclarations'
import QuickSignIn from '../../../Components/signIn/QuickSignIn'
import { handleform } from './helpers/methods'
import { LoginForm } from './helpers/types'


export const Login = ({ navigation }) => {
  const [isSecure, setSecure] = useState(true);
  const [login, setLogin] = useState<LoginForm>({
    email: "",
    password: "",
    
  })
 
  const RenderInputSecure = (props: { secure?: boolean, onChange?: () => void}) => {
    return (
        <TouchableWithoutFeedback onPress={props?.onChange}>
            <FontAwesomeIcon icon={props.secure ? faEye : faEyeSlash}/>
        </TouchableWithoutFeedback>
    )
}
  return (
    <View style={{...LightMode.screenPadding, rowGap: 20}}>
      <Input
        label='Email' 
        placeholder='jdoe@gmail.com' 
        onChangeText={(text: string) => setLogin({ ...login, email: text })}
        value={login.email}
        testID={'username'}
        
      />
      <Input 
        label='Password' 
        secureTextEntry={isSecure} 
        placeholder='GetTraded123' 
        onChangeText={(text: string) => setLogin({ ...login, password: text })}
        value={login.password}     
        autoCapitalize={"none"}
        testID={"loginPswd"}
        accessoryRight={() => <RenderInputSecure secure={isSecure} onChange={() => setSecure(!isSecure)}/>}
      />

        {/* <CommonTextInput label='Email' placeholder='jdoe@gmail.com' onChange={() => {}} />
        <CommonTextInput label='Password' secureEntry={true} placeholder='GetTraded123' onChange={() => {}} /> */}
        <Button appearance={'filled'} testID={"loginBtn"} style={GenStyle.fullWidth} onPress={() => handleform(login, navigation)}>Login</Button>
        <Button appearance={'outline'} testID={"registerBtn"} style={GenStyle.fullWidth} onPress={() => navigation.navigate("Create Account")}>Create Account</Button>
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