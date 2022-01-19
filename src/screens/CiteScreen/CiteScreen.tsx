import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import {StackScreenProps} from '@react-navigation/stack';
import Icon  from 'react-native-vector-icons/Ionicons';

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
        <View>
      <Text style={{color:'black', fontSize: 18, fontWeight: 'bold'}}>I'm Cites</Text>
        </View>
    )
}


