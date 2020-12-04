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
import fotoproduk from './pictures/galon.jpg'
import plusicon from './pictures/plus.jpg'
import minusicon from './pictures/minus.jpg'
import { TouchableOpacity } from 'react-native-gesture-handler';

const JualanScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: '#fff', height: 50, marginBottom: 10,}}>
          <View style={{flexDirection: "row"}}>
            <Text style={{position:  "absolute",marginLeft: 160, fontSize: 20, padding: 5, fontWeight: "bold", padding: 10}}>GASLON</Text>
            <View style={{marginLeft: 360, marginTop: 10}}> 
            <TouchableOpacity
             onPress={()=> navigation.goBack()}>
                <Text style={{fontSize: 18}}>Back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={{
          textAlign: 'center',
          marginTop: 10,
          fontSize: 20,
          fontWeight: 'bold'
        }}>Rincian Pesanan</Text>
        <View style={styles.boxcontainer}>
          <View style={{flexDirection: "row"}}>
            <View>
            <Image source={fotoproduk} style={styles.produk}></Image>
            </View>
          <View style={{flexDirection: "column"}}>
            <View style={styles.textcontainer}>
            <Title style={{fontSize: 15, fontWeight: "bold"}}>Rincian Produk</Title>
              <View style={{flexDirection: "row"}}>
                <View style={{flexDirection: "column"}}>
                  <Text>Produk </Text>
                  <Text>Harga Per Galon </Text>
                  <Text>Stok Tersedia </Text>

                </View>
                <View style={{flexDirection: "column", }}>
                  <Text style={{marginLeft: 32}}>Aqua</Text>
                  <Text style={{marginLeft: 10}}>Rp. 5000 </Text>
                  <Text style={{marginLeft: 42}}>500</Text>
                </View>
              </View>  
             </View>     
          </View>
          </View>
          <View style={{flexDirection: "row", marginTop: 10}}>
                <View style={{flexDirection: "column"}}>
                  <Text style={{fontWeight: "bold",fontSize: 15, marginBottom: 10, marginLeft: 10}}>Jumlah </Text>
                  <Text style={{fontWeight: "bold", fontSize: 15, marginBottom: 10, marginLeft: 10}}>Total harga</Text>
                  <Text style={{fontWeight: "bold", fontSize: 15, marginBottom: 10, marginLeft: 12}}>Lokasi</Text>
                  <Text style={{fontWeight: "bold", fontSize: 15, marginBottom: 10, marginLeft: 12}}>Metode {"\n"}Pembayaran</Text>
                </View>
                <View style={{flexDirection: "column", marginLeft:40}}>
                <View style={{marginBottom: 10, marginLeft: 130}}>
                  <View style={{flexDirection:"row", borderWidth: 1}}>
                    <View>
                        <TouchableOpacity>
                          <Image source={minusicon} style={{width: 15, height: 15, marginTop: 2, marginLeft: 2}}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{width: 30, marginLeft: 5, marginRight: 5, borderLeftWidth:1, borderRightWidth: 1}}>
                      <Text style={{textAlign: "center"}}>5</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                        <Image source={plusicon} style={{width: 12, height: 12, marginTop: 4, marginRight: 2}}></Image>
                        </TouchableOpacity>
                    </View>    
                  </View>
                </View>
                <Text style={{fontWeight: "bold", marginBottom: 10, marginLeft: 130}}>Rp. 5000 </Text>
                <TextInput
                 style={styles.textInput}
                   />
                  <Text style={{fontWeight: "bold", marginBottom: 10, marginLeft: 130}}>Cash </Text>
                </View>
             </View>     
        </View>

        <TouchableOpacity
        style={styles.tombolpesan}>
          <Text style={{textAlign:"center", fontSize: 20, fontWeight: "bold"}}>Pesan</Text>
        </TouchableOpacity>
      </View>
    )
  };

const styles = StyleSheet.create ({
  container:{
    flex: 1,
    backgroundColor: '#C4EAFF'
  },
  boxcontainer: {
    alignSelf: "center",
    marginTop: 10,
    width: 370,
    height: 350,
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
  produk: {
    height: 180,
    width: 180,
    
  },
  textcontainer: {
    width: 180,
    height: 100,
    backgroundColor: '#FFF',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height : 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginTop: 10
  },
    textInput: {
    width: 200,
    height: 25,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderWidth: 0.5,
  },
  tombolpesan: {
    alignSelf: "center",
    marginTop: 90,
    backgroundColor: '#FFF476',
    width: 200,
    height: 35,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height : 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  }
})


  export default JualanScreen;