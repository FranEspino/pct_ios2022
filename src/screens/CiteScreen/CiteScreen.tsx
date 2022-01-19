import React, {useEffect} from 'react';
import {Image, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {StackScreenProps, StackView} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { CardCites } from '../../components/CardCites/CardCites';
import PctButtom from '../../components/PctButtom/PctButtom';

interface Props extends StackScreenProps<any, any> {}
export const CiteScreen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 10}}
          onPress={() => navigation.goBack()}>
          <Text>
            <Icon name="arrow-back-outline" size={20} color="white" />
          </Text>
        </TouchableOpacity>
      ),
      headerTitleAlign: 'left',
    });
  }, []);
  return (
    <KeyboardAvoidingView
    style={{flex: 1,backgroundColor:'#ffffff'}}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <ScrollView>
    <View style={{flex: 1, backgroundColor:'#ffffff', alignItems: 'center', marginBottom: 45}}>
      <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold', marginTop: 15}}>
        Mis citas pendientes
      </Text>
      <Image
        style={{width: 250, height: 250, resizeMode: 'contain'}}
        source={{
          uri: 'https://res.cloudinary.com/frapoteam/image/upload/v1637759807/Business_Plan_1_n4llg9.png',
        }}
      />

      <CardCites />
      <CardCites />
      <CardCites />
      <CardCites />
      <CardCites />

      <PctButtom
       title="Nueva"
       style={{marginTop: 30}}
       onPress={() => console.log('Nueva')}
      />
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};
