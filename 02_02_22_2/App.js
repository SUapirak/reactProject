import { View, Text, Image } from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreenStack({navigation}) {
  return (
    <Stack.Navigator 
        initialRouteName = 'HomeScreen' 
        screenOptions = {{
          headerStyle:{backgroundColor: 'green'},
          headerTintColor: 'white',
          headerTitleStyle:{fontWeight: 'bold'},
        }}
      >
        <Stack.Screen 
          name='HomeScreen' 
          component={HomeScreen} 
          options={{title:'Home Page'}}
        />
    </Stack.Navigator>
  );
}

function SettingScreenStack({navigation}) {
  return (
    <Stack.Navigator 
        initialRouteName = 'SettingScreen' 
        screenOptions = {{
          headerStyle:{backgroundColor: 'green'},
          headerTintColor: 'white',
          headerTitleStyle:{fontWeight: 'bold'},
        }}
      >
        <Stack.Screen 
          name='SettingScreen' 
          component={SettingScreen} 
          options={{title:'Setting Page'}}
        />
        <Stack.Screen 
          name='ProfileScreen' 
          component={ProfileScreen} 
          options={{title:'Profile Page'}}
        />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={
          ({route}) => 
            ({
              tabBarIcon: ({focused, color})=>
                {
                  let iconName;
                  if (route.name === "Home") {
                  iconName = focused
                    ?require('./assets/logo1.png')
                    :require('./assets/logo2.png');
                  }else if (route.name === "Setting") {
                    iconName = focused
                      ?require('./assets/logo1.png')
                      :require('./assets/logo3.png');
                  }
                  return <Image source = {iconName} style = {{height: 30, width:30}}/>
                }
            })
        }
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name='Home' component={HomeScreenStack}/>
        <Tab.Screen name='Setting' component={SettingScreenStack}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
