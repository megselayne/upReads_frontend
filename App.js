/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StateController from './components/StateController';
import ShowBook from './components/ShowBook';

const Tab = createBottomTabNavigator();
const SearchStack = createStackNavigator();

const SearchStackScreen = (props) => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name='search' children={() => <StateController currentPage={'search'} navigation={props.navigation} />}/>
      <SearchStack.Screen name='show' component={ShowBook} />
    </SearchStack.Navigator>
  )
}

const App = () => {

    return(
      <NavigationContainer theme={DarkTheme}>
        <Tab.Navigator>
          <Tab.Screen name="Home" children={() => <StateController currentPage={'home'} />} />
          <Tab.Screen name="Search" component={SearchStackScreen}/>
          <Tab.Screen name="Profile" children={() => <StateController currentPage={'profile'} />} />
        </Tab.Navigator>
      </NavigationContainer>
    )

}

export default App;