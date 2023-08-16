import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function Loader() {
  return (
    <Image
      style={styles.loaderStyle}
      source={require('../assets/images/loader.gif')}
    />
  );
}

const styles = StyleSheet.create({
  loaderStyle: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});
