import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <>
      <View style={styles.topContainer} />
      <View style={styles.container}>
        <View style={styles.redBox} />
        <View style={styles.greenBox} />
        <View style={styles.blueBox} />
      </View>
      <View style={styles.bottomContainer} />
    </>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: '#121212',
    flex: 1,
  },
  container: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#212121',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#121212',
  },
  redBox: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
  greenBox: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
  },
  blueBox: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
  },
});
