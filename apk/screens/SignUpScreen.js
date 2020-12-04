import React, { Component, useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import logo from './pictures/logo.jpg';
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native-gesture-handler';


const SignUpScreen =({navigation})=>{

    // const [form, setform] = useState({});
    let username, namalengkap, notelepon, email, lokasi, password;

    const daftar = () =>
    {
        fetch ('http://192.168.43.59:80/test/test.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                namalengkap: namalengkap,
                email: email,
                lokasi: lokasi,
                notelepon: notelepon,
                password: password,
            })
        })
        .then((response) => response.json())
        .then((response) => {
            navigation.goBack()
        })
        .catch((e)=> {
            alert(e+' asdf')
        })
    }

    setUsername = (value) => {
        username = value;
    }

    setNamalengkap = (value) => {
        namalengkap = value;
    }

    setEmail = (value) => {
        email = value;
    }

    setLokasi = (value) => {
        lokasi = value;
    }

    setPassword = (value) => {
        password = value;
    }
    setNoTelepon = (value) => {
        notelepon = value;
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}> 
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>Daftar Sekarang!</Text>
            </View>
            <View style={styles.footer}> 
            <View>
                <Text style={styles.textstyle}>Username</Text>
                <TextInput
                placeholder="Masukkan username Anda"
                // value={form.username}
                onChangeText={val => setUsername(val)}
                style={styles.textinputstyle} />
            </View>
            <View>
                <Text style={styles.textstyle}>Nama Lengkap</Text>
                <TextInput
                placeholder="Masukkan nama lengkap"
                // value={form.namalengkap}
                onChangeText={val => setNamalengkap(val)}
                style={styles.textinputstyle} />
            </View>
            <View>
                <Text style={styles.textstyle}>Email</Text>
                <TextInput
                placeholder="Masukkan email Anda"
                // value={form.email}
                onChangeText={val => setEmail(val)}
                style={styles.textinputstyle} />
            </View>
            <View>
                <Text style={styles.textstyle}>No Telepon</Text>
                <TextInput
                placeholder="Masukkan No Telepon"
                // value={form.email}
                onChangeText={val => setNoTelepon(val)}
                style={styles.textinputstyle} />
            </View>
            <View>
                <Text style={styles.textstyle}>Lokasi</Text>
                <TextInput
                placeholder="Lokasi"
                // value={form.lokasi}
                onChangeText={val => setLokasi(val)}
                style={styles.textinputstyle} />
            </View>
            <View style={{marginTop: 10}}>
            <Text style={styles.textstyle}>Password</Text>
                <TextInput
                secureTextEntry={true}
                placeholder="Masukkan kata sandi"
                // value={form.password}
                onChangeText={val => setPassword(val)}
                style={styles.textinputstyle} 
                />
            </View>
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=> daftar()}
                    >
                    <Text style={{fontSize: 20, textAlign: "center", fontWeight: "bold", marginTop: 10}}>Register</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row", alignSelf: "center", marginTop: 5}}> 
                <Text style={{marginRight: 2, fontSize: 16}}>Sudah punya akun?</Text>
                <TouchableOpacity
                onPress={()=> navigation.goBack()}
                >   
                    <Text style={{fontSize: 16, color: '#1C5A92', fontWeight: 'bold', textDecorationLine: 'underline'}}>Login disini</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#4AC0FF',
    },
    logo : {
        width: 130,
        height: 130,
        borderRadius: 75,
        alignSelf: "center",
        marginTop: 10
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 10
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    textstyle :{
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 15
    },
    textinputstyle :{
        width: 370,
        height: 35,
        marginTop: 5,
        backgroundColor: '#fff',
        borderBottomWidth: 0.5
    },
    button:{
        backgroundColor: '#FFF476',
        marginTop: 10,
        width: 370,
        height: 45,
        borderRadius: 50,
    }
});


export default SignUpScreen;