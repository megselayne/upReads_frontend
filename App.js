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

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      auth: false,
      user: null,
      message: null,
    }
  }
  
  componentDidMount = () => {
    fetch('/api/v1/auth/login', { credentials: 'include' })
      .then(res => res.json())
      .then(res => {
        this.setState({
          auth: res.auth,
          user: res.data.user,
          message: null,
        })
      }).catch(err => console.log(err))
  }
  
  
  handleFormSubmit = (method, e, data, route) => {
    e.preventDefault()
    // console.log("submit data", data)
    fetch(route, { 
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    }).then(res => res.json())
    .then(res => {
      // console.log("submit res", res)
      this.setState({
        message: res.message,
        auth: res.auth,
        user: res.data.user,
      })
      if (res.message) {
        setTimeout(function() {
          this.setState({message: null})
        }.bind(this), 5000)
      }
      
    }).catch(err => {
      console.log(err)
    })
  }

  logout = () => {
    fetch('/api/auth/logout', {
      credentials: 'include',
    }).then(res => res.json())
    .then(res => {
      this.setState({
        auth: res.auth,
        user: res.data.user
      })
    }).catch(err => console.log(err))
  }
  
  render() {
    return(
      <NavigationContainer theme={DarkTheme}>
        <Tab.Navigator>
          <Tab.Screen name="Home" children={() => <StateController currentPage={'home'} />} />
          <Tab.Screen name="Search" component={SearchStackScreen}/>
          <Tab.Screen name="Profile" children={() => <StateController currentPage={'profile'} submit={this.handleFormSubmit}/>} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;