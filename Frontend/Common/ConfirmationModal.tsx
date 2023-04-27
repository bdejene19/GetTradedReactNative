import { View, Text, ViewStyle, Modal } from 'react-native'
import React from 'react'
import { Button } from '@ui-kitten/components';
import { FontSize } from './GlobalStyles';
import { TextResources } from './GlobalDeclarations';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface ConfirmationProps {
    modalStyle?: ViewStyle;
    confirmTitle: string;
    confirmBtnTitle?: string;
    rejectBtnTitle?: string;
    confirmExplain?: string;

    confirmBtnStyle?: ViewStyle;
    rejectBtnStyle?: ViewStyle;

    confirmHandler: () => void,
    rejectHandler: () => void,

}
export default function ConfirmationModal(props: ConfirmationProps) {
  return (
    <Modal  style={props.modalStyle}>
      <Text style={[FontSize.subHeader, { fontWeight: '600'}]}>{props.confirmTitle}</Text>
      {props.confirmExplain ? <Text>{props.confirmExplain}</Text> : null}

      <TouchableOpacity>
        <Button appearance={'filled'} style={props.confirmBtnStyle}>{props.confirmBtnTitle ? props.confirmBtnTitle : TextResources.ButtonStrings.CONFIRM}</Button>
      </TouchableOpacity>

      <TouchableOpacity>
        <Button appearance={'outline'} style={props.rejectBtnStyle }>{props.rejectBtnTitle ? props.rejectBtnTitle : TextResources.ButtonStrings.CANCEL}</Button>
      </TouchableOpacity>
    </Modal>
  )
}