import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from '../screens/ProfileScreen/ProfileScreen';
import {UpdateProfile} from '../screens/UpdateProfile/UpdateProfile';
import { Text } from 'react-native-svg';

const Stack = createStackNavigator();
export const StackPerfil = () => {
    return (
        <Stack.Navigator
        initialRouteName="ProfileScreen"
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
            <Stack.Screen name="ProfileScreen" options={{title:"Login"}} component={ProfileScreen} />
            <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
       </Stack.Navigator>
    )
}

 
