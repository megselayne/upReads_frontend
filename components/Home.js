import React, { Component } from "react";
import { FlatList, SafeAreaView, Image, StyleSheet, Text, TouchableOpacity, SectionList, View } from "react-native";
import Styles from './Styles';

class Home extends Component {

    renderItem = ({ item }) => {
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
                            renderItem={this.renderItem}
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

// {book.volumeInfo.imageLinks && <Image style={Styles.logo} source={{ uri: book.volumeInfo.imageLinks.smallThumbnail }} />}
//                         <Text style={Styles.title}>{book.volumeInfo.title}</Text>
//                         <Text style={Styles.title}>{book.volumeInfo.authors[0]}</Text>