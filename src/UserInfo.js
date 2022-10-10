 import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {TextInput} from 'react-native-paper';
import Landing from './Landing';
 
 
const UserInfo=( {route,navigation})=>{
  console.log('UserInfo',route.params.item)
  console.log('UserInfo',route.params.refresh)
  // const value=data.route.params.item;
  // const { FirstName,  LastName ,DOB,DOJ,Designation,EmployeeID } = route.params.data;
  // console.log(" const value=data.route.params.item;",route.params.item);
  const value=route?.params?.item;
  // alert(typeof(route.params.refresh))
  // route.params.refresh()
  const max=route.params.refresh
  //  alert(route.params.item)

  //  console.log(value);

 
  
   

//  const Submit=()=>{
//   navigation.navigate("Create")
//  }

  return (
    <ScrollView style={{backgroundColor:"#dec195",flex:1}}>
       <View style={{padding:15,flexDirection:'row',}}>
            <TouchableOpacity onPress={()=>navigation.pop()}>
                <Image style={{width:32,height:32}} source={require('/home/divum/Assignment/EMS/Asserts/left-arrow.png')}/>
            </TouchableOpacity>
            <Text style={{marginLeft:20,fontSize:20,color:"black",margin:4}}>UserInfo</Text>
         </View>
      <View>
        {/* <TouchableOpacity onPress={()=>{navigation.pop();}}>
          <Text>click</Text>
        </TouchableOpacity> */}
       <TextInput
          label="Gender"
          mode="outlined"
         value={value.Gender}
          style={styles.Balance}
          disabled='true'
   
         

        
        />
        </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 30,
        }}>
        <TextInput
          label="First Name"
          value={value.FirstName}
          mode="outlined"
          style={styles.Name}
          disabled='true'
        />
        <TextInput
          label="Last Name"
          value={value.LastName}
          mode="outlined"
          style={styles.Name}
          disabled='true'
        />
      </View>
      <View>
        <TextInput
          label="Designation"
          mode="outlined"
         value={value.Designation}
          style={styles.Balance}
          disabled='true'
        />
        <TextInput
          label="DOB"
          mode="outlined"
          value={value.DOB}
          style={styles.Balance}
          disabled='true'
           
        />
        
        
        <TextInput
          label="Date Of Joining"
          mode="outlined"
          value={value.DOJ}
          style={styles.Balance}
          disabled='true'
           
        />
       
        <TextInput
          label="Employee ID"
          mode="outlined"
          value={value.EmployeeID}
          style={styles.Balance}
          disabled='true'
          
        />
        <View style={{flexDirection: 'row',justifyContent:'space-evenly'}}>
          <TouchableOpacity
            style={styles.Button}
            onPress={()=> navigation.navigate("Details")}>
            <Text style={{fontSize: 12,color:"white"}}>Go to Landing</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button}
            onPress={()=> navigation.navigate("Edit",{value : value,refresh : max})}>
            <Text style={{fontSize: 12,color:"white"}}>Go to Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
  Name: {
    backgroundColor: 'white',
    width: 178,
    borderRadius: 0,
    padding: 8,
  },
  Balance: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 8,
    marginTop: 30,
    margin: 6,
  },
  Button: {
    backgroundColor: 'black',
    padding: 12,
    width: 100,
    borderRadius: 15,
    marginTop: 40,
    alignItems: 'center',
  },
});
export default UserInfo;
