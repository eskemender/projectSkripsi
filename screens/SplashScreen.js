import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import logo from './pictures/logo.jpg';
import gaslon from './pictures/logogaslon.jpg'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

const SplashScreen =({navigation})=>{
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image 
                    animation="bounceIn"
                    
                source={gaslon} style={styles.logostyle}/>
                
            </View>
            <Animatable.View
            animation="fadeInUpBig"
            style={styles.footer}>
                <Text style={styles.title}>Refill air minum dan gas LPG</Text>
                <Text style={styles.text}>Daftar atau buat akun sekarang</Text>
                <View>
                <TouchableOpacity style={styles.signIn}
                onPress={()=> navigation.navigate('SignInScreen')}
                >
                    <Text 
                    style={{color: '#000', fontWeight: "bold", fontSize: 20, alignSelf: "center", marginTop: 5}}
                    >Masuk</Text>
                </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};


const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#4AC0FF',
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    logostyle:{
        width: 250,
        height: 250,
        
    },
    title:{
        color:'#05375a',
        fontSize: 30,
        fontWeight:'bold'
    },
    text: {
        color: 'black',
        marginTop:5,
    },
    button:{
        alignItems: "flex-end",
        marginTop: 5
    },
    signIn: {
        backgroundColor: '#FFF476',
        width: 150,
        height: 40,
        borderRadius: 20,
        marginTop: 50,
        alignSelf: 'center'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});


export default SplashScreen;