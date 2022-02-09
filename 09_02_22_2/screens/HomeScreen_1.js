import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

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

const HomeScreen_1 = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            /* headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                    <Item
                     title="menu"
                     iconName="menu"
                     onPress={() => alert('method menu')}
                    />
                </HeaderButtons>
            ), */
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                    <Item
                     title="register"
                     iconName="person-add"
                     onPress={() => navigation.navigate('Register')}
                    />
                </HeaderButtons>
            // <Button onPress={() => alert('Test')} title="register" />
            ),
        });
      }, [navigation]);

    return (
        <View style={styles.container}>
            <Ionicons name='home' size={30} color={'skyblue'}/>
            <Text style={styles.textColor}>Main Page</Text>
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About',{email:'su.apirak_st@tni.ac.th'})}
            />
        </View>
    )
}

export default HomeScreen_1

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
