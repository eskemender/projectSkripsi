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
import logo from './pictures/logo.jpg';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PesananScreenPenjual = ({}) => {
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
         <View style={styles.textcontainer}>
            <Text style={styles.textstyle}>Daftar Pesanan</Text>
         </View>
         <View style={{alignSelf: "flex-start", marginLeft: 15, marginBottom: 10}}>
             <Text style={{fontSize: 15, fontWeight: "bold"}}> Filter By : </Text>
         </View>
         <View style={styles.boxitem}>

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
    },
    textstyle:{
        fontSize: 18, 
        fontWeight: "bold", 
        marginBottom: 10,
        color: 'white',
        alignSelf: "center",
        marginTop: 10
    },
    textcontainer:{
        backgroundColor: '#000',
        borderRadius: 20,
        marginBottom: 30,
        marginTop: 20,
        width: 200,
        height: 50
    }

  })
  export default PesananScreenPenjual;