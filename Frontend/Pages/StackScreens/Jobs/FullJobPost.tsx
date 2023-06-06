import { View, Text } from 'react-native'
import React from 'react'
import { GenStyle } from '../../../Common/GlobalStyles'
import { ScrollView } from 'react-native-gesture-handler'
import { BackendTypes } from '../../../Common/GlobalDeclarations'


export default function FullJobPost(props: BackendTypes.JobPost) {
  return (
    <ScrollView style={[GenStyle.fullHeight, GenStyle.fullWidth]}>
      <Text>FullJobPost</Text>
    </ScrollView>
  )
}