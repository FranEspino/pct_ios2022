import React from 'react'
import { StatusBar,SafeAreaView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import StackLogin from './src/navigator/StackLogin';

const App = () => {
  return (
    <NavigationContainer>
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <StatusBar
          backgroundColor='#005c00'
          barStyle='light-content'
        />
        <StackLogin />
    </SafeAreaView>

</NavigationContainer>
  )
}

export default App
