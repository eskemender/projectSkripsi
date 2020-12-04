import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Avatar } from 'react-native-paper'
import profilpic from './pictures/akun.jpg';
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


import HomeScreen from './HomeScreen'
import { TouchableOpacity } from 'react-native-gesture-handler';




const HomeStack = createStackNavigator();


const HomeStackScreen =({navigation}) =>
(
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#FFFF',
    },
    headerTintColor: '#000000',
    headerTitleStyle:
    {
      fontWeight: 'bold',
      alignSelf: 'center'
      
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
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
        <TouchableOpacity style={{marginRight:10}} onPress={() => {navigation.navigate('Akun')}}>
        <Avatar.Image source={profilpic} size={40}/>
        </TouchableOpacity>
      ),
      
    
    }} />
  </HomeStack.Navigator>
)


export default HomeStackScreen;