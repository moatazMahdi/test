import React, { Component } from 'react';
import { Text } from 'react-native';
import moment from "moment"



export default class Time extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Text style = {{marginLeft:10}}>{moment().format(" D MMMM YYYY")}</Text>
        );
    }
}



