import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import NavigatorCA from'./navigation/CommunityAidNavigator';
import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDGliQfMfKpXUllG5ZPyClJL6C8VgFKXo8",
  authDomain: "community-aid.firebaseapp.com",
  databaseURL: "https://community-aid-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "community-aid",
  storageBucket: "community-aid.appspot.com",
  messagingSenderId: "529896701339",
  appId: "1:529896701339:web:1c30369d39f8654b01353e",
  measurementId: "G-PPD28P0PC6"
};

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
