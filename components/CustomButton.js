import React, {Component} from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Styles from './Styles';


class CustomButton extends Component {
    render() {
        return(
            <View style={Styles.inputContainer}>
                <TouchableOpacity
                    style={Styles.saveButton}
                    onPress={() => {this.props.searchFunc(this.props.query)}}
                >
                    <Text style={Styles.saveButtonText}>Search</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default CustomButton;