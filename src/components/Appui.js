import React, { Component } from "react";
import {View} from 'react-native';
import BooksList from "./BooksList";
import Header from './Header';

class Appui extends Component{
    render(){

        return(
            <View>
                <Header/>
                <BooksList/>
            </View>
        );
    }
}

export default Appui;