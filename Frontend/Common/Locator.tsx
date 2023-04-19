import { View, Text, TextInput, TextInputChangeEventData, NativeSyntheticEvent } from 'react-native'
import React, { useState } from 'react'
import { CommonTextInput } from './CommonInput';

interface LocationProps {
    label: string;
    placeholder?: string;
    location: string;
}
export const Locator = (props: LocationProps) => {
    const [location, setLocation] = useState("");

    const findLocation = (e) => {
      setLocation(e.target.value)
    }
  return (
    <View>
        <CommonTextInput label={props.label} placeholder={props.placeholder ? props.placeholder : ""} onChange={() => setLocation("")}/>
    </View>
  )
}