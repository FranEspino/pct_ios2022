import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProjectScreen from '../screens/ProjectScreen/ProjectScreen';
import {CiteScreen} from '../screens/CiteScreen/CiteScreen';
import {MenuScreen} from '../screens/MenuScreen/MenuScreen';
import { AdvanceScreen } from '../screens/AdvanceScreen/AdvanceScreen';
import { Text } from 'react-native';

const Stack = createStackNavigator();
export const StackMenu = () => {
  return (
    <Stack.Navigator
      initialRouteName="MenuScreen"
      screenOptions={{
        headerShown: true,
        headerLeft: () => (<Text></Text>),
        headerTitleStyle: {
          color: '#ffffff',
          fontSize: 18,

        },
        headerTitleAlign: 'left',
  
        headerStyle: {backgroundColor: '#175000',elevation:0, shadowColor: 'transparent'},
      }}>
      <Stack.Screen name="MenuScreen"  options={{title:"Menu Principal"}}  component={MenuScreen} />
      <Stack.Screen name="AdvanceScreen"   options={{title:"Avance"}}  component={AdvanceScreen} />
      <Stack.Screen name="ProjectScreen"  options={{title:"Mi proyecto"}}  component={ProjectScreen} />
      <Stack.Screen name="CiteScreen" options={{title:"Citas"}} component={CiteScreen} />
    </Stack.Navigator>
  );
};
