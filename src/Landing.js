import React, {useState,useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image,Alert} from 'react-native';
import NavContainer from './NavContainer';
import {logInSetData, loginGetData, removeData} from './Storage';



const Landing = ({navigation}) => {

   

  const createThreeButtonAlert = () =>
  Alert.alert(
    "Confirmation",
    "You Sure, that you want to logout?",
    [
       
      {
        text: "Cancel",
        style: "cancel"
      },
      { text: "OK", onPress: () => Logout() }
    ]
  );
    const [Name,setName]=useState('')
  // const [Displayname,setDisplayname]=useState('');

  // console.log(route);
  // const value=route?.params?.userName;

  // setDisplayname(route?.params?.userName);
  useEffect(()=>{
    UsernameGet();
  },[])

  const UsernameGet=async()=>{
    let data = await loginGetData('LoginData');
    setName(data.ID)
  }

  // console.log(value);
  const Logout = () => {
    removeData();
    navigation.navigate('Login');
    // alert(data)
    // let data1 = await loginGetData('LoginData');
    // console.log(data1);
  };
  return (
    <View style={{backgroundColor: '#dec195', flex: 1}}>
      {/* <NavContainer value={'Landing'} onPress={() => navigation.pop()} /> */}
     
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
          <TouchableOpacity style={{backgroundColor:'white',padding:5,width:70,borderRadius:8,marginLeft:150,marginTop:20}} onPress={() => createThreeButtonAlert()}>
        <Text style={{padding:1,textAlign:'center',color:"black"}}>Logout</Text>
      </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
styles = StyleSheet.create({
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
});

export default Landing;
