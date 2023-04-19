import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Input } from '@ui-kitten/components'
import { TextResources } from '../Common/GlobalDeclarations'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import MessageThread from '../Components/MessageThread'

export default function MessageBoard() {
    const [query, setQuery] = useState("")
    const SearchIcon = () => (
        <FontAwesomeIcon  icon={faSearch}/>
    )
 
  return (
    <View>
        <TouchableWithoutFeedback>
            <Input 
                placeholder={TextResources.FormStrings.SEARCH} 
                accessoryRight={<SearchIcon/>}
                value={query}
                onChangeText={(text: string) => setQuery(text)}
            />
        </TouchableWithoutFeedback>
        <MessageThread from='Bemnet Dejene' fromIcon='https://www.procore.com/dam/jcr:b9a8db20-d3a8-4122-b2e6-4374e0baeea5/homepage_persona_owner.png' latestMessage='yo whats good' latestMessageDate={new Date()}/>
    </View>
  )
}