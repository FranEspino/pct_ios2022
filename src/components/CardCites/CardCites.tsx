import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './CardCitesStyle';
export const CardCites = () => {
  return (
    <View style={styles.containerCard}>
      <View style={styles.containerInfo}>
        <Text style={styles.containerInfoText}>Mi nuevo link</Text>
        <Text style={styles.containerInfoDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          ad eum quia praesentium doloribus 
        </Text>
        <Text style={styles.containerInfoLink}>https://meet.google.com/mtb-emuo-hmd</Text>
      </View>
      <View style={styles.containerDate}>
        <View>
          <Text style={{...styles.containerInfoText, fontSize:14}}>Fecha:{'\n'}19/01/2022</Text>
        </View>
        <View>
          <Text style={{...styles.containerInfoText, fontSize:14}}>Hora::{'\n'}10:50 am</Text>
        </View>
      </View>
    </View>
  );
};
