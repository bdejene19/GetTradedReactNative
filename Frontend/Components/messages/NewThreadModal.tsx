import { View, Text, Modal } from 'react-native'
import React from 'react'

interface NewMsgProps {
    modalVisible: boolean;
    setModal: (modalOpen: boolean) => void;
}
export default function NewThreadModal(props: NewMsgProps) {
  return (
    <Modal presentationStyle='pageSheet' statusBarTranslucent={false} visible={props.modalVisible} onRequestClose={() => props.setModal(false)} animationType='slide'>
      <Text>NewThreadModal</Text>
    </Modal>
  )
}