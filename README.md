# Create Weather information Application by using React-Native (리액트 네이트브로 날씨 정보앱 개발)

## 프로젝트 시작

프로젝트 NomadWeather를 다음 명령으로 실행한다.

```javascript
expo init 프로젝트명
```

다음 명령으로 expo 아이디, 비밀번호를 기입하여 로그인을 시도한다.

```javascript
expo login
```
로그인이 완료되면 다음 명령으로 휴대폰에서 expo 어플리케이션을 통해 시뮬레이터를 작동할 수 있다.

```javascript
npm start
```

## 기본 레이아웃 지정
```javascript
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
});
```

## 날씨를 측정할 도시 이름와 기온, 날씨 정보를 생성

### 날씨를 측정할 도시 이름 생성

```javascript
<View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
```
스타일
```javascript
city:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },  
  cityName:{
    fontSize: 68,
    fontWeight: "500",
  }, 
```

### 기온과 날씨 정보 생성

```javascript
<View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>Sunny</Text>
        </View>
      </View>
```
 

스타일

```javascript
day: {
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
```


     
  
