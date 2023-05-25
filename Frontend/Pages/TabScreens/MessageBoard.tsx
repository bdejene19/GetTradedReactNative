import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Input } from '@ui-kitten/components'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPencilSquare, faPenToSquare, faSearch } from '@fortawesome/free-solid-svg-icons'
import { BackendTypes, TextResources } from '../../Common/GlobalDeclarations'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackMsgRoutes, StackMsgParamList } from '../types'
import ChatInteraction from '../StackScreens/ChatInteraction'
import MessageThread from '../../Components/messages/MessageThread'
import NewThreadModal from '../../Components/messages/NewThreadModal'
import { useIsLarge } from '../../Common/customHooks'

type ChatMessage = {
    name: string;
    email: string;
    phone: string;
}
interface Threads {
    string: {
        message_threads: [{
            thread_id: string | number;

        }]
    }
}

interface Message {
    createdAt: Date;
    message_id: number;
    text: string;
}
const MessageStackNavigator = createNativeStackNavigator<StackMsgParamList>();

export default function MessageBoard({ navigation, route }) {
    const [msgModalOpen, setMsgModal] = useState(false);
    const [query, setQuery] = useState("")
    const [threads, setThreads] = useState<BackendTypes.MessageThread[]>([]);
    const fontSize = useIsLarge();
    const userID = route.params.user_id;
    useEffect(() => {
        if (userID) {
            fetch(`${TextResources.API_ROUTES.HOST}/${TextResources.API_ROUTES.MESSAGES}/${userID}`).then(res => res.json()).then(res => {
                console.log('my res: ', res);
                setThreads(res.inbox.message_thread)
            }).catch(err => console.log("my error : ", err))
        }
        
    }, [userID])

    useEffect(() => {

    }, [threads])
    const SearchIcon = () => (
        <FontAwesomeIcon  icon={faSearch}/>
    )
    const WriteIcon = () => (
        <TouchableOpacity onPress={() => setMsgModal(true)}>
            <FontAwesomeIcon icon={faPenToSquare}  size={24}/>
        </TouchableOpacity>
    )

    const handleDelete = (threadID: number) => {
        fetch(`${TextResources.API_ROUTES.HOST}/${TextResources.API_ROUTES.THREAD}/${threadID}`, {
            method: "DELETE",
        }).then(res => res.json()).then(res => {
            threads.forEach(thread => console.log(thread.thread_id))
            const updatedThreads = threads.filter(thread => {
                if (thread.thread_id !== threadID) {
                    return thread
                }
            })

            setThreads(updatedThreads)


        }).catch(err => console.log('my err: ', err))
    }
    const MessagePage =({ navigation, route }) => {
        
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
                {threads ? threads.map(thread =>  {
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
                }) : null}
                <NewThreadModal modalVisible={msgModalOpen} setModal={setMsgModal}/>
            </View>
        )
    }
  return (
    <MessageStackNavigator.Navigator>
        <MessageStackNavigator.Screen
            name={StackMsgRoutes.MESSAGE_BOARD}
            component={MessagePage}
            options={({ navigation, route }) => ({
                headerTitle: StackMsgRoutes.MESSAGE_BOARD, 
                headerStyle: {
                    backgroundColor: '#F47742',
                  },
                headerTitleAllowFontScaling: true,
                headerTitleStyle: {
                ...fontSize.subHeader
                },
                headerLeft: WriteIcon,
                headerBackTitleVisible: false,
            })}
        /> 
        <MessageStackNavigator.Screen
            name={StackMsgRoutes.CHAT}
            component={ChatInteraction}
            options={({navigation, route}) => {
                return ({
                    headerTitle: route.params.name,
                    headerTitleAllowFontScaling: true,
                    headerTitleStyle: {
                    ...fontSize.subHeader
                    },
                })
            }}
            />
    </MessageStackNavigator.Navigator> 
   
  )
}

