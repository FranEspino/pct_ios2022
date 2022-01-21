import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackLogin from './src/navigator/StackLogin';
import {AuthProvider} from './src/context/AuthContext';
const AppState = ({children}: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};
const App = () => {
  return (
    <NavigationContainer>
        <AppState>
        <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
          <StatusBar backgroundColor="#005c00" barStyle="light-content" />
          <StackLogin />
        </SafeAreaView>
      </AppState>
      </NavigationContainer>
  );
};

export default App;
