import React,{useState} from "react";
import { View,Text ,StyleSheet,TouchableOpacity,Image} from "react-native";
 
const Landing=({route,navigation})=>{
    // const [Displayname,setDisplayname]=useState('');


    // console.log(route);
    // const value=route?.params?.userName;
    
    // setDisplayname(route?.params?.userName);

     const value=route?.params?.userName
    
    // console.log(value);
   
    return(
        <View style={{backgroundColor:"#dec195",flex:1}}>
         <View style={{padding:15,flexDirection:'row',}}>
            <TouchableOpacity onPress={()=>navigation.pop()}>
                <Image style={{width:32,height:32}} source={require('/home/divum/Assignment/EMS/Asserts/left-arrow.png')}/>
            </TouchableOpacity>
            <Text style={{marginLeft:20,fontSize:20,color:"black",margin:4}}>Landing</Text>
         </View>
            <View >
            <Text style={styles.Welcome}>Welcome</Text>
            <Text style={{textAlign:"center",fontSize:30,color:"white"}}>{value}</Text>
            <View style={{marginTop:70}}>
                <TouchableOpacity style={styles.Button1} onPress={()=> navigation.navigate("Create")}>
                    <Text style={styles.ButtonColor}>Create Employee Record</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button1} onPress={()=> navigation.navigate("Details")}>
                    <Text style={styles.ButtonColor}>Employee List</Text>
                </TouchableOpacity>
            </View>
            </View>

        </View>
    );
}
styles=StyleSheet.create({
   Welcome:{
     textAlign:"center",
     fontSize:35,
     marginTop:170,
     color:"white"
   },
   Button1:{
    backgroundColor:"black",
    alignItems:"center",
    padding:20,
    margin:10,
    borderRadius:10,
   },
   ButtonColor:{
    color:"white"
   }
});

 
export default Landing;