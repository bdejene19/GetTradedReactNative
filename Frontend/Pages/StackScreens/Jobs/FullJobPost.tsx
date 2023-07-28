import { View, Text, Image, StyleSheet, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { GenStyle } from '../../../Common/GlobalStyles'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { BackendTypes, TextResources } from '../../../Common/GlobalDeclarations'
import { Button } from '@ui-kitten/components'
import  '../../../Common/customHooks'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import  { faChainBroken, faPaintRoller, faPlug, faTree, faWrench } from '@fortawesome/free-solid-svg-icons'
import { useIsLarge } from '../../../Common/customHooks'
import { JobsStackRoutes } from '../../types'


export default function FullJobPost({ navigation, route }) {
  const fontSize = useIsLarge();
  console.log(route.params)
  const slideAnim = useRef(new Animated.Value(0)).current;
  const [isOpen, setOpen] = useState(false);
  const toggleModal = () => {
    if (isOpen) {
      Animated.timing(slideAnim, {
        duration: 750,
        toValue: -300,
        useNativeDriver: true,
      }).start()
    } else {
      Animated.timing(slideAnim, {
        duration: 750,
        toValue: 0,
        useNativeDriver: true,
      }).start()
    }
  }
useEffect(() => {
  toggleModal();
}, [isOpen])
  
  const renderJobTypeIcon = (jobType: string, {navigation}) => {
    let icon = null;
    if (jobType === TextResources.ContractorTypes.CARPENTER) {
      icon = <FontAwesomeIcon icon={faChainBroken}/> 
    }
    if (jobType === TextResources.ContractorTypes.LANDSCAPER) {
      icon = <FontAwesomeIcon icon={faTree}/>
    }

    if (jobType === TextResources.ContractorTypes.PLUMBER) {
      icon = <FontAwesomeIcon icon={faWrench}/>
      
    }

    if (jobType === TextResources.ContractorTypes.PAINTER) {
      icon = <FontAwesomeIcon icon={faPaintRoller}/>
      
    }

      return <TouchableOpacity onPress={() => navigation.navigate(JobsStackRoutes.SPECIFIC_JOB_BOARD, {
        jobType: jobType,
      })}>
        {icon}
      </TouchableOpacity>
  
  }
  return (
      <ScrollView style={[GenStyle.fullHeight, GenStyle.fullWidth]} contentContainerStyle={[GenStyle.fullHeight, GenStyle.fullWidth, {justifyContent: 'center', alignItems: 'center',}]}>
        <View style={[styles.captionContent]}>
          <Text style={[fontSize.pageHeader]}>{ route.params.job.jobName}</Text>

          <View style={[styles.flexRowContainer]}>
            {renderJobTypeIcon(route.params.job.jobType, {navigation})} 
            <Text> |</Text>
            <TouchableOpacity onPress={() => navigation.navigate("")}>
              <Text style={[fontSize.regText]}>{route.params.job.jobLocation}</Text>
            </TouchableOpacity>
            <Text> |</Text>
            <TouchableOpacity onPress={() => navigation.navigate("")}>
              <Text style={[fontSize.regText]}>{route.params.job.posterName} |</Text>
            </TouchableOpacity> 
          </View>
        </View>
     
        { route.params.job.jobImg ?  <Image source={{uri: route.params.job.jobImg}} alt="Support photo for job post" style={{width: 300, height: 300}}/> : null}
        <View style={[styles.captionContent]}>
        <Text>{route.params.job.jobName}</Text>
        </View>
        <Button style={{ marginHorizontal: '1.5%', marginVertical: '10%',}} appearance={'outline'} onPress={() => setOpen(!isOpen)}>Contact Poster</Button>
        <Animated.View style={[styles.customModal, { transform: [{translateY: slideAnim, }]}]}>

        </Animated.View>
      </ScrollView>
    
  
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center" ,
    rowGap: 15,
  },

  flexRowContainer: {
    flexDirection: 'row',
    columnGap: 10
  },
  captionContent: {
    margin: '1.5%',
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 7,
    padding: 15,
    rowGap: 7,
  }, 
  customModal: {
    height: '35%',
    width: '80%',
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 0,
    
  }
})