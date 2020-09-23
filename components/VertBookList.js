import React, {Component} from 'react';
import { TouchableOpacity, View, Text, FlatList, SafeAreaView, Image } from 'react-native';
import Styles from './Styles';
import { useNavigation } from '@react-navigation/native';

class VerticalBookList extends Component {
    renderBook = ({ item }) => {
        return(
        <SafeAreaView style={Styles.bookContainer}>
        {item.volumeInfo.imageLinks && 
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('show', { id: item.id, results: this.props.results, searchFunc: this.props.searchFunc })}>
                <Image style={Styles.logo} 
                source={{ uri: item.volumeInfo.imageLinks.smallThumbnail }} />
            </TouchableOpacity>

        }
        <Text style={Styles.subTitle}>{item.volumeInfo.title}</Text>
        <Text style={Styles.subTitle}>{item.volumeInfo.authors[0]}</Text>
        </SafeAreaView>
        )
    }
    render() {
        return(
            <View>
                <Text style={Styles.subTitle}>Powered by Google</Text>
                <FlatList 
                    data={this.props.results.items}
                    renderItem={this.renderBook}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

export default VerticalBookList;

