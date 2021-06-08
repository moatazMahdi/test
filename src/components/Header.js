import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Header  = () =>{
    return(
        <View style = {styles.viewStyle}>
            <Text style = {styles.textstyle}>News App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textstyle:{
        color : '#000',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default Header;