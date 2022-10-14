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


  const [userFnameError, setUserFnameError] = useState(false);
  const [userLnameError, setUserLnameError] = useState(false);
  const [userDesignationError, setUserDesignationError] = useState(false);
  const [userDOBError, setUserDOBError] = useState(false);
  const [userDOJError, setUserDOJError] = useState(false);
  const [userEmployeeIDError, setUserEmployeeIDError] = useState(false);
  const [userGenderError, setUserGenderError] = useState(false);
 

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
  

  // Storage.set("person", person);

  var radio_props = [
    {label: 'Male  ', value: 0},
    {label: 'Female', value: 1},
  ];

  const onClickSubmit = async () => {
    if(Gender && fname && lname && Designation && DOB && DOJ && EmployeeID )
    {
    let data = await getData('userInfo');
    setCount(Count + 1);
    data.push(person);
    storeData('userInfo', data);
    navigation.navigate('Landing')
    }
    else
    {
        if(!fname)
          setUserFnameError(true)
        if(!lname)
          setUserLnameError(true)
        if(!Gender)
          setUserGenderError(true)
        if(!Designation)
          setUserDesignationError(true)
        if(!EmployeeID)
          setUserEmployeeIDError(true)
        if(!DOB)
          setUserDOBError(true)
        if(!DOJ)
          setUserDOJError(true)
        
         

    }
   
     
  };
  const onChangeTextValue=(text,TextInputName)=>{
       switch(TextInputName){
        case 'FirstName':
          SetFname(text)
          setUserFnameError(false)
          
          // console.log(person)
          break;
        case 'LastName':
         
          SetLname(text)
          setUserLnameError(false)
           
          // console.log(person)
          break;
        case 'Designation':
          SetDesignation(text)
          setUserDesignationError(false)
          break;
        case 'DOB':
          SetDOB(text)
          // console.log(person)
          setUserDOBError(false)
          break;
        case 'DOJ':
          SetDOj(text)
          setUserDOJError(false)
          break;
        case 'EmployeeID':
          SetEmployeeID(text)
          setUserEmployeeIDError(false)
          // console.log(person)
          break;



        
       }
  }

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
            error={userGenderError}
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
                  setUserGenderError(false)
                } else {
                  setGender('Female');
                  setUserGenderError(false)
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
          onChangeText={text=> onChangeTextValue(text,"FirstName") }
         
          error={userFnameError}
          
          
          
        />
        <TextInput
          label="Last Name"
          value={lname}
          mode="outlined"
          style={styles.Name}
          onChangeText={text=> onChangeTextValue(text,"LastName") }
          error={userLnameError}
          
          
          
        
         
        />
      </View>
      <View>
        <TextInput
          label="Designation"
          mode="outlined"
          value={Designation}
          style={styles.Balance}
          onChangeText={text=> onChangeTextValue(text,"Designation") }
          error={userDesignationError}
        />
        <TextInput
          label="DOB"
          mode="outlined"
          value={DOB}
          style={styles.Balance}
          onChangeText={text=> onChangeTextValue(text,"DOB") }
          error={userDOBError}
        />

        <TextInput
          label="Date Of Joining"
          mode="outlined"
          value={DOJ}
          style={styles.Balance}
          onChangeText={text=> onChangeTextValue(text,"DOJ") }
          error={userDOJError}
        />

        <TextInput
          label="Employee ID"
          mode="outlined"
          value={EmployeeID}
          style={styles.Balance}
          onChangeText={text=> onChangeTextValue(text,"EmployeeID") }
          error={userEmployeeIDError}
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
