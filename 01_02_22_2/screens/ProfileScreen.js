import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import React from 'react';

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <Text style={styles.textColor}>Profile</Text>
        </View>
    </SafeAreaView>
    
  );
};

export default ProfileScreen;

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
