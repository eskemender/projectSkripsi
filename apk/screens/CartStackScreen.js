import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import menuicon from './pictures/menu.jpg';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  StatusBar,
} from 'react-native';

import CartScreen from './CartScreen'
import { TouchableOpacity } from 'react-native-gesture-handler';




const CartStack = createStackNavigator();

const CartStackScreen =({navigation}) =>
(
  <CartStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#FFF',
    },
    headerTintColor: '#000',
    headerTitleStyle:
    {
      fontWeight: 'bold',
      alignSelf: 'center',
    },
  }}>
    <CartStack.Screen name="Cart" component={CartScreen} 
    options={{
      title: 'Gaslon',
      headerLeft:() => 
      (
        <View style={{marginLeft:10}}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={menuicon} style={{width: 25, height: 25}}/>
          </TouchableOpacity>
        </View>
      ),
      headerRight:() => 
      (
        <TouchableOpacity style={{marginRight:10}} onPress={() => navigation.navigate('Home')}>
        <Text>BACK </Text>
        </TouchableOpacity>
      ),

    }} />
  </CartStack.Navigator>
);


export default CartStackScreen;