import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Switch } from 'react-native-gesture-handler'
import { FontSize } from '../../Common/GlobalStyles';
import { toggleDark, toggleLarge } from "../../ReduxStore/slices/SettingSlice"
import { useAppDispatch, useAppSelector } from '../../ReduxStore/slices/hooks';

interface SwitchOption {
    title: string;
    isEnabled: boolean;
    onSwitchChange: () => void;
}
export default function Settings() {
    const [settings, setSettings] = useState({ isDark: false, isLarge: false});
    const { isDark, isLarge } = useAppSelector((state) => ({
      isDark: state.settings.isDark,
      isLarge: state.settings.isLarge
    }))

    const dispatch = useAppDispatch(); 
    const SwitchOption = (props: SwitchOption) => {
        return (
            <View style={{ borderBottomWidth: 3, width: '100%', paddingVertical: 7, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                <Text style={[FontSize.regText, { width: '80%'}]}>{props.title}</Text>
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