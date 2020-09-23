import React, {Component} from 'react';
import { TouchableOpacity, View, Text, FlatList, SafeAreaView, Image, ScrollView } from 'react-native';
import Styles from './Styles';

class ShowBook extends Component {
    constructor(props){
        super(props)
        this.state={
            singleBook: null,
            isLoaded: false,
        }
    }
    componentDidMount() {
        this.getSingleBook(this.props.route.params.id)
    }

    getSingleBook = (id) => {
        fetch(`http://localhost:3000/api/v1/books/single/${id}`)
        .then(res => res.json())
        .then(res => {
            this.setState({
                singleBook: res,
                isLoaded: true,
            })
        })
    }
    render(){
        return(
            <SafeAreaView style={Styles.container}>
            {this.state.singleBook ? (
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
            {this.state.singleBook.volumeInfo.imageLinks && 
            <Image style={Styles.imgMed} source={{ uri: this.state.singleBook.volumeInfo.imageLinks.medium }} />} 
            <Text style={Styles.title}>{this.state.singleBook.volumeInfo.title}</Text>
            <Text style={Styles.title}>{this.state.singleBook.volumeInfo.authors[0]}</Text>
            <Text style={Styles.subTitle}>{this.state.singleBook.volumeInfo.description}</Text>
            </ScrollView>
            ): <Text style={Styles.title}>Loading...</Text>}
            </SafeAreaView>
        )
    }
}

export default ShowBook;