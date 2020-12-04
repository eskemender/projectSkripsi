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


// import HomeScreen from './HomeScreen'
// import AccountScreen from './AccountScreen'
// import CartScreen from './CartScreen'
import HomeStackScreen from './HomeStackScreen'
import AccountStackScreen from './AccountStackScreen'
import CartStackScreen from './CartStackScreen'
import JualanScreen from './JualanScreen'
import AccountScreenEdit from './AccountScreenEdit'
import RootStackScreen from './RootStackScreen'
import HomePenjualStackScreen from './NavigatorPenjual'
import MainTabScreen from './NavigatorPenjual'
import { TouchableOpacity } from 'react-native-gesture-handler';


const AccountEditStack = createStackNavigator();


const AccountEditStackScreen =({navigation}) =>
(
  <AccountEditStack.Navigator screenOptions={{
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
    <AccountEditStack.Screen name="Home" component={AccountScreenEdit} options={{
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
  </AccountEditStack.Navigator>
)


export default AccountEditStackScreen;