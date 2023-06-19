import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {loginStyles} from '../styles/LoginStyle';
import {colors, constants} from '../styles/GlobalStyles';
import CustomButton from '../components/CustomButton';
import ToastNotification from '../components/ToastNotification';
import axios from 'axios';
import {registerRoute} from '../utils/APIRoutes';
import {storeData} from '../utils/LocalStorage';
import {REACT_NATIVE_APP_ASYNC_KEY} from '@env';

export default function Login({navigation}) {
  const [isloading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState('default');
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleChange = (event, name) => {
    setValues({...values, [name]: event.nativeEvent.text});
  };
  const handleValidation = () => {
    const {password, confirmPassword, username, email} = values;
    if (password !== confirmPassword) {
      setMessages('Password and confirm password should be same.');
      return false;
    } else if (username.length < 3) {
      setMessages('Username should be greater than 3 characters.');
      return false;
    } else if (password.length < 8) {
      setMessages('Password should be equal or greater than 8 characters.');
      return false;
    } else if (email === '') {
      setMessages('Email is required.');
      return false;
    }

    return true;
  };
  const handleSubmit = async event => {
    if (handleValidation()) {
      const {email, username, password} = values;
      try {
        const {data} = await axios.post(registerRoute, {
          username,
          email,
          password,
        });
        if (data.status === false) {
          setMessages(data.msg);
        }
        if (data.status === true) {
          setMessages(data.msg);
          storeData(REACT_NATIVE_APP_ASYNC_KEY, JSON.stringify(data.user));
          setTimeout(() => {
            navigation.navigate('chat');
          }, 3000);
        }
      } catch (e) {
        setMessages(e);
      }
    }
  };
  return (
    <SafeAreaView style={loginStyles.safeArae}>
      <View style={loginStyles.safeFlex}>
        <View style={loginStyles.container}>
          <View style={loginStyles.row_style_logo}>
            <Image
              style={loginStyles.image_style}
              source={require('../assets/images/logo.png')}
            />
            <Text style={loginStyles.text_style}>
              {constants.login.logo_text}
            </Text>
          </View>
          <TextInput
            style={loginStyles.input_style}
            placeholder={constants.login.user_name}
            placeholderTextColor={'white'}
            onChange={e => handleChange(e, 'username')}
          />
          <TextInput
            style={loginStyles.input_style}
            placeholder={constants.login.email}
            placeholderTextColor={'white'}
            onChange={e => handleChange(e, 'email')}
          />
          <TextInput
            style={loginStyles.input_style}
            placeholder={constants.login.password}
            placeholderTextColor={'white'}
            onChange={e => handleChange(e, 'password')}
          />
          <TextInput
            style={loginStyles.input_style}
            placeholder={constants.login.confirm_password}
            placeholderTextColor={'white'}
            onChange={e => handleChange(e, 'confirmPassword')}
          />
          <CustomButton
            title={constants.login.create_user}
            callBack={handleSubmit}
          />
          <View style={loginStyles.bottom_row_style}>
            <Text style={loginStyles.bottom_text_style}>
              {constants.login.already_have_account.toLocaleUpperCase()}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('login');
              }}>
              <Text
                style={[
                  loginStyles.bottom_text_style,
                  {color: colors.blue_link},
                ]}>
                {constants.login.login.toLocaleUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {messages != 'default' && (
        <ToastNotification
          title={messages}
          onHide={() => {
            setMessages('default');
          }}
          type={'errors'}
        />
      )}
    </SafeAreaView>
  );
}
