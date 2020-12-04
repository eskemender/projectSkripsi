import { AsyncStorage } from '@react-native-community/async-storage';


export const userData = async (response) => {
    let data = {
        data : response
    }
    await AsyncStorage.setItem('userData', JSON.stringify(data));

}

export const storedUserData = () =>{
    return new Promise((resolve, reject)=> {
        AsyncStorage.getItem('userData')
        .then(res=> {
            if(res !== null){
                resolve(JSON.parse(res));
            } else {
                resolve('');
            }
        })
        .catch(err=> reject(err));
    });
}