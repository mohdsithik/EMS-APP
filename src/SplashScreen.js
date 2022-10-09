import React , { useState } from 'react';  
import { StyleSheet, View, Image,Text } from 'react-native';  
 const Splashscreen = ({navigation}) => {
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 500);

  if (!timePassed) {
    return (
     <View style={{backgroundColor:'red'}}>
      <Text>Hello</Text>
     </View>
    );
  }
  navigation.navigate('Login');
  return null;
};

 

export default Splashscreen;