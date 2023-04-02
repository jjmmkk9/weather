import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import * as Location from 'expo-location';
import { Fontisto } from '@expo/vector-icons';
// https://openweathermap.org/current
const { width: SCRREN_WIDTH } = Dimensions.get('window');
const API_KEY = '0add46269fdcb5839057eae5d7dde1ef';

    const icons = {
      Clouds: 'cloudy',
      Clear: 'day-sunny',
      Snow:'snow',
      Rain: 'rains',
      Drizzle:'rain',
      Thunderstorm: 'lightning',
      Atmosphere: 'cloudy-gusts',
    }
    
export default function App() {
  const [city, setCity] = useState('Loading...');
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();



    setDays(
      json.list.filter((weather) => {
        if (weather.dt_txt.includes('09:00:00')) {
          return weather;
        }
      })
    );

    console.log(json);
  };

  useEffect(() => {
    ask();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      {!ok ? (
        <Text style={{ fontSize: 40 }}>why~~😭</Text>
      ) : (
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.weather}>
          {days.length === 0 ? (
            <View style={styles.day}>
              <ActivityIndicator
                color="white"
                size="large"
                style={{ marginTop: 10 }}
              />
            </View>
          ) : (
            days.map((day, index) => {
              return (
                <View key={index} style={styles.day}>
                  <View style={{ flexDirection: 'row', alignItems:'center', justifyContent:'space-between' }}>
                    <Text style={styles.temp}>
                      {parseFloat(day.main.temp).toFixed(1)}
                    </Text>
                    <Fontisto name={icons[day.weather[0].main]} size={68} color="white" />
                  </View>
                  <Text style={styles.description}>{day.weather[0].main}</Text>
                  <Text style={styles.tinyText}>
                    {day.weather[0].description}
                  </Text>
                </View>
              );
            })
          )}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  city: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    color: 'white',
    fontSize: 68,
    fontWeight: '500',
  },
  weather: {
    //scrollview must be bigger than screen so no need flex prop!!!!!
  },
  day: {
    width: SCRREN_WIDTH,
  },
  temp: {
    color: 'white',
    fontSize: 128,
    marginTop: 50,
  },
  description: {
    color: 'white',
    marginTop: -30,
    fontSize: 50,
  },
  tinyText: {
    color: 'white',
    fontSize: 20,
  },
});
