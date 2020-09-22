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
        })
    }
    componentDidMount() {
        this.setState({
            isLoaded: true,
        })
    }

    decideWhichToRender() {
        switch(this.state.currentPage) {
            default: case 'home':
                return <Home />
            case 'search':
                return <Search />
            case 'profile':
                return <Profile />
        }
    }
    render(){
        return(
            <>
            {(this.state.isLoaded) ? this.decideWhichToRender() : <Text>Loading...</Text>}
            </>
        )
    }
}

export default StateController;