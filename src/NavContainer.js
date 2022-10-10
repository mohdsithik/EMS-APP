import React from "react";
import { View,Text,Image,TouchableOpacity } from "react-native";


const NavContainer=(props)=>{
    // const ScreenName=route?.params?.value
    // console.log(ScreenName)
    return(
        <View style={{padding:15,flexDirection:'row',}}>
        <TouchableOpacity onPress={props.onPress}>
            <Image style={{width:32,height:32}} source={require('/home/divum/Assignment/EMS/Asserts/left-arrow.png')}/>
        </TouchableOpacity>
        <Text style={{marginLeft:20,fontSize:20,color:"black",margin:4}}>{props.value}</Text>
     </View>
    )
}

export default NavContainer;