import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './CardInvestigatorStyle';
import {baseURL} from '../../api/Api';

const CardPerson = ({name, lastname, img}: any) => {
  return (
    <View style={styles.containerCard}>
      <Image
        style={{
          width: 85,
          height: 85,
          resizeMode: 'contain',
          borderRadius: 1000,
        }}
        source={{
          uri: `${baseURL}/images/${img}`,
        }}
      />
      <View style={{marginLeft: 25}}>
        <Text style={styles.textCard}>¡Hola de nuevo 👋!</Text>
        <Text style={styles.textCard}>
          {name} {'\n'}
          {lastname}
        </Text>
      </View>
    </View>
  );
};

export default CardPerson;
