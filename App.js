/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer, DarkTheme } from '@react-navigation/native';
import DrawerContent from './screens/DrawerContent';
import HomeStackScreen from './screens/HomeStackScreen'
import AccountStackScreen from './screens/AccountStackScreen'
import CartStackScreen from './screens/CartStackScreen'
import AccountEditStackScreen from './screens/AccountEditStackScreen'
import JualanStackScreen from './screens/JualanStackScreen'
import RootStackScreen from './screens/RootStackScreen'
import MainTabScreen from './screens/NavigatorPenjual'
import Nav from './screens/Navigator.js'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';
import { AuthContext } from './screens/component/context';


const Drawer = createDrawerNavigator();

const App =() => {

  return(

    
  
      <NavigationContainer >
           {/* <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {... props} />}>
           <Drawer.Screen name="Home" component={HomeStackScreen}/>
           <Drawer.Screen name="Akun" component={AccountStackScreen}/>
           <Drawer.Screen name="Cart" component={CartStackScreen}/>
           <Drawer.Screen name="Jualan" component={JualanStackScreen}/>
           <Drawer.Screen name="EditAkun" component={AccountEditStackScreen}/>
   
         </Drawer.Navigator>  */}
        
      
      {/* <Nav /> */}
      <RootStackScreen />
      
     
      {/* <MainTabScreen />  */}
     
      
      </NavigationContainer>
    
  )
}
export default App;





// const App =() => {

//   // const [isLoading, setIsLoading] = React.useState(true);
//   // const [userToken, setUserToken] = React.useState(null);
//   initialLoginState = {
//     isLoading: true,
//     userName: null,
//     usesrToken: null,
//   };

//   const loginReducer = (prevState, action) =>{
//     switch( action.type ) {
//       case 'RETRIEVE_TOKEN':
//         return {
//           ... prevState,
//           userToken: action.token, 
//           isLoading: false,
//         };
//       case 'LOGIN':
//         return {
//           ... prevState,
//           userName: action.id,
//           userToken: action.token, 
//           isLoading: false,};
//       case 'LOGOUT':
//         return {
//           ... prevState,
//           userName: null,
//           userToken: null,
//           isLoading: false,};
//       case 'REGISTER':
//         return {
//           ... prevState,
//           userName: action.id,
//           userToken: action.token, 
//           isLoading: false,};
        
            
//     }
//   };
  
//   const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)
//   const authContext = React.useMemo(() => ({
//     signIn: () => {
//       setUserToken('fkgj');
//       setIsLoading(false);
//     },
//     signOut: () => {
//       setUserToken(null);
//       setIsLoading(false);
//     },
//     signUp: () => {
//       setUserToken('fkgj');
//       setIsLoading(false);
//     },
//   }), []);
//   useEffect(() => {
//     setTimeout (() => {
//       setIsLoading(false);
//     }, 1000);
//   }, []);


//   if (isLoading ){
//     return(
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <ActivityIndicator size="large"/>
//       </View>
//     )
//   }
//   return(

    
//     <AuthContext.Provider value ={authContext}>
//       <NavigationContainer >
//         { userToken ? (
//            <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {... props} />}>
//            <Drawer.Screen name="Home" component={HomeStackScreen}/>
//            <Drawer.Screen name="Akun" component={AccountStackScreen}/>
//            <Drawer.Screen name="Cart" component={CartStackScreen}/>
//            <Drawer.Screen name="Jualan" component={JualanStackScreen}/>
//            <Drawer.Screen name="EditAkun" component={AccountEditStackScreen}/>
   
//          </Drawer.Navigator> 
//         )
      
//       :
//       <RootStackScreen />
//       }
     
//       {/* <MainTabScreen />  */}
     
      
//       </NavigationContainer>
    
//    </AuthContext.Provider>
    
//   )
// }
// export default App;
