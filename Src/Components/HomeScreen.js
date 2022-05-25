import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {

 function output(name){
  navigation.navigate(name);
 }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen 1</Text>
      <View>
        <TouchableOpacity  
        style={{backgroundColor:'lightblue', padding:30,marginBottom:20}}
        onPress={()=>output("Home1")}>
          <Text>HomeScreen1</Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={{backgroundColor:'lightblue', padding:30,marginBottom:20}}
         onPress={()=>output("Home2")}>
          <Text>HomeScreen2</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={{backgroundColor:'lightblue', padding:30,marginBottom:20}}
        onPress={()=>output("Home3")}>
          <Text>HomeScreen3</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default HomeScreen;