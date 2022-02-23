import React, {useState, useEffect} from 'react';
import { StyleSheet, View, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Badge } from 'native-base';

import { HeaderBackButton } from '@react-navigation/stack';

const DetailScreen = ({navigation, route}) => {

  const {id,title} = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title:title,
      headerLeft: () => (
        <HeaderBackButton onPress={() => navigation.goBack()} tintColor="white"/>
      ),
    })
  },[navigation]);

  const [detail,setDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  //getdata() to get data from backend
  const getData = async (id) => {
    setLoading(true);
    const res = await axios.get('https://api.codingthailand.com/api/course/'+id)
    //alert(JSON.stringify(res.data.data)) //res.axiosdata.arrayname
    setDetail(res.data.data);
    setLoading(false)
  }

  //useeffect run when navigate to productscreen. only run once.
     useEffect (() => {
        getData(id);
    },[id])

  if (loading === true) {
    return(
        <View style={styles.container}>
            <ActivityIndicator color='black' size='large'/>
        </View>
    )
  }

  const _onRefresh = () => {
    getData(id);
  }

  return (
    <View >
        <FlatList
                //data use to loop and show backend
                data = {detail}

                //keyextractor to get key
                keyExtractor = {(item, index) => item.ch_id.toString() }

                //pull to refresh
                onRefresh={_onRefresh}
                refreshing={loading} //if refreshing true wait for data

                //renderitem to render ui
                renderItem = {({item, index}) => (
                    <ListItem thumbnail>
                        <Left>
                        <Text>{++index}</Text>
                        </Left>
                        <Body>
                            <Text>{item.ch_title}</Text>
                        </Body>
                        <Right>
                            <Badge danger>
                                <Text>{item.ch_view}</Text>
                            </Badge>
                        </Right>
                    </ListItem>
                )}

                
            />
      </View>
  )
}

export default DetailScreen

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