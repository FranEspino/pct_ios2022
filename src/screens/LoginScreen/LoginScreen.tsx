import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {Text, View, Image, TextInput, Keyboard} from 'react-native';
import PctButtom from '../../components/PctButtom/PctButtom';
import {AuthContext} from '../../context/AuthContext';
import {useForm} from '../../hooks/useForm';
import {styles} from './LoginScreenStyle';

interface Props extends StackScreenProps<any, any> {}

const LoginScreen = ({navigation}: Props) => {
  const {signIn,user} = useContext(AuthContext);
 
  const {dni, clave, onChange} = useForm({
    dni: '',
    clave: '',
  });

  const onLogin = () => {
      console.log(dni,clave)
    signIn({dni,clave});
    Keyboard.dismiss();
}

  return (
    <View style={styles.container}>
      <Image
        style={{width: 220, height: 180, resizeMode: 'contain'}}
        source={{
          uri: 'https://res.cloudinary.com/frapoteam/image/upload/v1637699608/uncp_o2hvo1.png',
        }}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#000"
        onChangeText={value => onChange(value, 'dni')}
        value={dni}
        placeholder="Ingresa tu dni"
        onSubmitEditing={onLogin}
        keyboardType="numeric"
        autoCorrect={false}
        autoCapitalize={'none'}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#000"
        onChangeText={value => onChange(value, 'clave')}
        value={clave}
        placeholder="Ingresa tu clave"
        onSubmitEditing={onLogin}
        secureTextEntry={true}
        autoCorrect={false}
        autoCapitalize={'none'}
      />

      <PctButtom
        title="Ingresar"
        style={{marginTop: 40}}
        onPress={onLogin}
      />
      <Text style={{color: 'black'}}>{JSON.stringify(signIn, null, 4)}</Text>
    </View>
  );
};

export default LoginScreen;
