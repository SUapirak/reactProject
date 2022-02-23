import React, {useState, useEffect} from 'react';
import { StyleSheet, View, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Badge } from 'native-base';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { useFocusEffect } from '@react-navigation/native';

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
    const [loading, setLoading] = useState(false);

    let cancelToken;

    //getdata() to get data from backend
    const getData = async () => {
        setLoading(true);
        const res = await axios.get('https://api.codingthailand.com/api/course',{
            cancelToken : cancelToken.token
        })
        //alert(JSON.stringify(res.data.data)) //res.axiosdata.arrayname
        setProduct(res.data.data);
        setLoading(false)
    }

    //run every time productscreen is focus
    useFocusEffect(
        //usecallback stop child component from rerendering
        React.useCallback(() => {
            cancelToken = axios.CancelToken.source();
            getData();
            
            // run on exit screen
            return () => {
                alert('exit productscreen');
                cancelToken.cancel();
            }
        },[])
    );

    //useeffect run when navigate to productscreen. only run once.
    /* useEffect (() => {
        getData();
    },[])*/

    if (loading === true) {
        return(
            <View style={styles.container}>
                <ActivityIndicator color='black' size='large'/>
            </View>
        )
    } 

    const _onRefresh = () => {
        cancelToken = axios.CancelToken.source();
        getData();
    }

    return (
        <View >
            <FlatList
                //data use to loop and show backend
                data = {product}

                //keyextractor to get key
                keyExtractor = {(item, index) => item.id.toString() }

                //pull to refresh
                onRefresh={_onRefresh}
                refreshing={loading} //if refreshing true wait for data

                //renderitem to render ui
                renderItem = {({item}) => (
                    <ListItem thumbnail onPress={() => {
                        navigation.navigate('DetailScreen',{
                            id:item.id,
                            title:item.title //get title from back end and sent it to title to use at detailscreen
                        })
                    }}>
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
