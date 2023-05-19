import { View, Text,StyleSheet, ImageBackground} from 'react-native'
import React from 'react'
import { FontSize } from '../../Common/GlobalStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface JobPreviewProps {
    jobName: string;
    jobLocation: string;
    jobType: string;
    posterName: string;
    jobImg: string;
}
export default function JobPreview(props: JobPreviewProps) {
  return (
    <TouchableOpacity style={styles.previewContainer} onPress={() => {}}>
        <View style={styles.textContent}>
            <Text style={[FontSize.subHeader]}>{props.jobName}</Text>
            <View style={styles.previewSubContainer}>
                <Text>{props.jobType} |</Text>
                <Text>{props.jobLocation} |</Text>
                <Text>{props.posterName}</Text>
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
        columnGap: 10
    }
})