import React, { Component } from 'react'
import { Button, View, Image, Text, Alert } from 'react-native';
import Styles from './Styles';



class Profile extends Component {
    render() {
        return(
            <View style={Styles.container}>
                <Text style={Styles.title}>Profile Screen</Text>
            </View>
        )
    }
}

export default Profile;