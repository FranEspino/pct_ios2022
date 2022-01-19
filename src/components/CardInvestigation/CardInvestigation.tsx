import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from './CardInvestigationStyle';
const image = {
  uri: 'https://res.cloudinary.com/frapoteam/image/upload/v1642527329/nick-morrison-FHnnjk1Yj7Y-unsplash_udh2py.jpg',
};

export const CardInvestigation = () => {
  return (
    <View style={styles.containerCard}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.containerInfo}>
          <Text style={styles.textCardTitle}>Mi nueva investigacion</Text>
          <Text style={{...styles.textCardTitle, fontSize:10, fontWeight: 'normal'}}>La descripcion del proyecto que estamos testeando.</Text>
          <Text style={{...styles.textCardTitle, fontSize:12}}>Fecha de creacion: 18/01/2022</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
