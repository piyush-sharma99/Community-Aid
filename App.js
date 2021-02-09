import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import NavigatorCA from'./navigation/CommunityAidNavigator';
import LoggedInNav from'./navigation/LoggedInNavigator';
import * as firebase from 'firebase';
import {firebaseConfig} from './apikey';
import * as Notifications from 'expo-notifications';


Notifications.setNotificationHandler({
    handleNotification: async () => {
      return {
        shouldShowAlert: true,
      };
    },
  });

  Notifications.addNotificationResponseReceivedListener(
    (response) => {
      console.log(response);
    }
  );

  Notifications.addNotificationReceivedListener(
    (notification) => {
      console.log(notification);
    }
  );

firebase.initializeApp(firebaseConfig);

const fetchFonts = () => {
return Font.loadAsync({
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
});
};

export default function App() {
const[fontLoaded, setFontLoaded] = useState(false);
const[userLog, setUserLog] = useState(false);

useEffect(() => {
  firebase.auth().onAuthStateChanged(function (user) {
    if(user){
      setUserLog(true);
    
    }
    else{
      console.log('Not logged in!')
    }
      }); 

}, []);


if (!fontLoaded) {
  return (<AppLoading 
  startAsync={fetchFonts}
  onFinish={() => setFontLoaded(true)}
  />
  );
}
else{
  if(userLog == true){
    return <LoggedInNav/>;

  }
  return <NavigatorCA/>;

}
  
  
  
}
