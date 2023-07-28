import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextResources } from '../../../Common/GlobalDeclarations'
import MessageBubble from '../../../Components/messages/MessageBubble';
import { ScrollView } from 'react-native-gesture-handler';
import { Input } from '@ui-kitten/components';
import { GenStyle } from '../../../Common/GlobalStyles';
import { useChatThread } from '../../../Common/customHooks';

export default function ChatInteraction({ navigation, route }) {
  const [text, setText] = useState("");
  const threadID = route.params.thread_id;
  const chatHistory = useChatThread(threadID);
  
  return (
    <View style={styles.chatWrapper}>
      <ScrollView scrollEnabled={true} horizontal={false}>
        {chatHistory !== null && chatHistory !== undefined ? chatHistory?.map((chat) => <MessageBubble key={chat.message_id} sentDate={chat.createdAt} fromUser={route.params.accountID !== chat.user_id} text={chat.text}/>) : <Text>hiii</Text>}
      </ScrollView>

      <Input placeholder='Chat Message' style={[GenStyle.containerBottom, { width: '100%', bottom: 0, marginVertical: 10}]}value={text} onChangeText={(e: string) => setText(e)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  chatWrapper: {
    padding: 7,
    rowGap: 10,
    height: '100%',
    alignItems: 'center',
  }
})