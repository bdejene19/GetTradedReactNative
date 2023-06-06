import { useEffect, useState } from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { View, Text } from 'react-native'

import { StyleProp, ViewStyle } from 'react-native/types'

interface BubbleProps {
    title: string;
    style?: StyleProp<string>;
    selectorLimit?: number;
}
interface MultiBubbleSelectProps {
    label: string;
    bubbles: string[];
    style?: StyleProp<ViewStyle>;
    selectLimit?: number;
}
export default function MultiBubbleSelect(props: MultiBubbleSelectProps) {
    const [selected, setSelected] = useState([]);
    useEffect(() => {
      
        console.log(selected);
      return () => {
        
      }
    }, [selected])
    
    const Bubble = (props: BubbleProps) => {
        const [active, setActive] = useState(false)
        const bubbleStyle: StyleProp<ViewStyle> = { 
            borderRadius: 35, 
            padding: 5, 
            backgroundColor: active ? 'grey' : 'transparent', 
            borderWidth: 1, 
            opacity: active ? 1 : 0.6, 
            alignSelf: 'flex-start'
        }
      
        const handlePress = () => {
            if (!selected.includes(props.title)) {
                setSelected([...selected, props.title])
            } else {
                setSelected(selected.filter(category => category !== props.title));
            }
        }

        useEffect(() => {
            if (selected.includes(props.title)) {
                setActive(true);
            } else {
                setActive(false);
            }
        }, [])

        return (
            <TouchableHighlight style={bubbleStyle} disabled={selected.length === props.selectorLimit && !selected.includes(props.title)} onPress={handlePress}>
                <Text>{props.title}</Text>
            </TouchableHighlight>
        )
    }
  return (
    <View style={props.style}>
        <Text>{props.label}</Text> 
        <View style={{flexWrap: 'wrap', flexDirection: 'row', rowGap: 7, columnGap: 10}}>
            {props.bubbles?.map((bubbleName, index) => <Bubble key={`bubble-${index}`} selectorLimit={props.selectLimit} title={bubbleName}></Bubble>)}

        </View>
    </View>
  )
}
