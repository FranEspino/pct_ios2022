import React from 'react'
import { StyleProp, Text, ViewStyle } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { styles } from './PctButtomStyle'
interface Props {
    title: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>
}

const PctButtom = ({ title, onPress, style = {} }: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={{
                ...style as any,
                ...styles.button
            }}
        >

            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default PctButtom