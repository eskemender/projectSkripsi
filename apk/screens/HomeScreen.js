import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
    Image,
    Title,
    ImageBackground,
  } from 'react-native';

import ProfileBar from './profilebar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import profilpic from './pictures/akun.jpg'
import cartpic from './pictures/cart.jpg'
import fotogalon from './pictures/galon.jpg'
import fotogas from './pictures/gas.jpg'
import icontes from './pictures/cart.jpg'
import iconprofil from './pictures/profil.jpg'
import iconhome from './pictures/homeicon.jpg'
import iconlogout from './pictures/logout.jpg'
import storedUserData from './component/storage'




const HomeScreen = ({navigation, route}) => {
  const [count, setCount] = useState('');
  useEffect(() => {
    storedUserData()
    .then(res => {
      setCount(res)
    })
    .catch(e => {
      console.log(e.message)
    })
  });

  const { username } = route.params;
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: '#fff', height: 50, marginBottom: 10,}}>
          <View style={{flexDirection: "row"}}>
            <Text style={{position:  "absolute",marginLeft: 160, fontSize: 20, padding: 5, fontWeight: "bold", padding: 10}}>GASLON</Text>
            <View style={{marginLeft: 355, marginTop: 15}}> 
              <TouchableOpacity>
                <Text style={{fontWeight: "bold", fontSize: 15}}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
         
        </View>
      
        <View style={styles.profie}>
          <View style={styles.contaier}>
            <View style={styles.row}> 
                <View style={styles.profilpiccontainer}>
                  <Image source={profilpic} style={styles.picstyle}></Image>
                </View>
                <View style={{flexDirection: 'column'}}>
                  <Text style={{marginLeft: 20, fontWeight: "bold"}}> {JSON.stringify(username)}</Text>
                  <Text style={{marginLeft: 16, fontWeight: "bold"}}>Lokasi</Text>
                </View>
                <View style={{position : "absolute",backgroundColor: '#Fff', width: 35, height: 35, borderWidth: 1, borderRadius: 50, marginLeft: 300, marginTop: 10}}>
                <TouchableOpacity style={styles.cartpicstyle}
                onPress={() => navigation.navigate("Cart")}
                >
                  <ImageBackground source={cartpic} style={{flex:1}}></ImageBackground>
                </TouchableOpacity>
                </View>
                
            </View>
      
            <TouchableOpacity style={styles.tombolulang}>
                <Text style={{fontWeight: "bold", marginLeft: 2}}>Pembelian Ulang {count}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.item}>
        <View style={styles.itemcontainer}>
          <View>
          <Text style={styles.pesantext}>Pilih produk</Text>

          <View style={{flexDirection:"row"}}>
          <View>
          <TouchableOpacity
            onPress={()=>{navigation.navigate('Jualan')}}>
            <Image source={fotogalon} style={styles.galon}></Image>
            </TouchableOpacity>
            <Text style={styles.galontext}>Aqua</Text>
          </View>

          <View style={{marginLeft:40}}>
          <TouchableOpacity
            onPress={()=>{navigation.navigate('Jualan')}}
            >
            <Image source={fotogas} style={styles.gas}></Image>
            </TouchableOpacity>
            <Text style={styles.gastext}>Gas</Text>
          </View>
          </View>
        
          </View>
            
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
                  onPress={()=> navigation.navigate('Cart', {username:username})}>
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
  profie: {
    alignSelf: 'center',
    paddingTop: 25,
    
  },
  item: {
    alignSelf: 'center',
  },
  contaier: {
    width: 350,
    height: 120,
    backgroundColor: '#FFF',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomColor:0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height : 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
},
row:{
    flexDirection: 'row',

},
picstyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
},
profilpiccontainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#000000',
    marginLeft:35,
    marginTop: -20,
},
cartpicstyle:{
    width: 25,
    height: 25,
    alignSelf: 'center',
    marginTop: 4,
    marginRight: 1,
},
tombolulang: {
    backgroundColor: '#ffffff', 
    width: 114, 
    marginLeft: 30,
    marginTop: 10,
    borderWidth: 1,
    
},
itemcontainer: {
  borderRadius: 25,
  marginTop: 20,
  width: 350,
  height: 300,
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
borderRadius: 6,
borderColor: '#ddd',
borderBottomWidth: 0,
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.8,
shadowRadius: 2,
},
pesantext: {
    color: '#000000',
    fontWeight: 'bold',
    marginTop:5,
    textAlign: "center",
},
galon: {
    width: 130,
    height: 130,
    marginLeft: 20,
    marginTop: 10,
    borderWidth: 1,
borderRadius: 2,
borderColor: '#ddd',
borderBottomWidth: 0,
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.8,
shadowRadius: 2,
    
},
galontext:{
    marginTop: 2,
    marginLeft: 70,
},

gas:{
    width: 130,
    height: 130,
    marginTop: 10,
    borderWidth: 1,
borderRadius: 2,
borderColor: '#ddd',
borderBottomWidth: 0,
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.8,
shadowRadius: 2,
    
},
gastext:{
    marginTop: 2,
    marginLeft: 55,

},

})


  export default HomeScreen;