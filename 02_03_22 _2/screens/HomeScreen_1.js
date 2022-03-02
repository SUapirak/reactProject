import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import {
    HeaderButtons,
    HeaderButton,
    Item,
    HiddenItem,
    OverflowMenu,
  } from 'react-navigation-header-buttons';

import {userStoreContext} from '../context/UserContext';

const IoniconsHeaderButton = (props) => (
    // the `props` here come from <Item ... />
    // you may access them and pass something else to `HeaderButton` if you like
    <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const HomeScreen_1 = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            /* headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                    <Item
                     title="menu"
                     iconName="menu"
                     onPress={() => alert('method menu')}
                    />
                </HeaderButtons>
            ), */
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                    <Item
                     title="register"
                     iconName="person-add"
                     onPress={() => navigation.navigate('Register')}
                    />
                </HeaderButtons>
            // <Button onPress={() => alert('Test')} title="register" />
            ),
        });
      }, [navigation]);

      // userstore to receive data
      const userStore = React.useContext(userStoreContext);

    return (
        <View style={styles.container}>
      <Ionicons name="home-outline" size={30} color="#f4511e" />
      {
          userStore.profile && (
            <>
              <Text>ยินดีต้อนรับ: {userStore.profile.name}</Text>
              <Text>อีเมล: {userStore.profile.email}</Text>
            </>
          )
        }
      <Text>หน้าหลัก</Text>
      <Button
        title="Go to About"
        onPress={() =>
          navigation.navigate('About', {email: 'su.apirat_st@tni.ac.th'})
        }  
      />
    </View>
    )
}

export default HomeScreen_1

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        color:'black'
    },
    textColor:{
        color:'black'
    }
})
