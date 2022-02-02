import React from 'react';

import { View, Image, TouchableOpacity } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import CustomSidebarMenu from './pages/CustomSidebarMenu';

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
        initialRouteName = 'FirstPage' 
        screenOptions = {{
          headerStyle:{backgroundColor: 'black'},
          headerTintColor: 'white',
          headerTitleStyle:{fontWeight: 'bold'},
          headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation}/>,
        }}
      >
        <Stack.Screen 
          name='FirstPage' 
          component={FirstPage} 
          options={{title:'FirstPage'}}
        />
    </Stack.Navigator>
  );
}

function SecondScreenStack({navigation}) {
  return (
    <Stack.Navigator 
        initialRouteName = 'SecondPage' 
        screenOptions = {{
          headerStyle:{backgroundColor: 'black'},
          headerTintColor: 'white',
          headerTitleStyle:{fontWeight: 'bold'},
          headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation}/>,
        }}
      >
        <Stack.Screen 
          name='SecondPage' 
          component={SecondPage} 
          options={{title:'SecondPage'}}
        />
        <Stack.Screen 
          name='ThirdPage' 
          component={ThirdPage} 
          options={{title:'ThirdPage'}}
        />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerContentOptions={{ activeTintColor:'pink', itemStyle:{marginVertical:5} }}
        drawerContent = {(props)=><CustomSidebarMenu {...props}/>}
      >
        
        <Drawer.Screen 
          name='FirstPage' 
          component={FirstScreenStack} 
          options={{
            drawerLabel:'FP'
            }}
          />
        <Drawer.Screen name='SecondPage' component={SecondScreenStack}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App
