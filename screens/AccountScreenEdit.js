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
import { TextInput } from 'react-native-paper';
  import fotoprofil from './pictures/akun.jpg';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';


const AccountScreenEdit = ({navigation}) => {
  const renderInner = () =>
  (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Pilih Foto Profil Anda</Text>
      </View>
      <TouchableOpacity style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Ambil Foto</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Pilih Dari Galeri</Text>
      </TouchableOpacity><TouchableOpacity style={styles.panelButton}
      onPress={()=> bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Batal</Text>
      </TouchableOpacity>
    </View>
  );
  const renderHeader = () =>
  (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle}>

        </View>
      </View>
    </View>
  );
  bs = React.createRef();
  fall =new Animated.Value(1);

    return (
      <View style={styles.container}>
        <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
        
        />
        <View style={{backgroundColor: '#fff', height: 50, marginBottom: 10, width: 420}}>
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
        <Animated.View style={{opacity: Animated.add(0.1, Animated.multiply(fall, 1.0))}}>
        <Text style={{
          textAlign: 'center',
          marginTop: 10,
          fontSize: 20,
          fontWeight: 'bold'
        }}>Edit Profil</Text>
        <View style={styles.barcontainer}>
        <View>
            <TouchableOpacity
            onPress={() => bs.current.snapTo(0)}>       
               <Image source={fotoprofil} style={{height: 130, width: 130, alignSelf: 'center', marginTop: 20}}></Image>
            </TouchableOpacity>
          </View>

        <View style={{flexDirection: "row"}}>
          
          <View style={{flexDirection: "column", marginLeft: 50, marginTop: 30}}>
          <TextInput 
          placeholder="Nama Lengkap"
          placeholderTextColor="#666666"
          style={styles.inputtext}
          />
          <TextInput 
          placeholder="Username"
          placeholderTextColor="#666666"
          style={styles.inputtext}
          /><TextInput 
          placeholder="Email"
          placeholderTextColor="#666666"
          style={styles.inputtext}
          /><TextInput 
          placeholder="Alamat"
          placeholderTextColor="#666666"
          style={styles.inputtext}
          /><TextInput 
          placeholder="Nomor Telepon"
          placeholderTextColor="#666666"
          style={styles.inputtext}
          /><TextInput 
          placeholder="Password"
          placeholderTextColor="#666666"
          style={styles.inputtext}
          />
          
          </View>
          
        </View>
        <View>
        <TouchableOpacity 
        style={{backgroundColor: '#000', width: 50, borderRadius: 5,alignSelf: 'center'}}>
          <Text style={{color: '#fff', alignSelf: 'center'}}>Simpan</Text>
        </TouchableOpacity>
        </View>
        
        </View>

        </Animated.View>
       
        
      </View>
    )
  };


  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      backgroundColor: '#C4EAFF',
      alignItems: 'center'
    },
    barcontainer: {
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
    inputtext:{
        height: 23,
        width: 230,
        marginBottom: 10,
        backgroundColor: '#fff',
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

  export default AccountScreenEdit;