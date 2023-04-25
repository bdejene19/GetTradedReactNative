import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Input } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPencilSquare, faPenToSquare, faSearch } from '@fortawesome/free-solid-svg-icons'
import MessageThread from '../../Components/MessageThread'
import { TextResources } from '../../Common/GlobalDeclarations'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackMsgRoutes, StackMsgParamList } from '../types'
import ChatInteraction from '../StackScreens/ChatInteraction'

const MessageStackNavigator = createNativeStackNavigator<StackMsgParamList>();
export default function MessageBoard({ navigation, route }) {
    const [query, setQuery] = useState("")
    const SearchIcon = () => (
        <FontAwesomeIcon  icon={faSearch}/>
    )
    const WriteIcon = () => (
        <TouchableOpacity>
            <FontAwesomeIcon icon={faPenToSquare}  size={24}/>
        </TouchableOpacity>
    )
    
    const MessagePage =() => {
        return (
            <View style={{alignItems: 'center', height: '100%', width: '100%', backgroundColor: '#FFE19C', paddingVertical: '2.5%',}}>
                <TouchableWithoutFeedback style={{width: '97.5%'}}>
                    <Input 
                    style={{width: '97.5%'}}
                        placeholder={TextResources.FormStrings.SEARCH} 
                        accessoryRight={<SearchIcon/>}
                        value={query}
                        onChangeText={(text: string) => setQuery(text)}
                    />
                </TouchableWithoutFeedback>
                <MessageThread onPress={() => navigation.navigate('Chat')} from='Bemnet Dejene' fromIcon='https://www.procore.com/dam/jcr:b9a8db20-d3a8-4122-b2e6-4374e0baeea5/homepage_persona_owner.png' latestMessage='yo whats good' latestMessageDate={new Date()}/>
            </View>
        )
    }
  return (
    <MessageStackNavigator.Navigator>
        <MessageStackNavigator.Screen
            name={StackMsgRoutes.MESSAGES}
            component={MessagePage}
            options={({ navigation, route }) => ({
                headerTitle: StackMsgRoutes.MESSAGES, 
                headerLeft: WriteIcon,
                headerBackTitleVisible: false,
            })}
        /> 
        <MessageStackNavigator.Screen
            name={StackMsgRoutes.CHAT}
            component={ChatInteraction}
            />
    </MessageStackNavigator.Navigator> 
   
  )
}

