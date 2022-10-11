import React,{useState} from "react";
import { View,Image,StyleSheet } from "react-native";
import {loginGetData} from './Storage';
 
 const SplashScreen=({navigation})=>{
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(() => {
    setTimePassed(true);
  }, 1500);

  // useEffect(()=>{
  //   checking()
  //  },[])
    const checking=async()=>{
      let data = await loginGetData('LoginData');
      if (data.ID && data.pass) {
        navigation.replace('Landing');
      }
      else
      {
        navigation.navigate('Login');
      }
    }
 
  if (!timePassed) { 
  return(
    <View style={{backgroundColor:"white",flex:1}}>
      <View style={styles.ImageCover}>
      <Image style={styles.Image} source={require('/home/divum/Assignment/EMS/Asserts/partnership.png')} />
      </View>
    </View>
  )
  }
  // navigation.navigate('Login');
  checking();
  return null;
 }


 const styles=StyleSheet.create({
  Image:{
     width:60,
     height:60,
   
  },
  ImageCover:{
        alignItems:'center',
        marginTop:350
  }
 })
export default SplashScreen;
 