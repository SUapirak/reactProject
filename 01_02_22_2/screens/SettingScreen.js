import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import React from 'react';

const SettingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <Text style={styles.textColor}>Setting</Text>
            <Button title='to home tab' onPress={() => navigation.navigate('HomeScreen')} />
            <Button title='to profile stack' onPress={() => navigation.navigate('ProfileScreen')} />
        </View>
    </SafeAreaView>
    
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
    textColor:{
        color:"black"
    },
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
});
