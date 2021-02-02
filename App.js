import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import NavigatorCA from'./navigation/CommunityAidNavigator';
import * as firebase from 'firebase';
import {firebaseConfig} from './apikey';


firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function (user) {
  if( user){
  console.log('Login successfull!!')
  
  }
  else{
    console.log('Not logged in!')
  }
    }); 

const fetchFonts = () => {
return Font.loadAsync({
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
});
};

export default function App() {
const[fontLoaded, setFontLoaded] = useState(false);

if (!fontLoaded) {
  return (<AppLoading 
  startAsync={fetchFonts}
  onFinish={() => setFontLoaded(true)}
  />
  );
}
  
  return <NavigatorCA/>;
  
}
