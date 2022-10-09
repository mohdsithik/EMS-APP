import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {DayPicker} from 'react-day-picker';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {storeData, getData} from './Storage';
import {TextInput} from 'react-native-paper';
import {nameList} from './EmployeeList';
import { color } from 'react-native-reanimated';

const Creat = () => {
  const [Gender, SetGender] = useState('');
  const [fname, SetFname] = useState('');
  const [lname, SetLname] = useState('');
  const [Designation, SetDesignation] = useState('');
  const [DOB, SetDOB] = useState('');
  const [DOJ, SetDOj] = useState('');
  const [EmployeeID, SetEmployeeID] = useState('');
  const [Count, setCount] = useState();

  useEffect(() => {
    setLength();
  }, []);

  const setLength = async () => {
    let data = await getData('userInfo');
    setCount(data.length);
  };

  const person = {
    ID: Count,
    Gender: Gender,
    FirstName: fname,
    LastName: lname,
    Designation: Designation,
    DOB: DOB,
    DOJ: DOJ,
    EmployeeID: EmployeeID,
  };
  console.log(person);

  // Storage.set("person", person);

  var radio_props = [
    {label: 'Male  ', value: 0},
    {label: 'Female', value: 1},
  ];

  const Submit = async () => {
    let data = await getData('userInfo');
    setCount(Count + 1);
    alert("Submitted")
    // console.log(data);
    // console.log('Existing data===>',data);

    data.push(person);
    storeData('userInfo', data);
  };

  return (
    <ScrollView style={{backgroundColor: '#dec195', flex: 1}}>
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
          onChangeText={text => SetFname(text)}
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
        <TextInput
          label="DOB"
          mode="outlined"
          value={DOB}
          style={styles.Balance}
          onChangeText={text => SetDOB(text)}
        />

        <TextInput
          label="Date Of Joining"
          mode="outlined"
          value={DOJ}
          style={styles.Balance}
          onChangeText={text => SetDOj(text)}
        />

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
              Submit();
            }}>
            <Text style={{fontSize: 12,color:"white"}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Gender: {
    backgroundColor: 'pink',
    width: 100,
    height: 100,
    textAlign: 'center',
    paddingTop: 40,
    borderRadius: 50,
  },
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
});
export default Creat;
