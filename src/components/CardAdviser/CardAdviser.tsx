import React from 'react'
import { Image, Text, View } from 'react-native'
import  {styles} from './CardAdviseStyle'
const CardAdviser = () => {
    return (
        <View style={styles.containerCard}>
        <Image
            style={{ width: 85, height: 85, resizeMode: 'contain', borderRadius: 1000 }}
            source={{
                uri: 'https://avatars.githubusercontent.com/u/433725?v=4',
            }}
        />

        <View style={{ marginLeft: 25 }}>
            <Text style={styles.textCardName}>Jose Cruz {'\n'}Silva Mendoza</Text>
            <Text style={styles.textCardEmail}>JoseCruz@gmail.com</Text>
            <Text style={styles.textCardPhone}>949798569</Text>
        </View>

    </View>
    )
}

export default CardAdviser
