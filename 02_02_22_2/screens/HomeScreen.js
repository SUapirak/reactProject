import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <Text style={styles.textColor}>home</Text>
            <Button title='to setting tab' onPress={() => navigation.navigate('SettingScreen')} />
        </View>
    </SafeAreaView>
    
  );
};

export default HomeScreen;

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
