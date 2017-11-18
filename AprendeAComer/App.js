/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import * as firebase from 'firebase';
import Input from './components/Input.js'
import Icon from 'react-native-vector-icons/FontAwesome';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB18yHs-UzsY7ucPdvn-6Tq8YfNWZPkjMM",
  authDomain: "aprendeacomer-78039.firebaseapp.com",
  databaseURL: "https://aprendeacomer-78039.firebaseio.com",
  storageBucket: "aprendeacomer-78039.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App extends Component {
  render() {
    return (
      <View style= {styles.container}>
        <Input label = "" placeholder="Username" iconName="user" ></Input>
        <Input label = "" placeholder="Password" secureTextEntry iconName="user-secret" ></Input>
        <Text>Helloooooooo</Text>
          <Icon.Button  name="facebook-official" backgroundColor="#3b5998">
    <Text style={{fontFamily: 'Arial', fontSize: 15}}>Login with Facebook</Text>
  </Icon.Button>
   <Icon.Button  name="google-plus-official" backgroundColor="#3b5998">
    <Text style={{fontFamily: 'Arial', fontSize: 15}}>Login with Facebook</Text>
  </Icon.Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'pink',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
