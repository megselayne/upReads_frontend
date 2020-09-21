import React, { Component } from 'react'
import { TouchableWithoutFeedback, Button, View, Image, Text, Keyboard, TextInput } from 'react-native';
import Styles from './Styles';


class Search extends Component {
    render() {
        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={Styles.container}>
                <TextInput style={Styles.textInput} placeholder="Search" />
                <Text style={Styles.title}>Find your next UpRead!</Text>
            </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default Search;