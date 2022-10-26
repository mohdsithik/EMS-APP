import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import {getData, storeData} from './Storage';
import NavContainer from './NavContainer';

const EmployeeList = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(true);

  const [employeeListDetails, setEmployeeDetails] = useState([]);
  console.log(employeeListDetails);
  useEffect(() => {
    display();
  }, []);

  const onRefresh = () => {
    display();
  };

  const display = async () => {
    const details = await getData('userInfo');
    setEmployeeDetails(details);
    
  };

  const createThreeButtonAlert = ID =>
    Alert.alert('Confirmation', 'You Sure, that you want to delete?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'OK', onPress: () => deleteDetails(ID)},
    ]);
  const deleteDetails = async ID => {
    let data = await getData('userInfo');
    

    const index = data.indexOf(data[ID]);

    
    data.splice(index, 1);
   

    storeData('userInfo', data);
    alert('Deleted');
    display();
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('UserInfo', {item: item, refresh: onRefresh})
          }
          onLongPress={() => createThreeButtonAlert(item.ID)}>
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
      <NavContainer value={'Employee List'} onPress={() => navigation.pop()} />
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
