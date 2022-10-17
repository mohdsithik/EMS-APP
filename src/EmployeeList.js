import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList} from 'react-native';
import {getData,storeData} from './Storage';
import NavContainer from './NavContainer';
import { Modal } from 'react-native-paper';

 

const EmployeeList = ({navigation}) => {

  const [modalVisible, setModalVisible] = useState(true);
  
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

  const ModalView=()=>{
    return(
      <View>
        <Text>Mohammed sithik</Text>
      </View>
    )
  }
  const deleteDetails= async(ID)=>{
   
    let data = await getData('userInfo');
    // alert(ID)
    // console.log(data);
    // console.log(data[ID])
    
   const index= data.indexOf(data[ID])
    
    // console.log('index=========>',index);
    data.splice(index,1);
    // console.log(data);
    
     storeData('userInfo', data);
     alert("Deleted");
     display();
  
    
 
 
   
  }
  

  const renderItem = ({item}) => {
    return (
      <View>
      
       <TouchableOpacity
        onPress={() => navigation.navigate('UserInfo', {item : item,refresh : onRefresh})}
        onLongPress={() =>deleteDetails(item.ID) }>
           {/* onLongPress={() =>deleteDetails(item.ID) }> */}
        <View style={Styles.Usernamelist}>
          <Text style={{color: 'white'}}>
            {item.FirstName} {item.LastName}
          </Text>
        </View>
      </TouchableOpacity>
      </View>
     
     
      
      
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
