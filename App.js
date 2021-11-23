import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

// https://home.openweathermap.org/api_keys에서 api 키를 발급받는다.
const API_KEY = "79a66d36cd902abff8647cae058f2a45";

const {width: SCREEN_WIDTH} = Dimensions.get('window');

export default function App() {
  const [city, setCity] = useState("...Loading");
  const [ok, setOk] = useState(true);
  const getWeather = async() => {
      const { granted } = await Location.requestForegroundPermissionsAsync(); // 앱 사용중에만 위치정보권한을 요청하는 requestForegroundPermissionAsync()
      if(!granted) { // 위치정보 권한을 거절하면
        setOk(false); // setOk = false 로 설정
      }
      Location.setGoogleApiKey('AIzaSyAdBvn3eGqxvDLTcNo22TVPoBpn3KGXJgA');
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy: 5});
      // latitude, longitude 로 reverse geocoding
      const location = await Location.reverseGeocodeAsync({latitude, longitude}, {useGoogleMaps: false});
      setCity(location[0].region);
  };
  // After Rendering ask 함수를 호출하는 useEffect 함수 생성
  useEffect(() => {
    getWeather();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
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
