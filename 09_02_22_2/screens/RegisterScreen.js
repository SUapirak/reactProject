import { View, Text } from 'react-native'
import React from 'react'

import {
    HeaderButtons,
    HeaderButton,
    Item,
    HiddenItem,
    OverflowMenu,
  } from 'react-navigation-header-buttons';
import { HeaderBackButton } from '@react-navigation/stack';

const RegisterScreen = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderBackButton onPress={() => navigation.goBack()} tintColor="white"/>
            ),
        });
      });
  return (
    <View>
      <Text style={{color:"black"}}>RegisterScreen</Text>
    </View>
  )
}

export default RegisterScreen