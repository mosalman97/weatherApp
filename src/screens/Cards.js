import {View, Image, Text} from 'react-native';
import React from 'react';

// constants
import {deviceHeight, deviceWidth, SIZE} from '../constants/Constants';

export default function Cards({data}) {
  return (
    <View
      style={{
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'white',
      }}>
      <View
        style={{
          height: deviceHeight / 5,
          width: deviceWidth / 2 - 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: SIZE(25),
            height: SIZE(25),
            marginBottom: 10,
          }}>
          <Image
            source={require('../assets/icons/sun.png')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
            color: 'white',
            fontStyle: 'italic',
            marginBottom: 5,
          }}>
          27.3
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: 'white',
            fontStyle: 'italic',
            marginBottom: 5,
          }}>
          78
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: 'white',
            fontStyle: 'italic',
            marginBottom: 5,
          }}>
          Thunderstorm with rain
        </Text>
      </View>
    </View>
  );
}
