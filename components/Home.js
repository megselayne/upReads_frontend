import React, { Component } from 'react'
import { Button, View, Image, Text, Alert } from 'react-native';
import Styles from './Styles';


class Home extends Component {
    render() {
        return(
            <View style={Styles.container}>
                <Text style={Styles.title}>Home Screen</Text>
            </View>
        )
    }
}

export default Home;