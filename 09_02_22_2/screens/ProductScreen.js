import React, {useState, useEffect} from 'react'
import { StyleSheet, View, ActivityIndicator, FlatList } from 'react-native'
import axios from 'axios';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Badge } from 'native-base';

import Ionicons from 'react-native-vector-icons/Ionicons'

import {
    HeaderButtons,
    HeaderButton,
    Item,
    HiddenItem,
    OverflowMenu,
  } from 'react-navigation-header-buttons';

const IoniconsHeaderButton = (props) => (
    // the `props` here come from <Item ... />
    // you may access them and pass something else to `HeaderButton` if you like
    <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const ProductScreen = ({navigation}) => {

    const [product,setProduct] = useState([]);

    //useeffect
    useEffect (() => {
        //getdata() to get data from backend
        const getData = async () => {
            const res = await axios.get('https://api.codingthailand.com/api/course')
            //alert(JSON.stringify(res.data.data)) //res.axiosdata.arrayname
            setProduct(res.data.data);
        }

        getData();
    },[])

    return (
        <View >
            <FlatList
                //data use to loop and show backend
                data = {product}

                //keyextractor to get key
                keyExtractor = {(item, index) => item.id.toString() }

                //renderitem to render ui
                renderItem = {({item}) => (
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={{ uri: item.picture }} />
                        </Left>
                        <Body>
                            <Text>{item.title}</Text>
                            <Text note numberOfLines={1}>{item.detail}</Text>
                        </Body>
                        <Right>
                            <Badge danger>
                                <Text>{item.view}</Text>
                            </Badge>
                        </Right>
                    </ListItem>
                )}

                
            />
        </View>
    )
}

export default ProductScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        color:'black'
    },
    textColor:{
        color:'black'
    }
})
