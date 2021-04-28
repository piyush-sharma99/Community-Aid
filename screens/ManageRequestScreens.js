/*
 *  ClassName: ManageRequestScreen.js
 *
 *  Date: 28/03/2021
 *
 * @author Piyush Sharma, X17342356
 *
 * @reference https://reactnative.dev/docs/activityindicator
 * @reference https://www.udemy.com/course/react-native-the-practical-guide/
 * @reference https://www.youtube.com/watch?v=iMCM1NceGJY
 */

//Imports
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Card } from "react-native-paper";
import * as firebase from "firebase";
import deleteRequest from "../functions/deleteRequest";

//Main Component
const ManageRequestScreens = (props) => {
  //Initialising Variables
  const [requests, setRequests] = useState([]);
  const db = firebase.firestore();
  var user = firebase.auth().currentUser;

  //The function below reads assistance requests that were created by the user in a time sorted order
  useEffect(() => {
    db.collection("Assistance Request")
      .where("uid", "==", user.uid)
      .onSnapshot((querySnapshot) => {
        var requests = [];

        querySnapshot.forEach((documentSnapshot) => {
          requests.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.request_ID,
          });
        });

        requests = requests.sort(
          (a, b) => b.Time["seconds"] - a.Time["seconds"]
        );
        console.log(requests);
        setRequests(requests);
      });
  }, []);

  //The function below takes data previously read above and displays it using the structure below in a flatlist format
  const renderRequest = ({ item }) => (
    <View style={styles.screen2}>
      <Card style={styles.cardView2}>
        <View>
          <Text style={styles.text2}>Request Time/Date:</Text>
          <Text style={styles.text3}>{item.date}</Text>
          <Text style={styles.text2}>Request Type:</Text>
          <Text style={styles.text3}>{item.request_Type}</Text>
          <Text style={styles.text2}>Request Description:</Text>
          <Text style={styles.text3}>{item.request_Description}</Text>
          <Text style={styles.text2}>Request Status:</Text>
          <Text style={styles.text3}>{item.status}</Text>
          <TouchableOpacity
            style={styles.Btn}
            onPress={() => {
              props.navigation.navigate("EditR", { item });
            }}
          >
            <Text style={styles.Text}>Edit Request</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Btn}
            onPress={() => deleteRequest(item, db)}
          >
            <Text style={styles.Text}>Delete Request</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );

  return (
    <ImageBackground source={require("../assets/BG.png")} style={styles.bImage}>
      <View style={styles.screen}>
        <Text style={styles.text}>Requests made by you:</Text>

        <FlatList
          //Flatlist for reading and displaying data
          style={{ flex: 1 }}
          data={requests}
          renderItem={renderRequest}
          keyExtractor={(item) => item.request_ID}
        />
      </View>
    </ImageBackground>
  );
};

//Navigation options: changing header displayed on the page
ManageRequestScreens.navigationOptions = {
  headerTitle: "Assistance Requests",
  headerTitleStyle: { alignSelf: "center" },
  headerStyle: {
    backgroundColor: "#2c8ffa",
  },
  headerTintColor: "white",
};

//CSS
const styles = StyleSheet.create({
  bImage: {
    width: "100%",
    height: "100%",
  },

  screen: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  screen2: {
    width: 410,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    padding: 10,
    marginBottom: 20,
    marginRight: 40,
    marginLeft: 40,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 15,
    borderWidth: 3,
    borderColor: "#fb5b5a",
    borderRadius: 15,
  },
  text2: {
    padding: 5,
    marginRight: 40,
    marginLeft: 40,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },

  text3: {
    padding: 5,
    marginRight: 40,
    marginLeft: 40,
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },

  inputText: {
    height: 50,
    color: "black",
  },

  Text: {
    color: "white",
    fontSize: 20,
  },

  Btn: {
    width: "100%",
    backgroundColor: "#2E86C1",
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderWidth: 2,
    borderColor: "white",
  },

  cardView2: {
    justifyContent: "center",
    width: "95%",
    backgroundColor: "#fb5b5a",
    shadowColor: "black",
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "#fff",
    shadowOpacity: 1,
    marginTop: 15,
    marginBottom: 20,
    padding: 15,
    elevation: 10,
    alignItems: "center",
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
});

export default ManageRequestScreens;
