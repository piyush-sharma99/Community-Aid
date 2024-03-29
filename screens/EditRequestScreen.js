/*
 *  ClassName: EditRequestScreen.js
 *
 *  Date: 28/03/2021
 *
 * @author Piyush Sharma, X17342356
 *
 * @reference https://reactnative.dev/docs/activityindicator
 * @reference https://www.udemy.com/course/react-native-the-practical-guide/
 */

//Imports
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";
import * as firebase from "firebase";
import editRequest from "../functions/editRequest";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//Main Component
const EditRequestScreen = (props) => {
  //Initialising Variables
  const db = firebase.firestore();
  const request = props.navigation.getParam("item");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [requestType, setRequestType] = useState("");
  const [requestDescription, setRequestDescription] = useState("");
  var user = firebase.auth().currentUser;

  //Clear fields after use
  resetFields = () => {
    this.textInputOne.clear();
    this.textInputTwo.clear();
    this.textInputThree.clear();
    this.textInputFour.clear();
  };

  //The function below takes data previously read above and displays it using the structure below in a flatlist format
  return (
    <ImageBackground source={require("../assets/BG.png")} style={styles.bImage}>
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.screen}>
          <Text style={styles.text}>Fill in the fields you want to edit:</Text>
          <Card style={styles.cardView}>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder={"Current value: " + request.address}
                placeholderTextColor="#003f5c"
                onChangeText={(address) => setAddress(address)}
                ref={(input) => {
                  this.textInputOne = input;
                }}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder={"Current value:" + request.area}
                placeholderTextColor="#003f5c"
                onChangeText={(area) => setArea(area)}
                ref={(input) => {
                  this.textInputTwo = input;
                }}
              />
            </View>

            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder={"Current value: " + request.request_Type}
                placeholderTextColor="#003f5c"
                onChangeText={(requestType) => setRequestType(requestType)}
                ref={(input) => {
                  this.textInputThree = input;
                }}
              />
            </View>

            <View style={styles.inputViewBig}>
              <TextInput
                style={styles.inputText}
                placeholder={"Current value: " + request.request_Description}
                placeholderTextColor="#003f5c"
                multiline={true}
                onChangeText={(requestDescription) =>
                  setRequestDescription(requestDescription)
                }
                ref={(input) => {
                  this.textInputFour = input;
                }}
              />
            </View>

            <TouchableOpacity
              style={styles.Btn}
              onPressIn={() =>
                editRequest(
                  request,
                  db,
                  address,
                  area,
                  requestType,
                  requestDescription,
                  props
                )
              }
              onPress={resetFields}
            >
              <Text style={styles.Text}>Edit</Text>
            </TouchableOpacity>
          </Card>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

//Navigation options: changing header displayed on the page
EditRequestScreen.navigationOptions = {
  headerTitle: "Edit Request Screen",
  headerTitleStyle: { alignSelf: "center" },
  headerStyle: {
    backgroundColor: "#2c8ffa",
  },
  headerTintColor: "white",
};

//CSS
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },

  bImage: {
    width: "100%",
    height: "100%",
  },

  text: {
    padding: 10,
    marginBottom: 30,
    marginRight: 40,
    fontWeight: "bold",
    marginLeft: 40,
    color: "white",
    fontSize: 25,
    textAlign: "center",
    marginTop: 30,
    borderWidth: 3,
    borderColor: "#fb5b5a",
    borderRadius: 15,
  },
  screen: {
    width: "100%",
    height: "100%",
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    width: 300,
    backgroundColor: "#FDFEFE",
    borderRadius: 25,
    height: 50,
    marginTop: 25,
    marginBottom: 15,
    justifyContent: "center",
    padding: 20,
    elevation: 10,
    borderWidth: 4,
    borderColor: "#2E86C1",
  },
  inputViewBig: {
    width: 300,
    backgroundColor: "#FDFEFE",
    borderRadius: 25,
    height: 130,
    marginTop: 25,
    marginBottom: 15,
    justifyContent: "center",
    padding: 20,
    elevation: 10,
    borderWidth: 4,
    borderColor: "#2E86C1",
  },

  inputText: {
    height: 60,
    color: "black",
  },
  inputTextTwo: {
    height: 60,
    color: "black",
  },

  Text: {
    color: "white",
    fontSize: 20,
  },

  Btn: {
    width: 300,
    backgroundColor: "#2E86C1",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "white",
  },
  cardView: {
    justifyContent: "center",
    width: "90%",
    height: "77%",
    padding: 10,
    backgroundColor: "#fb5b5a",
    shadowColor: "black",
    borderRadius: 25,
    shadowOpacity: 1,
    borderWidth: 3,
    borderColor: "white",
    elevation: 10,
    alignItems: "center",
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
});

export default EditRequestScreen;
