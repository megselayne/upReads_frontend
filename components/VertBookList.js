import React, {Component} from 'react';
import { TouchableOpacity, View, Text, FlatList, SafeAreaView, Image } from 'react-native';
import Styles from './Styles';

class VerticalBookList extends Component {
    renderBook = ({ item }) => {
        return(
        <SafeAreaView style={Styles.bookContainer}>
        {item.volumeInfo.imageLinks && <Image style={Styles.logo} source={{ uri: item.volumeInfo.imageLinks.smallThumbnail }} />}
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

