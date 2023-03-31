import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text,ScrollView, Dimensions } from 'react-native';

const {width:SCRREN_WIDTH} = Dimensions.get("window");
export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.city}><Text style={styles.cityName}>Busan</Text></View>
      <ScrollView 
      horizontal 
      pagingEnabled 
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>22</Text>
          <Text style={styles.discription}>Sunnygggg</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>22</Text>
          <Text style={styles.discription}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>22</Text>
          <Text style={styles.discription}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:'tomato'
  },
  city:{
    flex:1.2,
    justifyContent:"center",
    alignItems:'center',

  },
  cityName: {
    color:'black',
    fontSize:68,
    fontWeight:'500',
 },
  weather:{
    //scrollview must be bigger than screen so no need flex prop!!!!!
  },
  day:{
    width: SCRREN_WIDTH,
    alignItems:'center',
  },
  temp:{
    fontSize:178,
    marginTop:50

  },
  discription:{
    marginTop:-30,
    fontSize:50
  }

})

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
