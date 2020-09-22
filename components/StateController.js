import React, {Component} from 'react';
import Styles from './Styles';
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import { TouchableWithoutFeedback, Button, View, Image, Text, Keyboard, TextInput } from 'react-native';

class StateController extends Component {
    constructor(props){
        super(props)
        this.state=({
            isLoaded: false,
            currentPage: props.currentPage,
            baseUrl: 'https://damp-oasis-30141.herokuapp.com/api/v1',
            publicShelfBooks: null,
            searchResults: null,
        })
    }
    componentDidMount() {
        if(this.state.currentPage === 'home'){
            this.getPublicBooks()
        }
        else{
            this.setState({
                isLoaded: true,
            })
        }
    }

    getPublicBooks = () => {
        fetch(`http://localhost:3000/api/v1/books/home`)
        .then(books => books.json())
        .then(books => {
            this.setState({
                publicShelfBooks: books,
                isLoaded: true,
            })
        })
    }

    searchBooks = (query) => {
        fetch(`http://localhost:3000/api/v1/books/search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                search: query
            })
        })
        .then(res => res.json())
        .then(res => {
            this.setState({
                searchResults: res
            })
        })
    }

    decideWhichToRender() {
        switch(this.state.currentPage) {
            default: case 'home':
                return <Home books={this.state.publicShelfBooks}/>
            case 'search':
                return <Search searchFunc={this.searchBooks} results={this.state.searchResults}/>
            case 'profile':
                return <Profile />
        }
    }
    render(){
        return(
            <>
            {(this.state.isLoaded) ? this.decideWhichToRender() : <Text style={Styles.title}>Loading...</Text>}
            </>
        )
    }
}

export default StateController; 