import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
    Image,
  } from 'react-native';
import { TextInput, Title } from 'react-native-paper';
import { Icon } from 'react-native-vector-icons';
import logo from './pictures/logogaslon.jpg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import icontes from './pictures/cart.jpg'
import iconprofil from './pictures/profil.jpg'
import iconhome from './pictures/homeicon.jpg'


const HomeScreenPenjual = ({navigation}) => {
    return (
      <View style={styles.container}>
         <View style={{flexDirection: "row", alignSelf: "flex-end", marginRight: 8, marginTop: 10}}>
          <Text style={{fontSize: 17, marginRight: 5, fontWeight: 'bold'}}>Status</Text>
          <View style={{backgroundColor: '#000', width: 60, height: 30}}> 
          <TouchableOpacity>
            <Text style={{fontSize: 17, color: '#24CE35', alignSelf: "center"}}>Active</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.items}>
          
          <Image source={logo} style={styles.logostyle}/>
          <Text style={{fontSize: 18, fontWeight: "bold", marginBottom: 10}}>Daftar Pesanan Masuk</Text>
          
          <View style={styles.boxitem}>

          </View>
        
        </View>
        <View style={{backgroundColor: '#fff', position: "absolute", left: 0, right: 0, bottom: 0}}>
              <View style={{flexDirection: "row", justifyContent: "space-evenly", padding: 5}}>
                <View> 
                  <TouchableOpacity
                   onPress={()=> navigation.navigate('HomePenjual')}
                  >
                    <Image source={iconhome} style={{width: 30, height:30}} />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                  onPress={()=> navigation.navigate('HistoryPenjual')}>
                    <Image source={icontes} style={{width: 30, height:30}} />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                  onPress={()=> navigation.navigate('ProfilePenjual')}>
                    <Image source={iconprofil} style={{width: 30, height:30}} />
                  </TouchableOpacity>
                </View>
                

              </View>
            </View>
        
      </View>
     
      
    )
  };

  const styles = StyleSheet.create ({
    container :{
      flex: 1,
      backgroundColor: '#fff'
    },
    items: {
      flex: 1,
      alignItems: 'center'
    },
    logostyle:{
      width: 180,
      height: 180
    },
    boxitem: {
      width:380,
      height: 300,
      backgroundColor: '#c4c4c4'
    }
  })



  export default HomeScreenPenjual;