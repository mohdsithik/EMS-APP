import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity} from 'react-native';
import RadioForm, {
} from 'react-native-simple-radio-button';
import {storeData, getData} from './Storage';
import {TextInput} from 'react-native-paper';
import NavContainer from './NavContainer';

const Creat = ({navigation}) => {
  const [Gender, setGender] = useState('');
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
    if(data.length==[])
    {
      setCount(0);
    
    }
    else
    {
    const lastIdex = data.length
    // console.log('last',lastIdex)
    setCount(lastIdex+1);
    console.log('last',lastIdex)
    }
     
     
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

  const onClickSubmit = async () => {
    let data = await getData('userInfo');
    setCount(Count + 1);
   
    // console.log(data);
    // console.log('Existing data===>',data);
    // let userId = 1;
    // if(data.length > 0) {
    //   const lastPerson = data[data.length - 1];
    //    userId =lastPerson.ID + 1;
    // }
    // person.ID = userId;
    data.push(person);
    storeData('userInfo', data);
    // alert("Submitted")
    // navigation.navigate('Landing')
  };

  return (
    <ScrollView style={{backgroundColor: '#dec195', flex: 1}}>
         <NavContainer value={'Create'} onPress={()=>navigation.pop()}/>
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
                  setGender('Male');
                } else {
                  setGender('Female');
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
              onClickSubmit();
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
