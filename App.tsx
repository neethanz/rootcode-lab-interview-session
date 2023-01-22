/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import TabNavigator from './lib/src/tab_navigator';
import LoginScreen from './lib/src/screens/login_screen';
import {useSelector} from 'react-redux';

function App() {
  const user = useSelector((state: any) => state.user);
  return user ? <TabNavigator /> : <LoginScreen />;
}

export default App;
