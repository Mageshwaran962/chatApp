import React, {useEffect, useRef} from 'react';
import {View, Text, Animated, StyleSheet, Dimensions} from 'react-native';
import {colors} from '../styles/GlobalStyles';

export default function ToastNotification({title, onHide, type}) {
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(3000),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onHide();
    });
  }, [title]);
  return (
    <Animated.View
      style={{
        opacity,
        transform: [
          {
            translateY: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [-10, 5],
            }),
          },
        ],
        marginHorizontal: 25,
        backgroundColor:
          type != 'error' ? colors.toast_error : colors.toast_success,
        padding: 12,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 6,
        // position: 'absolute',
      }}>
      <Text style={styles.toast_text}>{title}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  toast_text: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 15,
    color: colors.white,
    alignSelf: 'center',
  },
});
