import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>Sunny</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: "tomato",
  },
  city:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },  
  cityName:{
    fontSize: 68,
    fontWeight: "500",
  },
  weather:{
    flex: 3 ,
  },
  day: {
    flex: 1,
    backgroundColor:'teal',
    justifyContent:'center',
    alignItems:'center',
  },
  temp: {
    marginTop: 50,
    fontSize: 178,
  },
  desc: {
    marginTop: -30,
    fontSize: 60,
  }
});
