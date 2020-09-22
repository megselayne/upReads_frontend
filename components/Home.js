import React, { Component } from "react";
import { FlatList, SafeAreaView, Image, StyleSheet, Text, TouchableOpacity, SectionList, View } from "react-native";
import Styles from './Styles';

class Home extends Component {

    renderBook = ({ item }) => {
        return(
        <SafeAreaView style={Styles.bookContainer}>
        {item.volumeInfo.imageLinks && <Image style={Styles.logo} source={{ uri: item.volumeInfo.imageLinks.smallThumbnail }} />}
        <Text style={Styles.subTitle}>{item.volumeInfo.title}</Text>
        <Text style={Styles.subTitle}>{item.volumeInfo.authors[0]}</Text>
        </SafeAreaView>
        )
    }
    render(){
        return(
            <>
            <SafeAreaView>
            {this.props.books.map(shelf => (
                
                        <FlatList 
                            data={shelf}
                            renderItem={this.renderBook}
                            keyExtractor={item => item.id}
                            horizontal={true}
                        />
                        

                ))

            }
            </SafeAreaView>
            </>
        )
    }
}

export default Home;

