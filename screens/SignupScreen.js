/*
 *  ClassName: SignUpScreen.js
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
  Image,
} from "react-native";
import * as firebase from "firebase";
import signUpUser from "../functions/signUpUser";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//Main Component
const SignupScreen = (props) => {
  //Initialising variables
  const db = firebase.firestore();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const fb = firebase.auth();

  //The function below clears fields after use
  resetFieldsOne = () => {
    this.textInputOne.clear();
    this.textInputTwo.clear();
    this.textInputThree.clear();
    this.textInputFour.clear();
    this.textInputFive.clear();
  };

  return (
    <ImageBackground source={require("../assets/BG.png")} style={styles.bImage}>
      <KeyboardAwareScrollView>
        <View style={styles.screen}>
          <Image style={styles.logo} source={require("../assets/Logo.png")} />

          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Name..."
              placeholderTextColor="#003f5c"
              onChangeText={(name) => setName(name)}
              ref={(input) => {
                this.textInputOne = input;
              }}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Number..."
              placeholderTextColor="#003f5c"
              onChangeText={(number) => setNumber(number)}
              ref={(input) => {
                this.textInputTwo = input;
              }}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Email..."
              placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
              ref={(input) => {
                this.textInputThree = input;
              }}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Password..."
              secureTextEntry
              placeholderTextColor="#003f5c"
              onChangeText={(password) => setPassword(password)}
              ref={(input) => {
                this.textInputFour = input;
              }}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Repeat Password..."
              secureTextEntry
              placeholderTextColor="#003f5c"
              onChangeText={(passwordRepeat) =>
                setPasswordRepeat(passwordRepeat)
              }
              ref={(input) => {
                this.textInputFive = input;
              }}
            />
          </View>

          <View>
            <TouchableOpacity
              style={styles.signBtn}
              onPress={() =>
                signUpUser(
                  name,
                  number,
                  email,
                  password,
                  passwordRepeat,
                  fb,
                  props,
                  db
                )
              }
              onPressOut={resetFieldsOne}
            >
              <Text style={styles.signText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

//Navigation options: changing header displayed on the page
SignupScreen.navigationOptions = {
  headerTitle: "Sign up",
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
    alignItems: "center",
    justifyContent: "center",
  },

  bImage: {
    width: "100%",
    height: "100%",
  },

  logo: {
    justifyContent: "center",
    marginTop: -20,
  },

  inputView: {
    width: "80%",
    backgroundColor: "#FDFEFE",
    borderRadius: 25,
    height: 50,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    elevation: 10,
    borderWidth: 4,
    borderColor: "#fb5b5a",
  },

  inputText: {
    height: 50,
    color: "black",
  },

  signText: {
    color: "white",
    fontSize: 20,
  },

  signBtn: {
    width: 200,
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#fff",
    borderRadius: 15,
    shadowOpacity: 1,
    elevation: 10,
    marginTop: 50,
    marginBottom: 90,
  },
});

export default SignupScreen;
