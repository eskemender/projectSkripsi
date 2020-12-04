import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import logo from './pictures/logo.jpg';
import gaslon from './pictures/logogaslon.jpg';
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Nav from './Navigator';
import userData from './component/storage'




const SignInScreen =({navigation})=>{

    // const [form, setform] = useState({});
    let username, password, lokasi;

    const daftar = () =>
    {
        fetch ('http://192.168.1.124:80/test/login.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
        .then((response) => response.json())
        .then((response) => {
            userData(response)
            navigation.navigate("Home", {username:username})
            // <Nav />
        })
        .catch((e)=> {
            console.log(e.message)
        })
    }

    setUsername = (value) => {
        username = value;
    }
    setPassword = (value) => {
        password = value;
    }
    return (

        <View style={styles.container}>
            <View style={styles.header}> 
                <Image source={gaslon} style={styles.logo}/>
            </View>
            <View style={styles.footer}> 
            <View>
                <Text style={styles.textstyle}>Username</Text>
                <TextInput
                placeholder="Masukkan username Anda"
                onChangeText={val => setUsername(val)}
                style={styles.textinputstyle} />
            </View>
            <View style={{marginTop: 25}}>
            <Text style={styles.textstyle}>Password</Text>
                <TextInput
                secureTextEntry={true}
                placeholder="Masukkan kata sandi"
                onChangeText={val => setPassword(val)}
                style={styles.textinputstyle} 
                />
            </View>
            <View>
                <TouchableOpacity style={styles.button}
                onPress={()=> daftar()}
                >
                    <Text style={{fontSize: 20, textAlign: "center", fontWeight: "bold", marginTop: 10}}>Log In</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row", alignSelf: "center", marginTop: 5}}> 
                <Text style={{marginRight: 2, fontSize: 16}}>Belum punya akun?</Text>
                <TouchableOpacity
                onPress={()=> navigation.navigate('SignUpScreen')}
                >   
                    <Text style={{fontSize: 16, color: '#1C5A92', fontWeight: 'bold', textDecorationLine: 'underline'}}>Daftar Sekarang</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row", alignSelf: "center", marginTop: 5}}> 
                <TouchableOpacity
                onPress={()=> navigation.navigate('HomePenjual')}
                >   
                    <Text style={{fontSize: 16, color: '#1C5A92', fontWeight: 'bold', textDecorationLine: 'underline'}}>Penjual</Text>
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
        alignSelf: "center",
        marginTop: 10
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 30
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    textstyle :{
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 15
    },
    textinputstyle :{
        width: 370,
        height: 35,
        marginTop: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 0.5
    },
    button:{
        backgroundColor: '#FFF476',
        marginTop: 50,
        width: 370,
        height: 45,
        borderRadius: 50,
    }
});



export default SignInScreen;



// const SignInScreen =({navigation})=>{

//     // const [form, setform] = useState({});
//     let username, password;

//     const daftar = () =>
//     {
//         fetch ('http://192.168.1.124:80/test/login.php', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 username: username,
//                 password: password,
//             })
//         })
//         .then((response) => response.json())
//         .then((response) => {
//             navigation.navigate("MainTabScreen")
//         })
//         .catch((e)=> {
//             alert(e+' asdf')
//         })
//     }

//     setUsername = (value) => {
//         username = value;
//     }
//     setPassword = (value) => {
//         password = value;
//     }
//     return (

//         <View style={styles.container}>
//             <View style={styles.header}> 
//                 <Image source={logo} style={styles.logo}/>
//             </View>
//             <View style={styles.footer}> 
//             <View>
//                 <Text style={styles.textstyle}>Username</Text>
//                 <TextInput
//                 placeholder="Masukkan username Anda"
//                 onChangeText={val => setUsername(val)}
//                 style={styles.textinputstyle} />
//             </View>
//             <View style={{marginTop: 25}}>
//             <Text style={styles.textstyle}>Password</Text>
//                 <TextInput
//                 secureTextEntry={true}
//                 placeholder="Masukkan kata sandi"
//                 onChangeText={val => setPassword(val)}
//                 style={styles.textinputstyle} 
//                 />
//             </View>
//             <View>
//                 <TouchableOpacity style={styles.button}
//                 onPress={()=> daftar()}
//                 >
//                     <Text style={{fontSize: 20, textAlign: "center", fontWeight: "bold", marginTop: 10}}>Log In</Text>
//                 </TouchableOpacity>
//             </View>
//             <View style={{flexDirection: "row", alignSelf: "center", marginTop: 5}}> 
//                 <Text style={{marginRight: 2, fontSize: 16}}>Belum punya akun?</Text>
//                 <TouchableOpacity
//                 onPress={()=> navigation.navigate('SignUpScreen')}
//                 >   
//                     <Text style={{fontSize: 16, color: '#1C5A92', fontWeight: 'bold', textDecorationLine: 'underline'}}>Daftar Sekarang</Text>
//                 </TouchableOpacity>
//             </View>
//             </View>
//         </View>
//     );
// };