import { View, Text, Button, SafeAreaView } from 'react-native';
import React from 'react';
import { styles } from '../components/Styles';

const FirstPage = ({navigation}) => {
  return (
    <SafeAreaView style = {{flex:1, backgroundColor:'red'}}>
        <View style = {{flex:1,padding:15, backgroundColor:'green'}}>
            <View style = {styles.container}>
                <Text style = {styles.textTopStyle}>
                    This is the first page.
                </Text>
                <Button 
                    title="Go to Second Page"
                    onPress={() => navigation.navigate('SecondPage')}
                />
                <Button 
                    title="Go to Third Page"
                    onPress={() => navigation.navigate('ThirdPage')}
                />
            </View>
            <Text style = {styles.textBottomStyle}>
                Thai-Nichi Institute of Technology
            </Text>
        </View>
    </SafeAreaView>
  );
};

export default FirstPage;
