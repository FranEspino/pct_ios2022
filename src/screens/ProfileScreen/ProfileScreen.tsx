import React, { useContext } from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './ProfileScreenStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import PctButtom from '../../components/PctButtom/PctButtom';
import { AuthContext } from '../../context/AuthContext';
export const ProfileScreen = () => {
  const { LogOut } = useContext(AuthContext);

  return (
    <View
      style={{
        paddingHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column',
      }}>
      <View style={styles.containerCard}>
        <Image
          style={{
            width: 85,
            height: 85,
            resizeMode: 'contain',
            borderRadius: 1000,
          }}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/433725?v=4',
          }}
        />

        <Text style={styles.TitleProfile}>
          Richard Francisco {'\n'}Espino Mostacero
        </Text>
          <View style={{alignItems: 'flex-start'}}>
          <Text
          style={{...styles.TitleProfile, fontSize: 15, fontWeight: 'normal'}}>
          <Icon name={'call-outline'} size={16} color={'#000'} /> 919789566
        </Text>

        <Text
          style={{...styles.TitleProfile, fontSize: 15, fontWeight: 'normal'}}>
          <Icon name={'mail-outline'} size={16} color={'#000'} /> frapo_dev@gmail.com
        </Text>

        
        <Text
          style={{...styles.TitleProfile, fontSize: 15, fontWeight: 'normal'}}>
          <Icon name={'home-outline'} size={16} color={'#000'} /> Calle los rosales #543
        </Text>
          </View>
       
      <PctButtom 
      style={{marginTop: 40}}
        title="Editar Perfil"
        onPress={LogOut}
      />
      </View>
    </View>
  );
};
