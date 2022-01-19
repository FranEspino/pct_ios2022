import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import {  View, Image, TextInput } from 'react-native'
import PctButtom from '../../components/PctButtom/PctButtom'
import { useForm } from '../../hooks/useForm'
import { styles } from './LoginScreenStyle'

interface Props extends StackScreenProps<any,any>{};

const LoginScreen = ({navigation}:Props) => {
    const {dni, clave, onChange} = useForm({
        dni: '',
        clave: ''
    });

    const logData = () => {
        console.log(dni, clave)
    }

    return (
        <View style={styles.container}>
            <Image
                style={{ width: 220, height: 180, resizeMode: 'contain' }}
                source={{
                    uri: 'https://res.cloudinary.com/frapoteam/image/upload/v1637699608/uncp_o2hvo1.png',
                }}
            />
            <TextInput
             
                style={styles.input}
                placeholderTextColor="#000"
                onChangeText={(value) => onChange(value, 'dni')}
                value={dni}
                placeholder="Ingresa tu dni"
                onSubmitEditing={logData}
                keyboardType="numeric"
                autoCorrect={false}
                autoCapitalize={"none"}
            />
            <TextInput
                 style={styles.input}
                 placeholderTextColor="#000"
                 onChangeText={(value) => onChange(value, 'clave')}
                 value={clave}
                 placeholder="Ingresa tu clave"
                 onSubmitEditing={logData}
                 secureTextEntry={true}
                 autoCorrect={false}
                 autoCapitalize={"none"}
            />
            <PctButtom 
                 title="Ingresar"
                 style={{ marginTop: 40, }}
                 onPress={()=> {navigation.navigate('ButtontabNavigator')}}/>
                  
        </View>

    )
}

export default LoginScreen