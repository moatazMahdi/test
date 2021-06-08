import React, { Component } from "react";
import {StyleSheet, View, Text, FlatList,Image,TouchableOpacity,} from 'react-native';
import axios from 'axios';
import Time from './Time';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class BooksListView extends Component({navigation}){

    constructor(props){
        super(props);
        this.state = {
            articles: []
        };
    }

componentWillMount(){

    const URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=96fb1c0a4f894c418b2c151ff96bb11f'
    axios.get(URL).then((response) =>{
        const articles  = response.data.articles
        this.setState({
            articles});
        this.updateTimer();
    });
}

renderNewsItem = ({item}) =>{return(
    <View style = {styles.viewmain}>
        <TouchableOpacity onPress={() => navigation.navigate('WiebView', item.url)} >
            <View style = {styles.viewcontener}>
                <Image source={{ uri: item.urlToImage}} style = {styles.imagestyle}/>
            </View>
            <View  style = {styles.viewtext}>
                <Text  numberOfLines={2} style = {{fontSize:16,fontStyle:'bold',}}>{item.title}</Text>
                <Text  numberOfLines={3} style = {{fontSize:14,fontStyle:'normal',color:"#808080"}}>{item.description}</Text>
                <View style = {{flexDirection: "row",marginTop:10,}}>
                    <View style = {{flexDirection: "row",alignItems:"center",}}>
                        <Icon name="calendar" size={19} color="#fb9300"/>
                        <Time>{item.publishedAt}</Time>
                    </View>
                    <View style = {styles.btview}>
                    <TouchableOpacity onPress={() => {item.url}}>
                        <Text style = {styles.txseemore}>See More</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>


        </TouchableOpacity>

    </View>

);}

keyExtractor = (item,index) => index;  
render(){
    return(
        <View style = {{backgroundColor:"#fff",marginBottom:150}}>
            <FlatList
                data = {this.state.articles}
                renderItem = {this.renderNewsItem}
                keyExtractor = {this.keyExtractor}
            
            />
            
            </View>
    );

}

}

const styles = StyleSheet.create({
    viewmain:{
        flex:1,
        height:"100%",
        margin:10,  
        backgroundColor:"#f5e6ca",
        borderWidth:1,borderRadius:12,
        borderColor:"#fb9300",
    },

    viewcontener:{
        width: '100%',
        height: 200,
        backgroundColor: '#000',
        borderRadius:10,
    },
    imagestyle:{
        height: '100%',
        width : '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10,
    },
    viewtext:{
        height:'50%',
        width : '100%',
        padding: 15,
        
    },

    btview:{
        alignItems:"center",
        justifyContent:"center",
        marginLeft:"50%",
        
    },
    txseemore:{
        color: "#fb9300",
        fontSize:16,
        fontStyle:"italic"
    }

});

export default BooksListView;