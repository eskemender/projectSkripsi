import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
    Image,
    ImageBackground
  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import profilpic from './pictures/akun.jpg'
import cartpic from './pictures/cart.jpg'


const ProfileBar = ({navigation}) => {
    return (
        <View style={styles.contaier}>
        <View style={styles.row}> 
            <View style={styles.profilpiccontainer}>
                <Image source={profilpic} style={styles.picstyle}></Image>
            </View>
            <View style={{flexDirection: 'column'}}>
            <Text style={{marginLeft: 20}}>Raymond Tumiwa</Text>
            <Text style={{marginLeft: 16}}> Malalayang 1</Text>
            </View>
            <TouchableOpacity style={styles.cartpicstyle}
            onPress={() => navigation.navigate("Home")}
            >
            <ImageBackground source={cartpic} style={{flex:1}}></ImageBackground>
             </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.tombolulang}>
            <Text style={{fontWeight: "bold", marginLeft: 2}}>Pembelian Ulang</Text>
        </TouchableOpacity>

    </View>
    )
  };

// class ProfileBar extends Component {
//     render(navigation){
//         return(
//             <View style={styles.contaier}>
//                 <View style={styles.row}> 
//                     <View style={styles.profilpiccontainer}>
//                         <Image source={profilpic} style={styles.picstyle}></Image>
//                     </View>
//                     <View style={{flexDirection: 'column'}}>
//                     <Text style={{marginLeft: 20}}>Raymond Tumiwa</Text>
//                     <Text style={{marginLeft: 16}}> Malalayang 1</Text>
//                     </View>
//                     <TouchableOpacity style={styles.cartpicstyle}
//                     onPress={()=>{navigation.navigate('Home')}}>
//                     <ImageBackground source={cartpic} style={{flex:1}}></ImageBackground>
//                      </TouchableOpacity>
//                 </View>
                
//                 <TouchableOpacity style={styles.tombolulang}>
//                     <Text style={{fontWeight: "bold", marginLeft: 2}}>Pembelian Ulang</Text>
//                 </TouchableOpacity>
 
//             </View>
//         )
//     }
// }


const styles = StyleSheet.create({
    contaier: {
        width: 350,
        height: 120,
        backgroundColor: '#ffffff',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomColor:0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height : 4},
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
        width: 30,
        height: 30,
        marginLeft: 40,
        marginTop: 8,
        borderWidth: 1,
        borderRadius: 40
    },
    tombolulang: {
        backgroundColor: '#ffffff', 
        width: 114, 
        marginLeft: 30,
        marginTop: 10,
        borderWidth: 1,
        
    }


})



  export default ProfileBar;