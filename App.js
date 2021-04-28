/*
 *  ClassName: App.js
 *
 *  Date: 28/03/2021
 *
 * @author Piyush Sharma, X17342356
 *
 * @reference https://reactnative.dev/docs/activityindicator
 * @reference https://www.udemy.com/course/react-native-the-practical-guide/
 * @reference https://firebase.google.com/docs
 * @reference https://docs.expo.io/
 *
 */

//Imports
import React, { useState, useEffect } from "react";
import { LogBox } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import NavigatorCA from "./navigation/CommunityAidNavigator";
import LoggedInNav from "./navigation/LoggedInNavigator";
import * as firebase from "firebase";
import { firebaseConfig } from "./apikey";
import * as Notifications from "expo-notifications";
import { Asset } from "expo-asset";

//Ingnores log notifications for EXPO CLI
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

//Async function that allows notifications to be seen on the device
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
    };
  },
});

//Notification handler for when app is in background
Notifications.addNotificationResponseReceivedListener((response) => {
  console.log(response);
});

//Notification handler for when app is in forground
Notifications.addNotificationReceivedListener((notification) => {
  console.log(notification);
});

//Initialising firebase
firebase.initializeApp(firebaseConfig);

//The function below fetches assets such as font and images
const fetchAsset = () => {
  return (
    Asset.loadAsync([require("./assets/BG.png"), require("./assets/Logo.png")]),
    Font.loadAsync({
      "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
      "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    })
  );
};

export default function App() {
  //Initialising variables
  const [Loaded, setLoaded] = useState(false);
  const [userLog, setUserLog] = useState(false);

  //The usEffect below checks if the user is logged in or not
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUserLog(true);
      } else {
        console.log("Not logged in!");
      }
    });
  }, []);

  //Checking if assets are loaded and providing the appropriate navigation
  if (!Loaded) {
    return (
      <AppLoading startAsync={fetchAsset} onFinish={() => setLoaded(true)} />
    );
  } else {
    if (userLog == true) {
      return <LoggedInNav />;
    }
    return <NavigatorCA />;
  }
}
