import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import UpdateScreen from '../screens/UpdateScreen/UpdateScreen';
import { AdvanceScreen } from '../screens/AdvanceScreen/AdvanceScreen';
import { Text } from 'react-native';



const Stack = createStackNavigator();

export const StackAdvance = () => {
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
     <Stack.Screen name="AdvanceScreen"  options={{title:"Avance"}}  component={AdvanceScreen} />
      <Stack.Screen name="UpdateScreen"  options={{title:"Actualizar Documento"}}  component={UpdateScreen} />
    
    </Stack.Navigator>
    )
}

