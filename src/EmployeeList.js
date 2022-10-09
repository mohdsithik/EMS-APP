import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {getData} from './Storage';
import Creat from './Create';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserInfo from './UserInfo';

// export const nameList = async key => {
//   try {
//     console.log('key', key);
//     const jsonValue = JSON.stringify(key);
//     await AsyncStorage.setItem('key', jsonValue);
//     alert(jsonValue);
//   } catch (e) {
//     console.log(e);
//   }
// };

const EmployeeList = ({navigation}) => {
  
  const [employeeListDetails, setEmployeeDetails] = useState([]);
  useEffect(() => {
    display();
  }, [ ]);
  
  const onRefresh=()=>{
    display();
  }

  const display = async () => {
    const details = await getData('userInfo');
    setEmployeeDetails(details);
    // console.log(details);
    // alert(JSON.stringify(details));
  };
  // const Delete= async(ID)=>{
  //   alert(ID)
  //   let data = await getData('userInfo');
  //   delete data[ID];
  //   storeData('userInfo', data);
  // }
  // navigation.navigate("UserInfo")

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('UserInfo', {item : item,refresh : onRefresh})}
        onLongPress={() => alert('Delete')}>
        <View style={Styles.Usernamelist}>
          <Text style={{color: 'white'}}>
            {item.FirstName} {item.LastName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{backgroundColor: '#dec195', flex: 1}}>
      <FlatList data={employeeListDetails} renderItem={renderItem} />
    </View>
  );
};
const Styles = StyleSheet.create({
  Usernamelist: {
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 20,
    marginBottom: 10,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 6,
    marginTop: 16,
  },
});

export default EmployeeList;
