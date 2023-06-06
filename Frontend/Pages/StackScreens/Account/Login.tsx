import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button, Input } from '@ui-kitten/components'
import { GenStyle, LightMode } from '../../../Common/GlobalStyles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { TextResources } from '../../../Common/GlobalDeclarations'

interface LoginForm {
  email: string;
  password: string;
}
export const Login = ({ navigation }) => {
  const [isSecure, setSecure] = useState(true);
  const [login, setLogin] = useState<LoginForm>({
    email: "",
    password: "",
    
  })
  const handleLogin = async () => {
    if (login.email.length !== 0 && login.password.length !== 0) {
      fetch(`${TextResources.API_ROUTES.HOST}/${TextResources.API_ROUTES.LOGIN}`, {
        method: "POST",
        body: JSON.stringify(login),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => {
        if (res.status === 200) {
          return res.json()
        }

        return res
      }).then(res => {
        navigation.navigate('Main', res)
      }).catch(err => console.log('error'));
    }
  
  }
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
        
      />
      <Input 
        label='Password' 
        secureTextEntry={isSecure} 
        placeholder='GetTraded123' 
        onChangeText={(text: string) => setLogin({ ...login, password: text })}
        value={login.password}     
        autoCapitalize={"none"}
        accessoryRight={() => <RenderInputSecure secure={isSecure} onChange={() => setSecure(!isSecure)}/>}
      />

        {/* <CommonTextInput label='Email' placeholder='jdoe@gmail.com' onChange={() => {}} />
        <CommonTextInput label='Password' secureEntry={true} placeholder='GetTraded123' onChange={() => {}} /> */}
        <Button appearance={'filled'} style={GenStyle.fullWidth} onPress={handleLogin}>Login</Button>
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