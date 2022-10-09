import * as React from 'react';
import {NavigationContainer, } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from './src/Landing';
import Login from './src/Login';
import Create from './src/Create';
import EmployeeList from './src/EmployeeList';
import UserInfo from './src/UserInfo';
import EditDetails from './src/EditDetails';
import { View,Text } from 'react-native';
import SplashScreen from './src/SplashScreen';
 

const Stack = createStackNavigator();

function App() {

   
  return (
    <NavigationContainer >
     
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:"#dec195"}}} >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Landing" component={Landing}  />
        <Stack.Screen name="Create" component={Create} />
        <Stack.Screen name="Details" component={EmployeeList} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
        <Stack.Screen name="Edit" component={EditDetails} />
       </Stack.Navigator>
   </NavigationContainer>
  
  );
}

export default App;
