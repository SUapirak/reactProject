import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const AboutScreen = ({route}) => {
    const {email} = route.params;
    return (
        <View style={(styles.container)}>
            <Text style={(styles.textColor)}>about page</Text>
            <Text style={(styles.textColor)}>Email : {email}</Text>
        </View>
    )
}

export default AboutScreen

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
