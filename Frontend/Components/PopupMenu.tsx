import { View, Text, Animated, ViewStyle } from 'react-native'
import React, { useEffect, useState } from 'react'

interface PopUpProps {
    verticalPop: boolean;
    popToRight?: boolean;
    popToLeft?: boolean;
    popToTop?: boolean;
    modalStyle: ViewStyle    
}
type ModalPosition = {
    top?: number,
    left?: number,
}
export default function PopupMenu(props: PopUpProps, {children}) {
    const [position, setPosition] = useState<ModalPosition>({}) ;

    const setModalPos = () => {
        if (!props.verticalPop &&  props.popToRight === false) {
            // left to right
            setPosition({left: 0})
        } else if (props.popToTop  && props.verticalPop) {
            // bottom to top
            setPosition({top: 100})
        } else if (props.popToTop === false && props.verticalPop) {
            // top to bottom
            setPosition({top: 0});
        } else {
            // right to left
            setPosition({left: 100})

        }
    }

    useEffect(() => {
        setModalPos()
    }, [])
  return (
    <View style={props.modalStyle}>
        {children}
    </View>
  )
}
