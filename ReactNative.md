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

### weather안의 day View를 여러개 생성하고 weather를 ScrollView로 변경

스크롤기능을 제공하는 API인 ScrollView를 Import 해준다.
```javascript
import {ScrollView} from 'react-native'
```

그리고 weather를 ScrollView로 감싸준다.
```javascript
<ScrollView style={styles.weather}>
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
```

스크롤을 수직이 아닌 수평으로 만들어주는 horizontal 속성을 ScrollView에 적용
```javascript
<ScrollView horizontal style={styles.weather}>
```

#### ScrollView 사용시 생기는 문제점

weather와 day의 flex 값을 삭제한다. (ScrollView가 ScrollView의 Childern보다 커야하기 때문)
```javascript
weather:{
    backgroundColor:'blue',
  },
  day: {
    alignItems:'center',
  },
```

ScrollView의 style을 contentContainerStyle로 수정한다.
```javascript
<ScrollView horizontal contentContainerStyle={styles.weather}>
```

## Dimensions로 사용자의 디바이스의 크기를 측정

react-native의 Dimensions를 import한다.
```javascript
import {Dimensions} from 'react-native';
```

사용자 디바이스의 가로 너비를 Dimensions의 get 메서드로 구한 뒤 SCREEN_WIDTH에 저장한다.
```javascript
const {width: SCREEN_WIDTH} = Dimensions.get('window');
```  

SCREEN_WIDTH를 여러개의 day에 적용한다.
```javascript
day:{
  width: SCREEN_WIDTH,
  alignItems: 'center',
}
```
#### ScrollView에 pagingEnabled 속성을 추가하여 스크롤의 이동을 제한한다.

```javascript
<ScrollView pagingEnabled horizontal contentContainerStyle={styles.weather}>
```
#### ScrollView에 showHorizontalScrollIndicator={false}를 설정하여 Scroll Indicator를 제거

```javascript
<ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.weather}>
```
## 사용자의 위치 정보를 가져오기

다음 명령을 터미널에서 실행하여 expo가 제공하는 위치정보 API를 설치한다.
```javascript
expo install expo-location
```

expo-location에서 제공하는 Location을 import한다.
```javascript
import {Location} from 'expo-location';
```
### 사용자의 권한 요청

개발문서 https://docs.expo.dev/versions/latest/sdk/location/#locationrequestpermissionsasync 의 Usage 탭에서 사용자의 권한을 요청하는 requestPermissionAsync()

#### 위치 정보의 상태를 useState 함수에 저장

```javascript
const [location, setLocation] = useState();
const [ok, setOK] = useState(true);
```

#### 렌더링 된 후 ask 함수를 호출하는 useEffect 함수 생성

```javascript
useEffect(() => {
    ask();
  }, []);
```

#### ask 함수가 호출되면 앱 사용중에만 위치정보권한을 요청하는 requestForegroundPermissionsAsync() 함수를 호출
```javascript
const ask = async() => {
    const { granted } = await Location.requestForegroundPermissionsAsync(); // 앱 사용중에만 위치정보권한을 사용하는 requestForegroundPermissionAsync()
    if(!granted) { // 위치정보 권한을 거절하면
      setOk(false); // setOk = false 로 설정
    }
  };
```

