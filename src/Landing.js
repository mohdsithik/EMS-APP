import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import {loginGetData, removeData} from './Storage';

const Landing = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [Name, setName] = useState('');
   
  useEffect(() => {
    UsernameGet();
  }, []);

  const UsernameGet = async () => {
    let data = await loginGetData('LoginData');
    setName(data.ID);
  };
 
  const Logout = () => {
    removeData();
    navigation.navigate('Login');
    
  };
  return (
    <View style={{backgroundColor: '#dec195', flex: 1}}>
    

      <View>
        <Text style={styles.Welcome}>Welcome</Text>
        <Text style={{textAlign: 'center', fontSize: 30, color: 'white'}}>
          {Name}
        </Text>
        <View style={{marginTop: 70}}>
          <TouchableOpacity
            style={styles.Button1}
            onPress={() => navigation.navigate('Create')}>
            <Text style={styles.ButtonColor}>Create Employee Record</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button1}
            onPress={() => navigation.navigate('Details')}>
            <Text style={styles.ButtonColor}>Employee List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              padding: 5,
              width: 70,
              borderRadius: 8,
              marginLeft: 150,
              marginTop: 20,
            }}
            onPress={() => setModalVisible(true)}>
            <Text style={{padding: 1, textAlign: 'center', color: 'black'}}>
              Logout
            </Text>
          </TouchableOpacity>
          <View style={{alignContent: 'center'}}>
            <Modal visible={modalVisible} animationType="slide">
              <View style={styles.ModalScreenSize}>
                <View>
                  <Text style={styles.ConfimationMsg}>Confirmation</Text>
                  <Text style={styles.ConfimationMsg2}>
                    You Sure, that you want to logout?
                  </Text>
                  <Image
                    style={styles.img}
                    source={require('/home/divum/Assignment/EMS/Asserts/logout2.png')}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      margin: 35,
                      justifyContent: 'space-evenly',
                    }}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                      <Text style={styles.ModalButton}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Logout()}>
                      <Text style={styles.ModalButton}>Logout</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                
              </View>
            </Modal>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Welcome: {
    textAlign: 'center',
    fontSize: 35,
    marginTop: 100,
    color: 'white',
  },
  Button1: {
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  ButtonColor: {
    color: 'white',
  },
 

  ModalScreenSize: {
    backgroundColor: '#cdafdb',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 300,
  },
  ConfimationMsg: {
    textAlign: 'center',
    color: 'black',
    margin: 20,
    fontSize: 20,
  },
  ConfimationMsg2: {
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
  },
  img: {
    width: 150,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
  },
  ModalButton: {
    backgroundColor: 'black',
    color: 'white',
    padding: 8,
    borderRadius: 8,
  },
});

export default Landing;
