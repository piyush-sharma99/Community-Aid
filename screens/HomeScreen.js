/*
 *  ClassName: HomeScreen.js
 *
 *  Date: 28/03/2021
 *
 * @author Piyush Sharma, X17342356
 *
 * @reference https://reactnative.dev/docs/activityindicator
 * @reference https://www.udemy.com/course/react-native-the-practical-guide/
 * @reference https://icons.expo.fyi/
 */

//Imports
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";
import {
  FontAwesome5,
  AntDesign,
  FontAwesome,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import * as firebase from "firebase";
import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";
import logOut from "../functions/logOut";

//Main Component
const HomeScreen = (props) => {
  //Initialising variables
  const db = firebase.firestore();
  var user = firebase.auth().currentUser;
  const fb = firebase.auth();
  const [userName, setUserName] = useState("");

  //The useEffect below calls on notifications permissions then checks if permission is granted ot not
  //If permissions are granted then an expo notifiacation token is created and uploaded to firebase
  //If permissions are not granted then a prompt pops up asking for permissions
  useEffect(() => {
    Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then((statusObj) => {
        if (statusObj.status !== "granted") {
          return Permissions.askAsync(Permissions.NOTIFICATIONS);
        }
        return statusObj;
      })
      .then((statusObj) => {
        if (statusObj.status !== "granted") {
          throw new Error("Permission not granted!");
        }
      })
      .then(() => {
        return Notifications.getExpoPushTokenAsync();
      })
      .then((response) => {
        const token = response.data;

        db.collection("users").doc(user.uid).update({
          expoToken: token,
        });
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  }, []);

  //The useEffect below reads user information from firebase for dispay in the HomeScreen.js
  useEffect(() => {
    db.collection("users")
      .doc(user.uid)
      .get()
      .then((snapshot) => {
        const userInfo = snapshot.data();
        setUserName(userInfo.name);
      });
  }, []);

  return (
    <ImageBackground source={require("../assets/BG.png")} style={styles.bImage}>
      <Text style={styles.text3}>Welcome {userName}</Text>
      <View style={styles.screen}>
        <TouchableOpacity
          style={styles.clickView}
          onPress={() => {
            props.navigation.navigate({ routeName: "Map" });
          }}
        >
          <Card style={styles.cardView}>
            <View style={styles.content}>
              <FontAwesome5 name="map-marked-alt" size={70} color="white" />
              <Text style={styles.textStyle}>Map</Text>
            </View>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.clickView}
          onPress={() => {
            props.navigation.navigate({ routeName: "AssistanceRequest" });
          }}
        >
          <Card style={styles.cardView}>
            <View style={styles.content}>
              <AntDesign
                name="form"
                size={70}
                color="white"
                justifyContent="center"
              />
              <Text style={styles.textStyle}> Assistance Request</Text>
            </View>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.clickView}
          onPress={() => {
            props.navigation.navigate({ routeName: "ManageAR" });
          }}
        >
          <Card style={styles.cardView}>
            <View style={styles.content}>
              <FontAwesome name="edit" size={70} color="white" />
              <Text style={styles.textStyle}>Manage Requests</Text>
            </View>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.clickView}
          onPress={() => {
            props.navigation.navigate({ routeName: "App" });
          }}
        >
          <Card style={styles.cardView}>
            <View style={styles.content}>
              <MaterialIcons name="help-outline" size={70} color="white" />
              <Text style={styles.textStyle}>Need Assistance?</Text>
            </View>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.clickView}
          onPress={() => {
            props.navigation.navigate({ routeName: "setting" });
          }}
        >
          <Card style={styles.cardView}>
            <View style={styles.content}>
              <Feather name="settings" size={70} color="white" />
              <Text style={styles.textStyle}> Settings</Text>
            </View>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.clickView}
          onPress={() => logOut(fb, props)}
        >
          <Card style={styles.cardView}>
            <View style={styles.content}>
              <AntDesign name="logout" size={70} color="white" />
              <Text style={styles.textStyle}>Log Out</Text>
            </View>
          </Card>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

//Navigation options: changing header displayed on the page
HomeScreen.navigationOptions = {
  headerTitle: "Community Aid",
  headerStyle: {
    backgroundColor: "#2c8ffa",
  },
  headerTintColor: "white",
};

//CSS
const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  bImage: {
    width: "100%",
    height: "100%",
  },
  clickView: {
    marginTop: 20,
    width: "45%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 201,
    margin: 10,
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },

  container: {
    width: "50%",
    backgroundColor: "#fb5b5a",
    height: "30%",
    padding: 10,
    marginTop: 10,
  },

  content: {
    flex: 1,
    borderRadius: 25,
    backgroundColor: "#fb5b5a",
    alignItems: "center",
    justifyContent: "center",
  },

  cardView: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fb5b5a",
    borderWidth: 2,
    borderColor: "white",
    shadowColor: "black",
    borderRadius: 25,
    shadowOpacity: 1,
    elevation: 10,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },

  text3: {
    padding: 10,
    marginRight: 40,
    marginTop: 10,
    marginLeft: 40,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    borderWidth: 3,
    borderRadius: 15,
    borderColor: "#fb5b5a",
  },

  textStyle: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
  },
});

export default HomeScreen;
