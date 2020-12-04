import React from 'react';
import icontes from './pictures/cart.jpg'
import iconprofil from './pictures/profil.jpg'
import iconhome from './pictures/homeicon.jpg'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
    TouchableOpacity,
    Image,
    ImageBackground
  } from 'react-native';


const CartScreen = ({navigation, route}) => {
  
  const { username } = route.params;
    return (
      <View style={styles.container}>

        <View style={{backgroundColor: '#fff', height: 50, marginBottom: 10,}}>
          <View style={{flexDirection: "row"}}>
            <Text style={{position:  "absolute",marginLeft: 160, fontSize: 20, padding: 5, fontWeight: "bold", padding: 10}}>GASLON</Text>
            <View style={{marginLeft: 365, marginTop: 5}}> 
            </View>
          </View>
        </View>


        <Text style={{
          textAlign: 'center',
          marginTop: 10,
          fontSize: 20,
          fontWeight: 'bold'
        }}>Keranjang Saya</Text>
        <View style={styles.barcontainer}>
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
      marginTop: 20,
      alignSelf: "center",
      borderRadius:6,
      width:325,
      height: 400,
      backgroundColor: '#FFFFFF',
      borderColor: '#ddd',
        borderBottomColor:0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height : 4},
        shadowOpacity: 0.8,
        shadowRadius: 2,
    }
  })

  export default CartScreen;