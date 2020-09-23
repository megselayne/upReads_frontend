import React, {Component} from 'react';
import { TouchableOpacity, View, Text, FlatList, SafeAreaView, Image } from 'react-native';
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
            <>
            <Text style={Styles.title}>Hello Show Book</Text>
            {this.state.singleBook && <Text style={Styles.title}>{this.state.singleBook.volumeInfo.title}</Text>}
            </>
        )
    }
}

export default ShowBook;