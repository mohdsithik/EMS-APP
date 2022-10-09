import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 1000);

  if (!timePassed) {
    return (
      <View >
        <Text >Splash Screen</Text>
      </View>
    );
  }
  navigation.navigate('Login');
  return null;
};

 

export default SplashScreen;