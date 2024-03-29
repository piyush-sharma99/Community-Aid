/*
 *  ClassName: LoginScreen.js
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
import logInUser from "../functions/logInUser";

//Main Component
const LoginScreen = (props) => {
  //Initialising variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fb = firebase.auth();

  //The function below clears fields after use
  resetFieldsOne = () => {
    this.textInputOne.clear();
    this.textInputTwo.clear();
  };

  return (
    <ImageBackground source={require("../assets/BG.png")} style={styles.bImage}>
      <View style={styles.screen}>
        <Image style={styles.logo} source={require("../assets/Logo.png")} />

        <View style={styles.inputViewEmail}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
            ref={(input) => {
              this.textInputOne = input;
            }}
          />
        </View>

        <View style={styles.inputViewPassword}>
          <TextInput
            style={styles.inputText}
            placeholder="Password..."
            secureTextEntry
            placeholderTextColor="#003f5c"
            onChangeText={(password) => setPassword(password)}
            ref={(input) => {
              this.textInputTwo = input;
            }}
          />
        </View>

        <View>
          <TouchableOpacity>
            <Text
              style={styles.forgot}
              onPress={() => {
                props.navigation.navigate({ routeName: "Forgot" });
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => logInUser(fb, email, password, props)}
            onPressOut={resetFieldsOne}
          >
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

//Navigation options: changing header displayed on the page
LoginScreen.navigationOptions = {
  headerTitle: "Log in",
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
    marginTop: -230,
    width: 200,
    height: 200,
  },

  inputViewEmail: {
    width: "80%",
    backgroundColor: "#FDFEFE",
    borderRadius: 25,
    height: 50,
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    elevation: 10,
    borderWidth: 4,
    borderColor: "#fb5b5a",
  },

  inputViewPassword: {
    width: "80%",
    backgroundColor: "#FDFEFE",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    marginTop: 10,
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

  forgot: {
    color: "white",
    fontSize: 11,
  },

  loginText: {
    color: "white",
    fontSize: 20,
  },

  signText: {
    color: "white",
    fontSize: 20,
  },

  forgot: {
    color: "white",
    fontSize: 15,
    marginBottom: 5,
    marginTop: 20,
  },

  loginBtn: {
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
    marginTop: 20,
    marginBottom: 5,
  },
});

export default LoginScreen;
