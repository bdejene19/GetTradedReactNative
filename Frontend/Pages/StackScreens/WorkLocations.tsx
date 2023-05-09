import { View, Text } from 'react-native'
import React, { useState } from 'react'

import { Button } from '@ui-kitten/components'
import { ScrollView } from 'react-native-gesture-handler'
import { Locator } from '../../Common/Locator'
import { TextResources } from '../../Common/GlobalDeclarations'
import ImageUploader from '../../Components/ImageUploader'
import { FontSize, GenStyle } from '../../Common/GlobalStyles'


export default function WorkLocations() {
  const [locations, setLocations] = useState<string[]>([])
  return (
    <ScrollView style={{rowGap: 40, height: '100%'}}>
        {/* <Locator label={TextResources.CreateAccountText.locations} location={''}/> */}
        <Text style={FontSize.pageHeader}>Upload Images of your Work!</Text>
        <View style={{rowGap: 40, paddingTop: 30, flexDirection: 'row', flexWrap: 'wrap', columnGap: 12, justifyContent:'space-evenly' }}>
          <ImageUploader/>
          <ImageUploader/>
          <ImageUploader/>
          <ImageUploader/>
          <ImageUploader/>
          <ImageUploader/>

        </View>
        <View style={[GenStyle.fullWidth, { marginVertical: 50, rowGap: 15}]}>
          <Button>Finish</Button>
          <Button appearance={'outline'}>Skip</Button>
        </View>
       
    </ScrollView>
  
  )
}