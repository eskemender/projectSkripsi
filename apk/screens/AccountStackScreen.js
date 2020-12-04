import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer, DarkTheme } from '@react-navigation/native';
import DrawerContent from './DrawerContent';
import { Avatar } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme } from 'react-native-paper';
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


import AccountScreen from './AccountScreen'
import { TouchableOpacity } from 'react-native-gesture-handler';




const AccountStack = createStackNavigator();


const AccountStackScreen =({navigation}) =>
(
  <AccountStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#FFFF',
    },
    headerTintColor: '#000',
    headerTitleStyle:
    {
      fontWeight: 'bold',
      alignSelf: 'center',
    },
  }}>
    <AccountStack.Screen name="Akun" component={AccountScreen} 
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
  </AccountStack.Navigator>
);


export default AccountStackScreen;