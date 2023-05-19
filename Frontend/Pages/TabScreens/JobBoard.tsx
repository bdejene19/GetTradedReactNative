import { View, ViewStyle } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import JobCard from '../../Components/jobs/JobCard'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import ContractorTypeJobsBoard from '../StackScreens/ContractorTypeJobsBoard'
import { JobsBoardParamList, JobsStackRoutes } from '../types'
import { TextResources } from '../../Common/GlobalDeclarations'

const cardStyle: ViewStyle = {
    borderRadius: 15,
    backgroundColor: 'white',
    height: '30%',
    width: 170,
    flexGrow: 1,
    overflow: 'hidden'
}

const Jobs = ({ navigation }) => {
  return (
    <View style={styles.cardContainer}>
        <JobCard header={TextResources.ContractorTypes.CARPENTER} 
          bgImage='https://www.bls.gov/ooh/images/2880.jpg' 
          cardStyle={cardStyle} 
          onPress={() => navigation.navigate('Specific Job Board', {
              jobType: TextResources.ContractorTypes.CARPENTER,
          })}
        />
        <JobCard 
          header={TextResources.ContractorTypes.LANDSCAPER} 
          cardStyle={cardStyle}
          bgImage='https://tritonlandscaping.ca/wp-content/uploads/2021/05/landscaping-bush-trimming.jpg' 
          onPress={() => navigation.navigate('Specific Job Board', {
            jobType: TextResources.ContractorTypes.LANDSCAPER,
          })}
        />
        <JobCard 
          header={TextResources.ContractorTypes.PLUMBER}
          bgImage='https://4495544.fs1.hubspotusercontent-na1.net/hub/4495544/hubfs/Blog%20Images/plumbing%20work.jpeg?width=810&name=plumbing%20work.jpeg' 
          cardStyle={cardStyle} 
          onPress={() => navigation.navigate('Specific Job Board', {
            jobType: TextResources.ContractorTypes.PLUMBER,
          })}        
        />
        <JobCard 
          bgImage='https://hiring-assets.careerbuilder.com/media/attachments/careerbuilder-original-3580.jpg?1511294086'
          header={TextResources.ContractorTypes.ELECTRICIAN}
          cardStyle={cardStyle} 
          onPress={() => navigation.navigate('Specific Job Board', {
            jobType: TextResources.ContractorTypes.ELECTRICIAN,
          })}
        />
        {/* <JobCard
        bgImage='https://p1.hiclipart.com/preview/292/718/446/green-grass-background-garden-gardening-gardener-lawn-landscaping-pruning-open-space-reserve-png-clipart.jpg' 
        header='Service Worker' cardStyle={cardStyle} onPress={() => null}
        /> */}
       
    </View>
  )
}
const JobsStack = createNativeStackNavigator<JobsBoardParamList>();
export default function JobBoard({ navigation, route }) {
  return (
    <NavigationContainer independent={true}>
      <JobsStack.Navigator>
        <JobsStack.Screen 
          name={JobsStackRoutes.JOBS_BOARD}
          component={Jobs}
          options={({navigation, route }) => ({
            headerBackTitleVisible: false,
            contentStyle: {
              backgroundColor: '#FFE19C'
            },
            headerStyle: {
              backgroundColor: '#F47742',
            }
          })}
        />
        <JobsStack.Screen
          name={JobsStackRoutes.SPECIFIC_JOB_BOARD}
          component={ContractorTypeJobsBoard}
          options={({ navigation, route}) => {
            // const { jobType } = route.params
            const { jobType } = route.params
            return {
              headerTitle: `${jobType} Jobs`
            }
          }}
        />
      </JobsStack.Navigator>
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        flexWrap: "wrap",
        width: '100%',
        height: '100%',
        columnGap: 25,
        rowGap: 25,
        justifyContent: 'center',
        alignContent: 'center',
    }
})