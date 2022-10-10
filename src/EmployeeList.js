import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';
import {getData,removeDataObject} from './Storage';
import Creat from './Create';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserInfo from './UserInfo';
import NavContainer from './NavContainer';

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
  console.log(employeeListDetails);
  useEffect(() => {
    display();
  }, []);
  
  const onRefresh=()=>{
    display();
  }

  const display = async () => {
    const details = await getData('userInfo');
    setEmployeeDetails(details);
    // console.log(details);
    // alert(JSON.stringify(details));
  };
  // const deleteDetails= async(ID)=>{
   
  //   let data = await getData('userInfo');
  //   console.log(data);
  //   // alert(data[ID])
  //   delete data[ID];
  //   console.log(data[ID])
  //    storeData('userInfo', data);
  //    display();
  //   // await removeDataObject(data[ID]);
 
   
  // }
  // navigation.navigate("UserInfo")

  const renderItem = ({item}) => {
    return (
      
        
      <TouchableOpacity
        onPress={() => navigation.navigate('UserInfo', {item : item,refresh : onRefresh})}
        onLongPress={() =>alert(item.ID) }>
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
      <NavContainer value={"Employee List"} onPress={()=>navigation.pop()} />
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
