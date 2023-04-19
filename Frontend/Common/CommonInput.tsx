import {View, Text, TextInput, StyleSheet} from 'react-native'

interface TextProps {
    onChange: (e: any) => any;
    label?: string;
    secureEntry?: boolean;
    placeholder: string;

}
export const CommonTextInput = (props: TextProps) => {
    return (
        <View style={styles.inputContainer}>
            {props.label ? <Text style={styles.formLabelText}>{props?.label}</Text> : null}
            <TextInput secureTextEntry={props.secureEntry ? props.secureEntry : false} style={styles.inputBox} placeholder={props.placeholder} onChange={props.onChange}/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        rowGap: 10,
        width: '100%'
    },
    formLabelText: {
        color: 'black',
        fontSize: 24,
    },

    inputBox: {
        borderColor: 'grey',
        borderStyle: 'solid',
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
        fontSize: 18,
    }
})