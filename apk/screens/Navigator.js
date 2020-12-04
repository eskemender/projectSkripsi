import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import AccountScreen from './AccountScreen';
import AccountScreenEdit from './AccountScreenEdit'
import JualanScreen from './JualanStackScreen'
import icontes from './pictures/cart.jpg'
import iconprofil from './pictures/profil.jpg'
import iconhome from './pictures/home.jpg'
import iconhistory from './pictures/history.jpg'
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

import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import { Title } from 'react-native-paper';


const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const CartStack =createStackNavigator();
const AccountStack = createStackNavigator();

const HomeStackScreen = () => (
  
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} 
            />
          <HomeStack.Screen name="Jualan" component={JualanScreen}/>
    </HomeStack.Navigator>
);
const CartStackScreen = () => (
    <CartStack.Navigator>
        <CartStack.Screen name="Cart" component={CartScreen} />
    </CartStack.Navigator>
);
const AccountStackScreen = () => (
    <AccountStack.Navigator>
        <AccountStack.Screen name="Account" component={AccountScreen} />
        <AccountStack.Screen name="EditAkun" component={AccountScreenEdit} />
    </AccountStack.Navigator>
);


const Nav =() =>{
  
  return(

    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#000"
        style={{ backgroundColor: 'tomato'}}>
            <Tab.Screen 
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#C4C4C4',
                tabBarIcon: ({color})=> (
                    <Image source={iconhome} style={{width: 25, height: 25}}/>
                ),
            }}
            />
            <Tab.Screen 
            name="Cart"
            component={CartStackScreen}
            options={{
                tabBarLabel: 'Pesanan',
                tabBarColor: '#BFEAFF',
                tabBarIcon: ({color})=> (
                    <Image source={icontes} style={{width: 25, height: 25}}/>
                ),
            }}
            />
            <Tab.Screen 
            name="Account"
            component={AccountStackScreen}
            options={{
                tabBarLabel: 'Profil',
                tabBarColor: '#009387',
                tabBarIcon: ({color})=> (
                    <Image source={iconprofil} style={{width: 25, height: 25}}/>
                ),
            }}
            />
        </Tab.Navigator>


)
};




export default Nav;