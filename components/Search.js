import React, { Component } from 'react'
import { TouchableWithoutFeedback, Button, View, ScrollView, Text, Keyboard, TextInput, SafeAreaView } from 'react-native';
import Styles from './Styles';
import CustomButton from './CustomButton';
import VerticalBookList from './VertBookList';


const Search = (props) => {
    const [value, onChangeText] = React.useState('')
    
        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <ScrollView>
                    <View style={Styles.container}>
                        <TextInput style={Styles.textInput}
                        value={value}
                        onChangeText={text => onChangeText(text)}
                        />
                        <CustomButton query={value} searchFunc={props.searchFunc}/>
                        {props.results ? <VerticalBookList results={props.results} navigation={props.navigation} searchFunc={props.searchFunc} /> : <Text style={Styles.title}>Find your next UpRead!</Text>}
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        )
}

export default Search;