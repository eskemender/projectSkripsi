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
  
import { TouchableOpacity } from 'react-native-gesture-handler';
import fotoprofil from './pictures/akun.jpg';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import icontes from './pictures/cart.jpg'
import iconprofil from './pictures/profil.jpg'
import iconhome from './pictures/homeicon.jpg'




const AccountScreen = ({navigation}) => {
  
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: '#fff', height: 50, marginBottom: 10,}}>
          <View style={{flexDirection: "row"}}>
            <Text style={{position:  "absolute",marginLeft: 160, fontSize: 20, padding: 5, fontWeight: "bold", padding: 10}}>GASLON</Text>
            <View style={{marginLeft: 365, marginTop: 5}}> 
            </View>
          </View>
        </View>
        
        <View>
        <Text style={{
          textAlign: 'center',
          marginTop: 10,
          fontSize: 20,
          fontWeight: 'bold'
        }}>Profil</Text>
        <View style={styles.barcontainer}>
          
          <View>    
               <Image source={fotoprofil} style={{height: 130, width: 130, alignSelf: 'center', marginTop: 20}}></Image>
           
          </View>

        <View style={{flexDirection: "row"}}>
          <View style={{flexDirection: "column", position: "absolute", marginLeft: 20, marginTop: 30}}>
            <Text style={{marginBottom: 10}}>Nama</Text>
            <Text style={{marginBottom: 10}}>Username</Text>
            <Text style={{marginBottom: 10}}>Email</Text>
            <Text style={{marginBottom: 10}}>Alamat</Text>
            <Text style={{marginBottom: 10}}>No. Telepon</Text>

          </View>
          <View style={{flexDirection: "column", position: "absolute", marginLeft: 150, marginTop: 30}}>
          <Text style={{marginBottom: 10, fontWeight: "bold"}}>Raymond Tumiwa</Text>
          <Text style={{marginBottom: 10, fontWeight: "bold"}}>raymondtumiwa</Text>
          <Text style={{marginBottom: 10, fontWeight: "bold"}}>emailsaya@gmail.com</Text>
          <Text style={{marginBottom: 10, fontWeight: "bold"}}>Malalayang</Text>
          <Text style={{marginBottom: 10, fontWeight: "bold"}}>080899009900</Text>
          </View>
        </View>
        <TouchableOpacity 
        style={{backgroundColor: '#000', width: 50, borderRadius: 5,alignSelf: 'center', marginTop: 220}}
        onPress={() => navigation.navigate("AkunEdit")}>
          <Text style={{color: '#fff', alignSelf: 'center'}}>Edit</Text>
        </TouchableOpacity>
        </View>
        </View>
        
        <View style={{backgroundColor: '#fff', position: "absolute", left: 0, right: 0, bottom: 0}}>
              <View style={{flexDirection: "row", justifyContent: "space-evenly", padding: 5}}>
                <View> 
                  <TouchableOpacity
                   onPress={()=> navigation.navigate('Home')}
                  >
                    <Image source={iconhome} style={{width: 30, height:30}} />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                  onPress={()=> navigation.navigate('Cart')}>
                    <Image source={icontes} style={{width: 30, height:30}} />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                  onPress={()=> navigation.navigate('Akun')}>
                    <Image source={iconprofil} style={{width: 30, height:30}} />
                  </TouchableOpacity>
                </View>
                

              </View>
            </View>

            

       
        
      </View>
    )
  };


  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      backgroundColor: '#C4EAFF',
    },
    barcontainer: {
      alignSelf: "center",
      marginTop: 20,
      borderRadius:6,
      width:325,
      height: 450,
      backgroundColor: '#FFFFFF',
      borderColor: '#ddd',
        borderBottomColor:0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height : 4},
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    header:{
      backgroundColor: '#ffffff',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20
    },
    panelHeader: {
      alignItems: "center",
    },
    panelHandle:{
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#FFF476',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: '#000',
    },
  })

  export default AccountScreen;