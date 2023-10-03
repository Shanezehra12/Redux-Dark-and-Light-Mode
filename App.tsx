import React from 'react';
import {View, Text} from 'react-native';
import AppNavigator from './src/AppNavigator';
import {Provider} from 'react-redux'
import { mystore } from './src/redux/store/Store';

const App = () => {
  return (
    <Provider store={mystore}>
      <AppNavigator/>
    </Provider>
    
  )
}

export default App