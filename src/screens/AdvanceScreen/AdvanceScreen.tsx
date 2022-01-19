import React from 'react';
import {Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import CardAdviser from '../../components/CardAdviser/CardAdviser';
import {CardInvestigation} from '../../components/CardInvestigation/CardInvestigation';
import PctButtom from '../../components/PctButtom/PctButtom';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './AdvanceScreenStyle';
import * as Progress from 'react-native-progress';
interface Props extends StackScreenProps<any, any> {}

export const AdvanceScreen = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titleAdvance}>Datos de mi asesor:</Text>
          <CardAdviser />
          <Text style={styles.titleAdvance}>Tu investigación:</Text>
          <CardInvestigation />
          <Text style={styles.titleAdvance}>Progreso:</Text>
          <View
            style={{
              backgroundColor: '#ffffff',
              height: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Progress.Bar progress={0.5} width={350} color="#175000" />
          </View>
          <Text style={styles.titleAdvance}>Estado: Revisado</Text>
          <View style={{width: '100%', alignItems: 'center', marginTop: 15}}>
            <PctButtom 
                title="Descargar" 
                onPress={() => console.log('Press')} />
          </View>
          <View style={{width: '100%', alignItems: 'center', marginTop: 15}}>
            <PctButtom
                title="Actualizar"
                onPress={() => console.log('Press')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
