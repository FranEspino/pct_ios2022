import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import {ButtontabMenu} from './ButtontabMenu';
import {AuthContext} from '../context/AuthContext';
import {LoaderSkype} from '../components/Loader/Loader';

const Stack = createStackNavigator();
const StackNavigator = () => {
  const {statusLogin} = useContext(AuthContext);
  if (statusLogin === 'cheking') {
    return <LoaderSkype />;
  }


  991848519
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#ffffff'},
        headerStyle: {elevation: 0, shadowColor: 'transparent'},
      }}>
      {statusLogin === 'not-authenticated' ? (
        <Stack.Screen
          name="LoginScreen"
          options={{title: 'Login'}}
          component={LoginScreen}
        />
      ) : (
        <Stack.Screen name="ButtontabNavigator" component={ButtontabMenu} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
