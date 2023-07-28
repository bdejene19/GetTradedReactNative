import { View, Text } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Input } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPenToSquare, faSearch } from '@fortawesome/free-solid-svg-icons'
import { TextResources } from '../../Common/GlobalDeclarations'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackMsgRoutes, StackMsgParamList } from '../types'
import ChatInteraction from '../StackScreens/Messages/ChatInteraction'
import MessageThread from '../../Components/messages/MessageThread'
import NewThreadModal from '../../Components/messages/NewThreadModal'
import { useIsLarge } from '../../Common/customHooks'
import { deleteMessageThread } from './helpers/methods'


const MessageStackNavigator = createNativeStackNavigator<StackMsgParamList>();

export default function MessageBoard({ navigation, route }) {
    const [msgModalOpen, setMsgModal] = useState(false);
    const [query, setQuery] = useState("")
    const [threads, setThreads] = useState([]);
    const fontSize = useIsLarge();
    const userID = route.params.user_id;
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        if (userID) {
            fetch(`${TextResources.API_ROUTES.HOST}/${TextResources.API_ROUTES.MESSAGES}/${userID}`).then(res => res.json()).then(res => {
                setThreads(res.inbox.message_threads)
            }).catch(err => console.log("my error : ", err))
        }
        
    }, [userID])
    
    const SearchIcon = () => (
        <FontAwesomeIcon  icon={faSearch}/>
    )
    const WriteIcon = () => (
        <TouchableOpacity onPress={() => setMsgModal(true)}>
            <FontAwesomeIcon icon={faPenToSquare}  size={24}/>
        </TouchableOpacity>
    )

    const handleDelete = (threadID: number) => {
        let deleted = deleteMessageThread(threadID);
        if (deleted) {
            const updatedThreads = threads.filter(thread => {
                if (thread.thread_id !== threadID) {
                    return thread
                }
            })
    
            setThreads(updatedThreads)
        }
      
    }
    const MessagePage =({ navigation, route }) => {
        let content = null;
        
        useEffect(() => {
            if (threads) {
                content = threads.map(thread =>  {
                    return (
                        <MessageThread 
                            key={thread.thread_id} 
                            onPress={() => navigation.navigate('Chat', { 
                                name: thread.user.name,
                                email: thread.user.email,
                                phone: thread.user.phone,
                                accountID: userID,
                                thread_id: thread.thread_id,
                            })} 
                            onDelete={() => handleDelete(thread.thread_id)}
                            thread_id={thread.thread_id}
                            from={thread.user.name} 
                            fromIcon='https://www.procore.com/dam/jcr:b9a8db20-d3a8-4122-b2e6-4374e0baeea5/homepage_persona_owner.png' 
                            latestMessage={thread.chat_messages[0].text} 
                            latestMessageDate={new Date(thread.chat_messages[0].createdAt)}
                        />
                    )
                })
            }
        }, [threads])
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
                {content ? content : null }
                <NewThreadModal modalVisible={msgModalOpen} setModal={setMsgModal}/>
            </View>
        )
    }
  return (
    <MessageStackNavigator.Navigator>
        <MessageStackNavigator.Group screenOptions={{
              headerTitleStyle: {
              ...fontSize.subHeader
              },
        }}>

            <MessageStackNavigator.Screen
                name={StackMsgRoutes.MESSAGE_BOARD}
                component={MessagePage}
                options={({ navigation, route }) => ({
                    headerTitle: StackMsgRoutes.MESSAGE_BOARD, 
                    headerStyle: {
                        backgroundColor: '#F47742',
                    },
                    headerTitleStyle: {
                    ...fontSize.subHeader
                    },
                    headerLeft: WriteIcon,
                })}
            /> 
            <MessageStackNavigator.Screen
                name={StackMsgRoutes.CHAT}
                component={ChatInteraction}
                options={({navigation, route}) => {
                    return ({
                        headerTitle: route.params.name,
                    
                    })
                }}
            />
        </MessageStackNavigator.Group>

    </MessageStackNavigator.Navigator> 
   
  )
}

