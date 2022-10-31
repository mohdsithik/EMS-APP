import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
 
import {logInSetData, loginGetData} from './Storage';

const Login = ({navigation}) => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');


//  useEffect(()=>{
//   checking()
//  },[])
  const checking=async()=>{
    let data = await loginGetData('LoginData');
    if (data.ID && data.pass) {
      navigation.replace('Landing');
    }
  }



  const loginData = async () => {
    // if((Username.trim()=='Sithik' || Username.trim()=='Lokesh') && (Password.trim()=='12345' || Password.trim()=='Lokesh123'))
    // {
    // navigation.navigate('Landing',{userName : Username})
    // }
  
    const LoginData = {
      ID: Username,
      pass: Password,
    };
    logInSetData('LoginData', LoginData);
    checking();
    // alert('pushed');
    // let data = await loginGetData('LoginData');
    // if (data.ID && data.pass) {
    //   navigation.replace('Landing');
    // }
    // else{
    //   alert("Plese enter the username & pasword")
    // }
  };
  // const checking = async () => {
  //   let data = await loginGetData('LoginData');
  //   console.log(data.ID);
  //   if (data.ID && data.pass) {
  //     navigation.replace('Landing', {userName: Username});
  //   }
  // };
  return (
    <ScrollView style={{backgroundColor: '#dec195', flex: 1}}>
      <View style={Styles.Head}>
        <Text style={{color: 'white', fontSize: 20}}>
          Employee Management System
        </Text>
      </View>
      <View>
        <View style={{alignItems: 'center', marginTop: 40}}>
          <Image
            style={Styles.Loginimage}
            source={require('/home/divum/Assignment/EMS/Asserts/profile.png')}
          />

          <View style={Styles.InputContainer}>
            <TextInput
              style={Styles.Username}
              placeholder="Username"
              placeholderTextColor="black"
              onChangeText={setUsername}
              j
            />
            <TextInput
              style={Styles.Username}
              placeholder="Password"
              placeholderTextColor="black"
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <View>
            <TouchableOpacity style={Styles.Button} onPress={() => loginData()}>
              <Text style={{fontSize: 12, color: 'white'}}>Login</Text>
            </TouchableOpacity>
            {/* <Button title="click" onPress={() => checking()} /> */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const Styles = StyleSheet.create({
  Loginimage: {
    padding: 20,
    borderRadius: 16,
    width: 60,
    height: 60,
  },
  Username: {
    color: 'black',
    backgroundColor: 'white',
    paddingLeft: 10,
    marginTop: 10,
    marginRight: 50,
    marginLeft: 50,
    textAlign: 'center',
    borderRadius: 10,
    width: 280,
  },
  InputContainer: {
    marginTop: 20,
  },
  Button: {
    backgroundColor: 'black',
    padding: 10,
    width: 100,
    marginTop: 30,
    borderRadius: 10,
    textAlign: 'center',
    alignItems: 'center',
    shadowColor: 'black',
  },
  Head: {
    alignItems: 'center',
    marginTop: 150,
  },
});

export default Login;
