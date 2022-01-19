import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  Image,
  Text,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import CardPerson from '../../components/CardInvestigator/CardInvestigator';
import {styles} from './MenuScreenStyle';
interface Props extends StackScreenProps<any, any> {}

export const MenuScreen = ({navigation}: Props) => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.container}>
          <CardPerson />
          <Text
            style={{
              ...styles.textCard,
              fontSize: 11,
              textAlign: 'center',
              marginTop: 25,
            }}>
            ¡Mira todo el progreso de tu {'\n'} proyecto desde tu nueva App!
          </Text>
          <Image
            style={{width: 250, height: 250, resizeMode: 'contain'}}
            source={{
              uri: 'https://res.cloudinary.com/frapoteam/image/upload/v1637759807/Business_Plan_1_n4llg9.png',
            }}
          />
          <View style={styles.containerItems}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                navigation.navigate('ProjectScreen');
              }}>
              <View style={styles.itemMenu}>
                <Text style={{...styles.textCard, marginBottom: 8}}>
                  Mi proyecto
                </Text>
                <Image
                  style={{
                    width: 70,
                    height: 70,
                    zIndex: 1,
                    resizeMode: 'contain',
                    borderRadius: 70,
                  }}
                  source={{
                    uri: 'https://res.cloudinary.com/frapoteam/image/upload/v1642444550/pdf_tufovo.png',
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                navigation.navigate('CiteScreen');
              }}>
              <View style={styles.itemMenu}>
                <Text style={{...styles.textCard, marginBottom: 8}}>Citas</Text>
                <Image
                  style={{
                    width: 70,
                    height: 70,
                    resizeMode: 'contain',
                    borderRadius: 70,
                    backgroundColor: '#EFF4F0',
                  }}
                  source={{
                    uri: 'https://res.cloudinary.com/frapoteam/image/upload/v1642444550/calendar_zfs6xi.png',
                  }}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                navigation.navigate('AdvanceScreen');
              }}>
              <View style={styles.itemMenu}>
                <Text style={{...styles.textCard, marginBottom: 8}}>
                  Avance
                </Text>
                <Image
                  style={{
                    width: 70,
                    height: 70,
                    resizeMode: 'contain',
                    borderRadius: 70,
                  }}
                  source={{
                    uri: 'https://res.cloudinary.com/frapoteam/image/upload/v1642444549/copa_lmvqyd.png',
                  }}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.itemMenu}>
                <Text style={{...styles.textCard, marginBottom: 8}}>
                  Historial
                </Text>
                <Image
                  style={{
                    width: 70,
                    height: 70,
                    resizeMode: 'contain',
                    borderRadius: 70,
                  }}
                  source={{
                    uri: 'https://res.cloudinary.com/frapoteam/image/upload/v1642444549/chart_lifmc0.png',
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
