import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import {  View, Image, TextInput } from 'react-native'
import PctButtom from '../../components/PctButtom/PctButtom'
import { styles } from './LoginScreenStyle'

interface Props extends StackScreenProps<any,any>{};

const LoginScreen = ({navigation}:Props) => {
    return (
        <View style={styles.container}>
            <Image
                style={{ width: 220, height: 180, resizeMode: 'contain' }}
                source={{
                    uri: 'https://res.cloudinary.com/frapoteam/image/upload/v1637699608/uncp_o2hvo1.png',
                }}
            />
            <TextInput
                keyboardType='numeric'
                placeholder="Número de documento"
                style={styles.input}
                placeholderTextColor="#000"
            />
            <TextInput
                autoCapitalize="none"
                secureTextEntry={true}
                placeholder="Contraseña"
                style={{ ...styles.input, marginTop: 20 }}
                placeholderTextColor="#000"
            />
            <PctButtom 
                 title="Ingresar"
                 style={{ marginTop: 40, }}
                 onPress={()=> {navigation.navigate('ButtontabNavigator')}}/>
        </View>

    )
}

export default LoginScreen