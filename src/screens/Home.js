import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <SafeAreaView style={styles.container}></SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
