import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: "tomato",
  },
  city:{
    flex: 1.2,
    justifyContent: 'center',
    alignItems:'center',
  },  
  cityName:{
    fontSize: 68,
    fontWeight: "500",
  },
  weather:{
  
  },
  day: {
    width: SCREEN_WIDTH,
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
