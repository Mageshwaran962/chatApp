import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Buffer} from 'buffer';
import {storeData, getData} from '../utils/LocalStorage';
import {avatarPageStyle} from '../styles/AvatarPageStyle';
import {setAvatarRoute} from '../utils/APIRoutes';
import {REACT_NATIVE_APP_ASYNC_KEY} from '@env';
import Svg, {Path} from 'react-native-svg';
import SvgUri from 'react-native-svg-uri';
import Loader from '../components/Loader';

export default function ProfilePage({navigation}) {
  const api = `https://api.multiavatar.com/4645646`;
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);
  // useEffect(() => {
  //   if (getData(REACT_NATIVE_APP_ASYNC_KEY)) {
  //       navigation.navigate('chat');
  //   }
  // }, []);
  useEffect(async () => {
    const data = [];
    for (let i = 0; i < 4; i++) {
      const image = await axios.get(
        `${api}/${Math.round(Math.random() * 1000)}`,
      );
      data.push(image.data);
    }
    setAvatars(data);
    setIsLoading(false);
  }, []);

  return (
    <SafeAreaView style={avatarPageStyle.safe}>
      {isLoading ? (
        <Loader />
      ) : (
        <View style={avatarPageStyle.container}>
          <Text style={avatarPageStyle.headerText}>
            Pick an Avatar as your profile picture
          </Text>
          <View style={avatarPageStyle.rowStyle}>
            {avatars.map((avatar, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={avatarPageStyle.avatarBoder}>
                  <SvgUri
                    width="80"
                    height="80"
                    svgXmlData={avatar}
                    key={index}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
