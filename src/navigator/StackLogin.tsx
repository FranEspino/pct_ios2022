import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import { ButtontabMenu } from './ButtontabMenu';

const Stack = createStackNavigator();
const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
                headerShown: false,
                cardStyle:{backgroundColor: '#ffffff'},
                headerStyle: {elevation:0, shadowColor: 'transparent'},
            }}
        >
            <Stack.Screen name="LoginScreen" options={{title:"Login"}} component={LoginScreen} />
            <Stack.Screen name="ButtontabNavigator" component={ButtontabMenu} />
       </Stack.Navigator>
    )
}

export default StackNavigator
