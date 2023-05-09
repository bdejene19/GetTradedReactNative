import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Switch } from 'react-native-gesture-handler'
import { FontSize } from '../../Common/GlobalStyles';

interface SwitchOption {
    title: string;
    isEnabled: boolean;
    onSwitchChange: () => void;
}
export default function Settings() {
    const [settings, setSettings] = useState({ isDark: false, isLarge: false});

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
      <SwitchOption isEnabled={settings.isDark} onSwitchChange={() => setSettings({ ...settings, isDark: !settings.isDark})} title='Dark Mode'/>
      <SwitchOption isEnabled={settings.isLarge} onSwitchChange={() => setSettings({ ...settings, isLarge: !settings.isLarge})} title='Large Font'/>
    </View>
  )
}