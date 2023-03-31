import React from "react";
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1}}>
      <View style={{flex: 1,  backgroundColor:'black'}}></View>
      <View style={{flex: 2,  backgroundColor:'red'}}></View>
      <View style={{flex: 1,  backgroundColor:'yellow'}}></View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text:{
//     fontSize:28,
//     color:'black'
//   }
// });
