import React, { useState } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import {  ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Button, Input } from '@ui-kitten/components'
import { FontSize, GenStyle } from '../../../Common/GlobalStyles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { TextResources } from '../../../Common/GlobalDeclarations'
import MultiBubbleSelect from '../../../Components/MultiBubbleSelect'
import { TextStyle } from 'react-native'

interface Password {
    pswd: string | boolean;
    repeat: string | boolean;
}

interface NewAccountProps extends Password {
    businessName: string;
    about: string;
    email: string;
    phone: string;
    contractorTypes: string[];
}
const contractorCategories = ['Electrician', 'Carpenter', 'Painter', 'Plumber', 'Service Worker', 'Mechanic', 'LandScaping']

export const CreateAccount = ({ navigation }) => {
    const [newAccount, setNewAccount] = useState<NewAccountProps>({
        businessName: "",
        about: "",
        email: "",
        phone: "",
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
            <TouchableWithoutFeedback onPress={props?.onChange ? props?.onChange : updateSecureText}>
                <FontAwesomeIcon icon={props.secure ? faEye : faEyeSlash}/>
            </TouchableWithoutFeedback>
        )
    }

    const renderInputLabel = (labelName: string) => {
        const labelStyle: TextStyle = {
            paddingBottom: 3.5,
            fontWeight: '700',
            fontSize: FontSize.regText.fontSize,

        }
        return (
            <Text style={labelStyle}>{labelName}</Text>
        )
    }
    return (
        <ScrollView contentContainerStyle={{rowGap: 30}} style={[GenStyle.fullHeight, {rowGap: 30, backgroundColor: '#647ca9'}]}>
            <Input
                placeholder="Bemnet Dejene"
                label={() => renderInputLabel(TextResources.FormStrings.BUSINESS)}
                value={newAccount.businessName}
                onChangeText={(e: string) => setNewAccount({ ...newAccount, businessName: e })}
            /> 
            <Input
                placeholder={TextResources.FormStrings.PHONE}
                label={() => renderInputLabel(TextResources.FormStrings.PHONE)}
                value={newAccount.phone}
                textContentType={"telephoneNumber"}
                onChangeText={text => setNewAccount({...newAccount, phone: text})}
            />
            <View style={styles.mainContent}>
                <Input
                    placeholder={TextResources.FormStrings.EMAIL}
                    label={() => renderInputLabel(TextResources.FormStrings.EMAIL)}
                    value={newAccount.email}
                    textContentType={"emailAddress"}
                    onChangeText={text => setNewAccount({...newAccount, email: text})}
                />
                <Input 
                    placeholder={TextResources.FormStrings.PASSWORD}
                    label={() => renderInputLabel(TextResources.FormStrings.PASSWORD)}
                    value={newAccount.pswd as string}
                    onChangeText={(text: string) => setNewAccount({ ...newAccount, pswd: text})}
                    secureTextEntry={secureText.pswd}
                    textContentType={"password"}
                    accessoryRight={<RenderInputSecure secure={secureText.pswd} onChange={() => setSecureText({...secureText, pswd: !secureText.pswd})}/>}
                />
                
                <Input 
                    placeholder={TextResources.FormStrings.PASSWORD}
                    label={() => renderInputLabel(TextResources.FormStrings.REPEAT_PASS)}
                    value={newAccount.repeat as string}
                    onChangeText={(text: string) => setNewAccount({ ...newAccount, repeat: text})}
                    secureTextEntry={secureText.repeat}
                    textContentType={"password"}

                    accessoryRight={<RenderInputSecure secure={secureText.repeat} onChange={() => setSecureText({...secureText, repeat: !secureText.repeat })}/>}
                />
            </View>
            <Input 
                style={[styles.aboutInput]}
                placeholder={"'Your Company' provides superior service in..."}
                label={() => renderInputLabel('Tell us about your business')}
                value={newAccount.about}
                multiline={true}
                textStyle={{height: 150}}
                onChangeText={(text: string) => setNewAccount({...newAccount, about: text})}
            />
            <MultiBubbleSelect label={TextResources.CreateAccountText.typeSelection} key={'Contractor-Types'} selectLimit={3} bubbles={contractorCategories} style={{rowGap: 15}}/>
            <Button style={[GenStyle.fullWidth]} disabled={verifyGoNext()} onPress={() => navigation.navigate('Work Locations', {
                promise: () => new Promise((resolve, reject) => {
                    return resolve(newAccount);
                })
            })}>Next</Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContent: {
        borderColor: 'snow',
        backgroundColor: 'snow',
        paddingVertical: 10,
        rowGap: 25,
        paddingHorizontal: 3,
        borderWidth: 3,
        borderRadius: 7,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 5, height: 5  },
        width: '100%',

    },
    pswdInput: {
        flex: 1,
        margin: 2,
    },
    aboutInput: {
        width: '100%',
    }
})