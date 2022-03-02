import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Container, Header, Content, Item, Input, Label, Button, Icon, Form } from 'native-base';
import axios from 'axios';

import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import { HeaderBackButton } from '@react-navigation/stack';

const validateSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('type email'),
  password: Yup.string().min(3,'must have at least 4').required('type password'),
});

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

const LoginScreen = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                //<HeaderBackButton onPress={() => navigation.goBack()} tintColor="white"/>
                <NavigationDrawerStructure navigationProps={navigation}/>
            ),
        });
      });
  return (
    <Container>
      <Content padder>
      <Formik
      //initial value must be the same as backend
       initialValues={{
         email: '',
         password: '',
       }}
       validationSchema={validateSchema}

       //click on register
       onSubmit={async(values, {setSubmitting}) => {
         // same shape as initial values
         // console.log(values);
         // alert(JSON.stringify(values));
         try {
           const url = 'https://api.codingthailand.com/api/register';
           const res = await axios.post(url, {
             email : values.email,
             password : values.password
           });
           alert(res.data.message)
           //back to home
           navigation.navigate('Home');
         } catch (error) { // if cant register ex. duplicate email
           alert(error.response.data.errors.email[0]);
         }
         finally { //reenable button
          setSubmitting(false);
         }
       }}
      >
        {/* errors is used for checking state of error (if user dont type run what error)
        user click at name then move their cursor out of name without typing */}
       {({ errors, touched, values, handleChange, handleBlur, handleSubmit, isSubmitting }) => ( 
          <Form>
            <Item fixedLabel last error={errors.email && touched.email? true:false}>
              <Label>Email</Label>
              <Input 
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                keyboardType='email-address'
              />
              {errors.email && touched.email && <Icon name='close-circle'/>}
            </Item>
            {errors.email && touched.email && (
                <Item>
                  <Label style={{color:'red'}}>{errors.email}</Label>
                </Item>
            )}

            <Item fixedLabel last error={errors.password && touched.password? true:false}>
              <Label>Password</Label>
              <Input 
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                keyboardType='number-pad'
                secureTextEntry={true}
              />
              {errors.password && touched.password && <Icon name='close-circle'/>}
            </Item>
            {errors.password && touched.password && (
                <Item>
                  <Label style={{color:'red'}}>{errors.password}</Label>
                </Item>
            )}

            <Button 
              block 
              large 
              style={{marginTop:30, backgroundColor:'gray'}} 
              onPress={handleSubmit} // open/close buttonevent
              disabled = {isSubmitting}
            >
              <Text style={{color:'white', fontSize:15, fontWeight:'bold'}}>Login</Text>
            </Button>
          </Form>
        )}
      </Formik>
      </Content>
    </Container>
  )
}

export default LoginScreen