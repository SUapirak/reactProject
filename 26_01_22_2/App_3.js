import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, View } from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Button 
        title='go to notifications'
        onPress={() => navigation.navigate('Notifications')}
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Button 
        title='go back home'
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component= {HomeScreen}/>
        <Drawer.Screen name='Notifications' component= {NotificationsScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

