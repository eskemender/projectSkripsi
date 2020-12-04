import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import HomeScreenPenjual from './HomeScreenPenjual';
import PesananScreenPenjual from './PesananScreenPenjual';
import HistoryScreenPenjual from './HistoryScreenPenjual';
import ProfileScreenPenjual from './ProfileScreenPenjual';
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
import HomeScreen from './HomeScreen';
import { create } from 'react-test-renderer';
import { Title } from 'react-native-paper';


const Tab = createMaterialBottomTabNavigator();
const HomePenjualStack = createStackNavigator();
const PesananPenjualStack =createStackNavigator();
const HistoryPenjualStack = createStackNavigator();
const ProfilePenjualStack = createStackNavigator();

const HomePenjualStackScreen = () => (
    <HomePenjualStack.Navigator>
        <HomePenjualStack.Screen name="HomePenjual" component={HomeScreenPenjual} 
        options={{
            title: 'Gaslon',
            headerLeft:() => 
      (
        <View style={{marginLeft:10}}>
          <Title>TEST</Title>
        </View>
      ),
        }}

            />
    </HomePenjualStack.Navigator>
);
const PesananPenjualStackScreen = () => (
    <PesananPenjualStack.Navigator>
        <PesananPenjualStack.Screen name="PesananPenjual" component={PesananScreenPenjual} />
    </PesananPenjualStack.Navigator>
);
// const HistoryPenjualStackScreen = () => (
//     <HistoryPenjualStack.Navigator>
//         <HistoryPenjualStack.Screen name="HistoryPenjual" component={HistoryScreenPenjual} />
//     </HistoryPenjualStack.Navigator>
// );
const ProfilePenjualStackScreen = () => (
    <ProfilePenjualStack.Navigator>
        <ProfilePenjualStack.Screen name="ProfilePenjual" component={ProfileScreenPenjual} />
        <ProfilePenjualStack.Screen name="HistoryPenjual" component={HistoryScreenPenjual} />
    </ProfilePenjualStack.Navigator>
);


const MainTabScreen =() =>
(
    <Tab.Navigator
        initialRouteName="HomePenjual"
        activeColor="#000"
        style={{ backgroundColor: 'tomato'}}>
            <Tab.Screen 
            name="HomePenjual"
            component={HomePenjualStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#C4C4C4',
                tabBarIcon: ({color})=> (
                    <Image source={iconhome} style={{width: 25, height: 25}}/>
                ),
            }}
            />
            <Tab.Screen 
            name="PesananPenjual"
            component={PesananPenjualStackScreen}
            options={{
                tabBarLabel: 'Pesanan',
                tabBarColor: '#BFEAFF',
                tabBarIcon: ({color})=> (
                    <Image source={icontes} style={{width: 25, height: 25}}/>
                ),
            }}
            />
            {/* <Tab.Screen 
            name="HistoryPenjual"
            component={HistoryPenjualStackScreen}
            options={{
                tabBarLabel: 'History',
                tabBarColor: '#FFF476',
                tabBarIcon: ({color})=> (
                    <Image source={iconhistory} style={{width: 25, height: 25}}/>
                ),
            }}
            /> */}
            <Tab.Screen 
            name="ProfilePenjual"
            component={ProfilePenjualStackScreen}
            options={{
                tabBarLabel: 'Profil',
                tabBarColor: '#009387',
                tabBarIcon: ({color})=> (
                    <Image source={iconprofil} style={{width: 25, height: 25}}/>
                ),
            }}
            />
        </Tab.Navigator>


);



export default MainTabScreen;