import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName = 'FirstPage' 
        screenOptions = {{
          headerStyle:{backgroundColor: 'black'},
          headerTintColor: 'white',
          headerTitleStyle:{fontWeight: 'bold'},
        }}
      >
        <Stack.Screen 
          name='FirstPage' 
          component={FirstPage} 
          options={{title:'FirstPage'}}
        />
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
    </NavigationContainer>
  );
}

export default App
