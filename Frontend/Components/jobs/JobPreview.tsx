import { View, Text,StyleSheet, ImageBackground} from 'react-native'
import React from 'react'
import { FontSize } from '../../Common/GlobalStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsLarge } from '../../Common/customHooks';

interface JobPreviewProps {
    jobName: string;
    jobLocation: string;
    jobType: string;
    posterName: string;
    jobImg: string;
}
export default function JobPreview(props: JobPreviewProps) {
    const fontSize = useIsLarge();
  return (
    <TouchableOpacity style={styles.previewContainer} onPress={() => {}}>
        <View style={styles.textContent}>
            <Text style={[fontSize.subHeader]}>{props.jobName}</Text>
            <View style={styles.previewSubContainer}>
                <Text style={[fontSize.regText]}>{props.jobType} |</Text>
                <Text style={[fontSize.regText]}>{props.jobLocation} |</Text>
                <Text style={[fontSize.regText]}>{props.posterName}</Text>
            </View>
        </View>
        <ImageBackground resizeMode='stretch' alt="job preview image" source={{uri: props.jobImg}} style={{height: 160}}/>
        
    </TouchableOpacity>
      
  )
}

const styles = StyleSheet.create({
    previewContainer: {
        width: '100%',
        // minHeight: 125,
        // maxHeight: 275,
        marginVertical: 5,
        backgroundColor: 'green',
    },

    textContent: {
        padding: '1.5%', 
        rowGap: 5,
    },
    previewSubContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: 10
    }
})