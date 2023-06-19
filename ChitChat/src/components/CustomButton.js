import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../styles/GlobalStyles';

export default function CustomButton({title, callBack}) {
  return (
    <TouchableOpacity style={styles.btn_style} onPress={callBack}>
      <Text style={styles.text_style}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn_style: {
    backgroundColor: colors.btn_color_login,
    borderRadius: 10,
    marginHorizontal: 25,
    marginVertical: 10,
  },
  text_style: {
    fontFamily: 'JosefinSans-Bold',
    fontSize: 18,
    color: colors.white,
    alignSelf: 'center',
    padding: 10,
  },
});
