import { Button, Text, StyleSheet } from "react-native";

interface Props {
    title: string;
    color?: string;
    onPress: () => void | any;
    disable?: boolean;
    accessibilityLabel?: string;
}

export const CustomButton = (props: Props) => {
    return (
        <Button 
            title={props.title} 
            color={props.color ? props.color : 'white'} 
            disabled={props.disable ? props.disable : false} 
            onPress={props.onPress()} 
            accessibilityLabel={props.accessibilityLabel}
        />
    )

}

