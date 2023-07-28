import { View, Text,StyleSheet, ImageBackground} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsLarge } from '../../Common/customHooks';
import { useNavigation } from '@react-navigation/native';
import { JobsBoardParamList, JobsStackRoutes, StackRootParamList } from '../../Pages/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface JobPreviewProps {
    jobPost_id: number;
    jobName: string;
    jobLocation: string;
    jobType: string;
    posterName: string;
    jobImg: string;
}
export default function JobPreview(props: JobPreviewProps) {
    const fontSize = useIsLarge();
    const jobStackNavigator = useNavigation<NativeStackNavigationProp<JobsBoardParamList>>()
  return (
    <TouchableOpacity style={styles.previewContainer} onPress={() => jobStackNavigator.navigate(JobsStackRoutes.FULL_JOB_DESCRIPTION, {
        job: props,

    })}>
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
        shadowOffset: { width: 3, height: 3},
        shadowColor: 'black',
        marginBottom: '5%',
        shadowOpacity: 1,
    },

    textContent: {
        padding: '1.5%', 
        rowGap: 5,
        backgroundColor: 'white',
    },
    previewSubContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: 10
    }
})