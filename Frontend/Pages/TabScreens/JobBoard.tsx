import { View, ViewStyle } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import JobCard from '../../Components/JobCard'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

const cardStyle: ViewStyle = {
    borderRadius: 15,
    backgroundColor: 'white',
    height: '30%',
    width: 170,
    flexGrow: 1,
    overflow: 'hidden'
}

const Jobs = () => {
  return (
    <View style={styles.cardContainer}>
        <JobCard header='Carpenter' 
          bgImage='https://www.bls.gov/ooh/images/2880.jpg' 
          cardStyle={cardStyle} 
          onPress={() => null}
        />
        <JobCard 
          header='Landscaper' 
          cardStyle={cardStyle}
          bgImage='https://tritonlandscaping.ca/wp-content/uploads/2021/05/landscaping-bush-trimming.jpg' 
          onPress={() => null}/>
        <JobCard 
          header='Plumber' 
          bgImage='https://4495544.fs1.hubspotusercontent-na1.net/hub/4495544/hubfs/Blog%20Images/plumbing%20work.jpeg?width=810&name=plumbing%20work.jpeg' 
          cardStyle={cardStyle} 
          onPress={() => null}
        />
        <JobCard 
          bgImage='https://hiring-assets.careerbuilder.com/media/attachments/careerbuilder-original-3580.jpg?1511294086'
          header='Electrician' 
          cardStyle={cardStyle} 
          onPress={() => null}
        />
        {/* <JobCard
        bgImage='https://p1.hiclipart.com/preview/292/718/446/green-grass-background-garden-gardening-gardener-lawn-landscaping-pruning-open-space-reserve-png-clipart.jpg' 
        header='Service Worker' cardStyle={cardStyle} onPress={() => null}
        /> */}
       
    </View>
  )
}
const JobsStack = createNativeStackNavigator();
export default function JobBoard({ navigation, route }) {
  return (
    <NavigationContainer independent={true}>
      <JobsStack.Navigator>
        <JobsStack.Screen 
          name='Jobs Board'
          component={Jobs}
          options={({navigation, route }) => ({
            contentStyle: {
              backgroundColor: '#FFE19C'
            },
            headerStyle: {
              backgroundColor: '#F47742',
            }
          })}
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
        rowGap: 75,
        justifyContent: 'center',
        alignContent: 'center',
    }
})