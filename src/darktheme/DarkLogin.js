import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme} from '../redux/action/Actions';

const DarkLogin = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const theme = useSelector(state => state.ThemeReducer);

  return (
    <View
      style={{flex: 1, backgroundColor: theme === 'DARK' ? '#000' : '#fff'}}>
      <Text
        style={{
          alignSelf: 'center',
          marginTop: 50,
          fontSize: 25,
          fontWeight: '700',
          color: theme === 'DARK' ? '#fff' : '#000',
        }}> active theme: {theme === 'DARK' ? 'Dark Theme' : 'Light Theme'}
      </Text>

      <Text
        style={{
          alignSelf: 'center',
          marginTop: 50,
          fontSize: 30,
          fontWeight: '700',
          color: theme === 'DARK' ? '#fff' : '#000',
        }}>
        Login
      </Text>

      <TextInput
        placeholder="Email Id"
        placeholderTextColor={theme === 'DARK' ? '#fff' : '#000'}
        style={{
          width: '85%',
          paddingLeft: 15,
          height: 50,
          borderRadius: 15,
          borderWidth: 0.5,
          fontSize: 20,
          alignSelf: 'center',
          marginTop: 50,
          color: theme === 'DARK' ? '#fff' : '#000',
          borderColor: theme === 'DARK' ? '#fff' : '#000',
        }}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor={theme === 'DARK' ? '#fff' : '#000'}
        style={{
          width: '85%',
          paddingLeft: 15,
          height: 50,
          borderRadius: 15,
          borderWidth: 0.5,
          fontSize: 20,
          alignSelf: 'center',
          marginTop: 20,
          color: theme === 'DARK' ? '#fff' : '#000',
          borderColor: theme === 'DARK' ? '#fff' : '#000',
        }}
      />

      <Text
        style={{
          alignSelf: 'flex-end',
          marginTop: 20,
          marginRight: 30,
          fontSize: 20,
          fontWeight: '600',
          color: theme === 'DARK' ? '#fff' : '#000',
        }}>
        Forgot Password ?
      </Text>

      <TouchableOpacity
        style={{
          width: '85%',
          height: 50,
          backgroundColor: theme === 'DARK' ? '#fff' : '#000',
          borderRadius: 15,
          alignSelf: 'center',
          marginTop: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, color: theme === 'DARK' ? '#000' : '#fff'}}>
          Login
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          alignSelf: 'center',
          marginTop: 40,
          fontSize: 20,
          fontWeight: '600',
          color: theme === 'DARK' ? '#fff' : '#000',
        }}
        onPress={() => {
          navigation.navigate('DarkSignUp');
        }}>
        Create new account
      </Text>

      <TouchableOpacity
        style={{
          width: '85%',
          height: 50,
          backgroundColor: theme === 'DARK' ? '#000' : '#fff',
          borderRadius: 15,
          borderWidth: 0.5,
          alignSelf: 'center',
          marginTop: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: theme === 'DARK' ? '#fff' : '#000',
        }}
        onPress={() => {
          if (theme === 'DARK') {
            dispatch(changeTheme('LIGHT'));
          } else {
            dispatch(changeTheme('DARK'));
          }
        }}>
        <Text style={{fontSize: 18, color: theme === 'DARK' ? '#fff' : '#000'}}>
          {theme === 'DARK' ? 'Apply Light Theme' : 'Apply Dark Theme'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DarkLogin;
