/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Styles from './components/Styles';
import Home from './components/Home';
import Profile from './components/Profile';
import Search from './components/Search';
import StateController from './components/StateController';

const Tab = createBottomTabNavigator();

class App extends Component {
  render() {
    return(
      <NavigationContainer theme={DarkTheme}>
        <Tab.Navigator>
          <Tab.Screen name="Home" children={() => <StateController currentPage={'home'} />} />
          <Tab.Screen name="Search" children={() => <StateController currentPage={'search'} />}/>
          <Tab.Screen name="Profile" children={() => <StateController currentPage={'profile'} />} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}


export default App;
