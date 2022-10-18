import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import RadioForm, {
  RadioButton,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {storeData, getData} from './Storage';
import {TextInput} from 'react-native-paper';
import NavContainer from './NavContainer';
import DateTimePicker from '@react-native-community/datetimepicker';




const EditDetails=({route,navigation})=>{
    const value=route?.params?.value;
    // alert(typeof(route.params.refresh))
    // console.log(route)
    // alert(JSON.stringify( route))
    // alert(value.FirstName)
 
    
 
  const [Gender, SetGender] = useState(value.Gender);
  const [fname, SetFname] = useState(value.FirstName);
  const [lname, SetLname] = useState(value.LastName);
  const [Designation, SetDesignation] = useState(value.Designation);
  const [DOB, SetDOB] = useState(value.DOB);
  const [DOJ, SetDOJ] = useState(value.DOJ);
  const [EmployeeID, SetEmployeeID] = useState(value.EmployeeID);
   
 
  

  const person = {
    ID : value.ID,
    Gender: Gender, 
    FirstName: fname,
    LastName: lname,
    Designation: Designation,
    DOB: DOB,
    DOJ: DOJ,
    EmployeeID: EmployeeID,
  };
  // console.log(person);
  const [datePicker, setDatePicker] = useState(false);
  const [datePicker2, setDatePicker2] = useState(false);

  const [date, setDate] = useState(new Date());
  // const [DOJdate, setDOJDate] = useState(new Date());

  function onDateSelected(event, value) {
    setDatePicker(false);
    // setUserDOBError(false);
    const date2 = new Date(value);
    SetDOB(
      date2.getDate() + '/' + (date2.getMonth()+1)  + '/' + date2.getFullYear(),
    );
  }
  function onDateDOJSelected(event, value) {
    setDatePicker2(false);
    // setUserDOJError(false);
    const date2 = new Date(value);
    SetDOJ(
      date2.getDate() + '/' +(date2.getMonth()+1)  + '/' + date2.getFullYear(),
    );
  }
  

  var radio_props = [
    {label: 'Male  ', value: 0},
    {label: 'Female', value: 1},
  ];

  const Update = async () => {
    let data = await getData('userInfo');
    // console.log(data.findIndex(data[value.ID]));
    // data.filter(element=> {
    //   if(element.id === value.id) {
    //     console.log("element", JSON.stringify(element));
    //   }
    // })
    const index=data.indexOf(data[value.ID])
  //  console.log(data.findIndex(data[value]));
     data[index]=(person);
    
    storeData('userInfo', data);
    navigation.navigate("Details");
 
    route.params.refresh()
   
  }
     
    return(
        <ScrollView style={{backgroundColor:"#dec195",flex:1}}>
          <NavContainer value={'Edit'} onPress={()=>navigation.pop()}/>
         <View
        style={{
          // flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 30,
          marginLeft: 0,
          flexDirection: 'row',
        }}>
        
          <TextInput
            label="Gender"
            value={Gender}
            mode="outlined"
            Outlined="focused"
            style={styles.Name}
            // onChangeText={text => Gender(text)}
          />
           {datePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
            // display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelected}
            // style={styleSheet.datePicker}
          />
        )}
        {datePicker2 && (
          <DateTimePicker
            value={date}
            mode={'date'}
            // display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateDOJSelected}
            // style={styleSheet.datePicker}
          />
        )}
          <View style={{padding: 19}}>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              onPress={value => {
                // value ? (value = 1) : (value = 0);
                // console.log(value);
                if (value === 0) {
                  SetGender('Male');
                } else {
                  SetGender('Female');
                }
              }}
              formHorizontal={true}
              buttonSize={15}
            />
           
        </View>
      </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 40,
          }}>
          <TextInput
            label="First Name"
            value={fname}
            mode="outlined"
            Outlined="focused"
            style={styles.Name}
            onChangeText={(text)=> SetFname(text)}
          />
          <TextInput
            label="Last Name"
            value={lname}
            mode="outlined"
            style={styles.Name}
            onChangeText={text => SetLname(text)}
          />
        </View>
        <View>
          <TextInput
            label="Designation"
            mode="outlined"
            value={Designation}
            style={styles.Balance}

            onChangeText={text => SetDesignation(text)}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            label="DOB"
            mode="outlined"
            value={DOB}
            style={styles.DOBText}
            // onChangeText={text => onChangeTextValue(text, 'DOB')}
            // error={userDOBError}
          />

          <TouchableOpacity onPress={() => setDatePicker(true)}>
            <Image
              style={styles.DOBIcon}
              source={require('/home/divum/Assignment/EMS/Asserts/calendar.png')}
            />
          </TouchableOpacity>
        </View>

          
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            label="Date Of Joining"
            mode="outlined"
            value={DOJ}
            style={styles.DOBText}
            // onChangeText={onDateDOJSelected}
            // error={userDOJError}
          />
          <TouchableOpacity onPress={() => setDatePicker2(true)}>
            <Image
              style={styles.DOBIcon}
              source={require('/home/divum/Assignment/EMS/Asserts/calendar.png')}
            />
          </TouchableOpacity>
        </View>
         
          <TextInput
            label="Employee ID"
            mode="outlined"
            value={EmployeeID}
            style={styles.Balance}
            onChangeText={text => SetEmployeeID(text)}
          />
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.Button}
              onPress={() => {
                Update();
              }}>
              <Text style={{fontSize: 12,color:"white"}}>Update</Text>
              
            </TouchableOpacity>
            
          </View>
        </View>
      </ScrollView>
    )
}

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
      marginTop: 40,
      margin: 6,
    },
    Button: {
      backgroundColor: 'black',
      padding: 10,
      width: 100,
      borderRadius: 15,
      marginTop: 20,
      alignItems: 'center',
    },
    DOBText: {
      backgroundColor: 'white',
      borderRadius: 15,
      padding: 8,
      marginTop: 40,
      margin: 6,
      marginLeft: 6,
      flex: 1,
    },
    DOBIcon: {
      width: 30,
      height: 30,
      marginTop: 60,
      marginRight: 10,
    },
  });
export default EditDetails;