import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { CommonTextInput } from '../../Common/CommonInput'
import { Button, Icon, Input, Layout } from '@ui-kitten/components'
import { GenStyle } from '../../Common/GlobalStyles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { TextResources } from '../../Common/GlobalDeclarations'
import MultiBubbleSelect from '../../Components/MultiBubbleSelect'

interface Password {
    pswd: string | boolean;
    repeat: string | boolean;
}

interface NewAccountProps extends Password {
    businessName: string;
    email: string;
    contractorTypes: string[];
}
const contractorCategories = ['Electrician', 'Carpenter', 'Painter', 'Plumber', 'Service Worker', 'Mechanic', 'LandScaping']

export const CreateAccount = ({ navigation }) => {
    const [newAccount, setNewAccount] = useState<NewAccountProps>({
        businessName: "",
        email: "",
        contractorTypes: [],
        pswd: "",
        repeat: "",
    })
    const [secureText, setSecureText] = useState({ pswd: true, repeat: true});

    const verifyGoNext = () => {
        if (newAccount.businessName == "" || newAccount.email == "" || newAccount.pswd === "" || newAccount.repeat == "" || newAccount.contractorTypes == []) {
            return true
        } else {
            return false
        }
    }
    const updateSecureText = () => {
        return;
    }
    const RenderInputSecure = (props: { secure?: boolean, onChange?: () => void}) => {
        return (
            <TouchableWithoutFeedback onPress={props.onChange ? props.onChange : updateSecureText}>
                <FontAwesomeIcon icon={props.secure ? faEye : faEyeSlash}/>
            </TouchableWithoutFeedback>
        )
    }
    return (
        <View style={[GenStyle.fullHeight, {rowGap: 30}]}>
            <CommonTextInput
                placeholder="Bemnet Dejene"
                label={TextResources.FormStrings.BUSINESS}
                onChange={(e: string) => setNewAccount({ ...newAccount, businessName: e })}
            /> 

            <View style={styles.mainContent}>
                <Input
                    placeholder={TextResources.FormStrings.EMAIL}
                    label={TextResources.FormStrings.EMAIL}
                    value={newAccount.email}
                    onChangeText={text => setNewAccount({...newAccount, email: text})}
                />
                <Input 
                    placeholder={TextResources.FormStrings.PASSWORD}
                    label={TextResources.FormStrings.PASSWORD}
                    value={newAccount.pswd as string}
                    onChangeText={(text: string) => setNewAccount({ ...newAccount, pswd: text})}
                    secureTextEntry={secureText.pswd}
                    accessoryRight={<RenderInputSecure secure={secureText.pswd} onChange={() => setSecureText({...secureText, pswd: !secureText.pswd})}/>}
                />
                
                <Input 
                    placeholder={TextResources.FormStrings.PASSWORD}
                    label={TextResources.FormStrings.REPEAT_PASS}
                    value={newAccount.repeat as string}
                    onChangeText={(text: string) => setNewAccount({ ...newAccount, repeat: text})}
                    secureTextEntry={secureText.repeat}
                    accessoryRight={<RenderInputSecure secure={secureText.repeat} onChange={() => setSecureText({...secureText, repeat: !secureText.repeat })}/>}
                />
            </View>
            <MultiBubbleSelect label={TextResources.CreateAccountText.typeSelection} key={'Contractor-Types'} selectLimit={3} bubbles={contractorCategories} style={{rowGap: 15}}/>
            <Button style={[GenStyle.containerBottom, GenStyle.fullWidth]} disabled={verifyGoNext()} onPress={() => navigation.navigate('Work Locations')}>Next</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContent: {
        borderColor: 'lightgrey',
        backgroundColor: 'lightgrey',
        paddingVertical: 10,
        rowGap: 25,
        paddingHorizontal: 3,
        borderWidth: 3,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 5, height: 5  },
        width: '100%',

    },
    pswdInput: {
        flex: 1,
        margin: 2,
    }
})