import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  FlatList,
  PermissionsAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';

// constants
import {deviceHeight, deviceWidth} from '../constants/Constants';

import Icon from 'react-native-vector-icons/Ionicons';

// components
import Cards from './Cards';

// packages
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';

// apikey
const API_KEY = '92e845cf658046779407f5fef2acea1f';

export default function Home() {
  const [city, setCity] = useState();
  const [cityDetail, setCityDetail] = useState({});
  const [daysDetail, setdaysDetail] = useState([]);
  const [longitude, setLongitute] = useState('');
  const [latitude, setLatitude] = useState('');
  const detail = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];

  // function to request location permission and get the current position
  const getLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          position => {
            const {latitude, longitude} = position.coords;
            setLongitute(longitude);
            setLatitude(latitude);
          },
          error => {
            console.log('Error:', error);
          },
        );
      } else {
        console.log('Location permission denied');
      }
    } catch (error) {
      console.log('Location permission error:', error);
    }
  };

  // api for weather report
  const getWeatherDetail = () => {
    axios
      .get('https://api.weatherbit.io/v2.0/forecast/daily', {
        params: {
          key: API_KEY,
          lat: latitude,
          lon: longitude,
        },
      })
      .then(response => {
        // console.log(response.data);
        setCityDetail(response.data);
        setdaysDetail(response.data.data);
      })
      .catch(error => {
        console.log(error, 'api error');
      });
  };

  const sunriseTimestamp = 1684888662; // Provided sunrise timestamp
  const sunsetTimestamp = 1684934177; // Provided sunset timestamp

  // Convert sunrise timestamp to Date object
  const sunriseDate = new Date(sunriseTimestamp * 1000);
  const sunriseTime = sunriseDate.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  // Convert sunset timestamp to Date object
  const sunsetDate = new Date(sunsetTimestamp * 1000);
  const sunsetTime = sunsetDate.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  useEffect(() => {
    getLocationPermission();
    // getWeatherDetail();
  }, []);
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={{height: deviceHeight, width: deviceWidth}}
        blurRadius={70}
      />
      <View
        style={{
          position: 'absolute',
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: deviceWidth - 20,
          }}>
          <Icon name="menu" size={46} color="white" />
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 100}}>
          <Text style={{fontSize: 40, color: 'white'}}>Weather App</Text>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            Search the city by the name or zipcode
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'white',
              marginTop: 16,
              paddingHorizontal: 10,
            }}>
            <TextInput
              placeholder="Search City"
              placeholderTextColor="white"
              style={{paddingHorizontal: 10, color: 'white', fontSize: 16}}
            />
            <TouchableOpacity>
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', marginVertical: 30}}>
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              Malappuram
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              IN
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              Sunrise {sunriseTime}
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              Sunset {sunsetTime}
            </Text>
          </View>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              paddingHorizontal: 10,
              //   marginTop: 200,
              marginBottom: 20,
            }}>
            Forcast for 6 days
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={detail}
            renderItem={({item}) => <Cards data={item} />}
          />
        </View>
      </View>
    </View>
  );
}
