import React, { useContext } from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackMenu} from './StackMenu';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackAdvance } from './StackAdvance';
import { StackPerfil } from './StackPerfil';
import { LoaderSkype } from '../components/Loader/Loader';
import { AuthContext } from '../context/AuthContext';

const Tab = createBottomTabNavigator();

export const ButtontabMenu = () => {
  const {statusLogin} = useContext(AuthContext);
  if (statusLogin === 'cheking') {
    return <LoaderSkype />;
  }

  return (
    
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      //Configuración global que aplica a cada Tab
      screenOptions={({route}) => ({
  

        headerShown: false,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#ffffff',
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: '#175000',
          height: 50
        },
        style: {
          backgroundColor: '#175000',
          
        },
        tabBarBackgroundColor: '#175000',
        headerStyle: {
          backgroundColor: '#175000',
        },
        headerTitleStyle: {
          color: '#fff',
        },
        tabBarIcon: ({color, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Menu':
              iconName = 'home';
              break;
            case 'Avance':
              iconName = 'document';
              break;
            case 'Perfil':
              iconName = 'person';
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Menu" options={{title: 'Menu'}} component={StackMenu} />
      <Tab.Screen name="Avance" component={StackAdvance} />
      <Tab.Screen name="Perfil" component={StackPerfil} />
    </Tab.Navigator>
  );
};
