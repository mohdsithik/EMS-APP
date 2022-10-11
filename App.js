import * as React from 'react';
import {NavigationContainer, } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from './src/Landing';
import Login from './src/Login';
import Create from './src/Create';
import EmployeeList from './src/EmployeeList';
import UserInfo from './src/UserInfo';
import EditDetails from './src/EditDetails';
import SplashScreen from './src/SplashScreen';
 

 

const Stack = createStackNavigator();

function App() {

  // useEffect(()=>{
  //   checking()
  //  },[])
  //   const checking=async()=>{
  //     let data = await loginGetData('LoginData');
  //     if (data.ID && data.pass) {
  //        navigation.pop('Landing');
  //     }
  //   }
  return (
    <NavigationContainer >
     
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:"#dec195"}}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen}  options={{
            gestureEnabled: false,
            headerShown: false,
            headerLeft: () => null,
          }}/> 
        <Stack.Screen name="Login" component={Login} options={{
            gestureEnabled: false,
            headerShown: true,
            headerLeft: () => null,
          }}/>
        <Stack.Screen name="Landing" component={Landing}  options={{
            gestureEnabled: false,
            headerShown: true,
            headerLeft: () => null,
          
          }} />
        <Stack.Screen name="Create" component={Create} options={{
            gestureEnabled: false,
            headerShown: false,
            headerLeft: () => null,
          }} />
        <Stack.Screen name="Details" component={EmployeeList}  options={{
            gestureEnabled: false,
            headerShown: false,
            headerLeft: () => null,
          }} />
        <Stack.Screen name="UserInfo" component={UserInfo}  options={{
            gestureEnabled: false,
            headerShown: false,
            headerLeft: () => null,
          }}/>
        <Stack.Screen name="Edit" component={EditDetails}  options={{
            gestureEnabled: false,
            headerShown: false,
            headerLeft: () => null,
          }}/>
       </Stack.Navigator>
   </NavigationContainer>
  
  );
}

export default App;
