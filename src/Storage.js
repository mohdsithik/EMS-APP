import AsyncStorage from '@react-native-async-storage/async-storage';

// const localStore={
//     set:storeData,
//     get:getData
// }

export const storeData = async (key, value) => {
  try {
    console.log('StoreData', key, 'dgtg', value);
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@'+key, jsonValue);
    // alert(jsonValue)
  } catch (e) {
    console.log(e);
  }
};

export const getData = async key => {
  try {
    console.log('value', key);
    const jsonValue = await AsyncStorage.getItem('@'+key);
    console.log(JSON.stringify(jsonValue));
    return jsonValue != null ? JSON.parse(jsonValue)  : [];
  } catch (e) {
    // error reading value
  }
};

// export const updateData = async (key,value) => {
//   try {
//     console.log('value', key);
//     const jsonValue = await AsyncStorage.getItem('@'+key);
//     console.log(JSON.stringify(jsonValue));
//     return jsonValue != null ? JSON.parse(jsonValue)  : null ;
//   } catch (e) {
//     // error reading value
//   }
// };

//   module.exports={
//     localStore
//   }
