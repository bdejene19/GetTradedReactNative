import { View, Text } from 'react-native'
import React, { useState } from 'react'

import { Button } from '@ui-kitten/components'
import { ScrollView } from 'react-native-gesture-handler'
import { Locator } from '../../Common/Locator'
import { TextResources } from '../../Common/GlobalDeclarations'
import ImageUploader from '../../Components/ImageUploader'
import { GenStyle } from '../../Common/GlobalStyles'


export default function WorkLocations() {
  const [locations, setLocations] = useState<string[]>([])
  return (
    <View style={{rowGap: 40, height: '100%'}}>
        <Locator label={TextResources.CreateAccountText.locations} location={''}/>
        <Text>Upload Images of your Work!</Text>
        <View style={{rowGap: 40, flexDirection: 'row', flexWrap: 'wrap', columnGap: 25, justifyContent:'space-evenly' }}>
          <ImageUploader label=''/>
          <ImageUploader label=''/>
          <ImageUploader label=''/>
          <ImageUploader label=''/>
          <ImageUploader label=''/>
          <ImageUploader label=''/>

        </View>
        <View style={[GenStyle.fullWidth, GenStyle.containerBottom, { rowGap: 15}]}>
          <Button>Finish</Button>
          <Button appearance={'outline'}>Skip</Button>
        </View>
       
    </View>
  
  )
}