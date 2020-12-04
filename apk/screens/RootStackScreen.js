import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import MainTabScreen from './NavigatorPenjual';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import AccountScreen from './AccountScreen';
import JualanScreen from './JualanScreen';
import Nav from './Navigator';
import HomeScreenPenjual from './HomeScreenPenjual';
import AccountScreenEdit from './AccountScreenEdit';
import HistoryScreenPenjual from './HistoryScreenPenjual';
import ProfileScreenPenjual from './ProfileScreenPenjual';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) =>
(
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name ="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name ="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name ="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name ="MainTabScreen" component={MainTabScreen}/>
        <RootStack.Screen name ="Home" component={HomeScreen}/>
        <RootStack.Screen name ="Cart" component={CartScreen}/>
        <RootStack.Screen name ="Akun" component={AccountScreen}/>
        <RootStack.Screen name ="Jualan" component={JualanScreen}/>
        <RootStack.Screen name ="AkunEdit" component={AccountScreenEdit}/>
        <RootStack.Screen name="HomePenjual" component={HomeScreenPenjual}/>
        <RootStack.Screen name="HistoryPenjual" component={HistoryScreenPenjual}/>
        <RootStack.Screen name="ProfilePenjual" component={ProfileScreenPenjual}/>
        <RootStack.Screen name ="Nav" component={Nav}/>
        {/* <RootStack.Screen name ="Home" component={HomeScreen}/> */}

    </RootStack.Navigator>
)


export default RootStackScreen;