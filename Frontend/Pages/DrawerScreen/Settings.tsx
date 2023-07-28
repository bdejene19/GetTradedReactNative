import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Switch } from 'react-native-gesture-handler'
import { FontSize } from '../../Common/GlobalStyles';
import { toggleDark, toggleLarge } from "../../ReduxStore/slices/settings"
import { useAppDispatch, useAppSelector } from '../../ReduxStore/slices/hooks';
import { useIsLarge } from '../../Common/customHooks';
import { SwitchOption } from './helpers/types';


export default function Settings() {
    const { isDark, isLarge } = useAppSelector((state) => ({
      isDark: state.settingStore.isDark,
      isLarge: state.settingStore.isLarge
    }))

    const fontSize = useIsLarge()

    const dispatch = useAppDispatch(); 
    const SwitchOption = (props: SwitchOption) => {
        return (
            <View style={{ borderBottomWidth: 3, width: '100%', paddingVertical: 7, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                <Text style={[fontSize.regText, { width: '80%'}]}>{props.title}</Text>
                <Switch  value={props.isEnabled} onChange={props.onSwitchChange} />
            </View>
        )
    }
  return (
    <View style={{ rowGap: 30, paddingVertical: 15}}>
      <SwitchOption isEnabled={isDark} onSwitchChange={() => dispatch(toggleDark())} title='Dark Mode'/>
      <SwitchOption isEnabled={isLarge} onSwitchChange={() => dispatch(toggleLarge())} title='Large Font'/>
    </View>
  )
}