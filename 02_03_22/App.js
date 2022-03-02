import React from 'react';

import { View, Image, TouchableOpacity } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';

import HomeScreen_1 from "./screens/HomeScreen_1";
import AboutScreen from "./screens/AboutScreen";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";
import MenuScreen from "./screens/MenuScreen";
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //structure for navigation drawer
  const toggleDrawer = () => {
      props.navigationProps.toggleDrawer();
  };
  return (
    <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image 
          source={require('C:/Users/HP/reactProject/assets/drawerWhite.png')} 
          style={{height:25, width:25, marginLeft:5}}
        />
      </TouchableOpacity>
    </View>
  );
}

function FirstScreenStack({navigation}) {
  return (
    <Stack.Navigator 
        initialRouteName = 'HomeScreen' 
        screenOptions = {{
          headerStyle:{backgroundColor: 'skyblue'},
          headerTintColor: 'white',
          headerTitleStyle:{fontWeight: 'bold'},
          headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation}/>,
        }}
      >
        <Stack.Screen 
          name='Home' 
          component={HomeScreen_1} 
          options={{title:'Home'}}
        />
        <Stack.Screen 
          name='About' 
          component={AboutScreen} 
          options={{title:'About'}}
        />
        <Stack.Screen 
          name='Register' 
          component={RegisterScreen} 
          options={{title:'RegisterScreen'}}
        />
        <Stack.Screen 
          name='Login' 
          component={LoginScreen} 
          options={{title:'Login'}}
        />
    </Stack.Navigator>
  );
}

function SecondScreenStack({navigation}) {
  return (
    <Stack.Navigator 
        initialRouteName = 'ProductScreen' 
        screenOptions = {{
          headerStyle:{backgroundColor: 'skyblue'},
          headerTintColor: 'white',
          headerTitleStyle:{fontWeight: 'bold'},
          headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation}/>,
        }}
      >
        <Stack.Screen 
          name='ProductScreen' 
          component={ProductScreen} 
          options={{title:'ProductScreen'}}
        />
        <Stack.Screen 
          name='DetailScreen' 
          component={DetailScreen} 
          options={{title:'DetailScreen'}}
        />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerContentOptions={{ activeTintColor:'pink', itemStyle:{marginVertical:5} }}
        drawerContent = {(props)=><MenuScreen {...props}/>}
      >
        
        <Drawer.Screen 
          name='FirstScreenStack' 
          component={FirstScreenStack} 
          options={{
            drawerLabel:'FirstScreenStack'
            }}
          />
        <Drawer.Screen name='SecondScreenStack' component={SecondScreenStack}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App
