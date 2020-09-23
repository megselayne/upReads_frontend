import React, {Component} from 'react';
import { TouchableOpacity, View, Text, FlatList, SafeAreaView, Image } from 'react-native';
import Styles from './Styles';
import { useNavigation } from '@react-navigation/native';

class Test extends Component {
    render() {
        return(
            <Text style={Styles.title}>Hi Test</Text>
        )
    }
}

export default Test;