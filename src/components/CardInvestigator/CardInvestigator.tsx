import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from './CardInvestigatorStyle'
const CardPerson = () => {
    return (
        <View style={styles.containerCard}>
        <Image
            style={{ width: 85, height: 85, resizeMode: 'contain', borderRadius: 1000 }}
            source={{
                uri: 'https://avatars.githubusercontent.com/u/63974005?v=4',
            }}
        />

        <View style={{ marginLeft: 25 }}>
            <Text style={styles.textCard}>¡Hola de nuevo 👋!</Text>
            <Text style={styles.textCard}>Richard Francisco {'\n'}Espino Mostacero</Text>
        </View>

    </View>
    )
}

export default CardPerson
