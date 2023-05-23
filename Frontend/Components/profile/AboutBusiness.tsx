import { View, Text, ViewStyle } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { GenStyle } from '../../Common/GlobalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextResources } from '../../Common/GlobalDeclarations';
import { useIsLarge } from '../../Common/customHooks';

interface AboutProps {
    content: string | null | undefined;
    containerStyle?: ViewStyle,
}
export default function AboutBusiness(props: AboutProps) {
    const fontSize = useIsLarge();

  return (  
      props.content ? 
            <View style={[GenStyle.fullWidth, styles.aboutContainer]}>
                 <View style={[{flexDirection: 'row'}]}>
                    <Text style={[fontSize.subHeader, {fontWeight: '700', width: '90%'}]}>About</Text>
                    <TouchableOpacity onPress={() => {}}>
                        <FontAwesomeIcon icon={faPencil} style={{width: '10%'}}/>
                    </TouchableOpacity>
                </View>
                <Text>{props.content}</Text>
            </View>
            :
            null
  )
}

const styles = StyleSheet.create({
    aboutContainer: {
        rowGap: 7,
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: '3%',
        marginTop: 30,
        minHeight: 250,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        backgroundColor: '#045ec2',
    }
})