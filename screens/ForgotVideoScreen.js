/*
 *  ClassName: ForgotVideoScreen.js
 *
 *  Date: 28/03/2021
 *
 * @author Piyush Sharma, X17342356
 *
 * @reference https://reactnative.dev/docs/activityindicator
 * @reference https://www.udemy.com/course/react-native-the-practical-guide/
 * @reference https://www.youtube.com/watch?v=8zT6CYu0iYQ
 *
 */

//Imports
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { WebView } from "react-native-webview";

//Main Component
const ForgotVideoScreen = (props) => {
  return (
    <ImageBackground source={require("../assets/BG.png")} style={styles.bImage}>
      <View style={styles.screen}>
        <View style={styles.subScreen}>
          <WebView
            style={styles.web}
            javaScriptEnabled={true}
            source={{ uri: "https://youtu.be/o4n4U_88vic" }}
          />
        </View>

        <View>
          <Text style={styles.text}>
            This feature can be used by all users to reset their password in
            case they forgot their current one. For a full tutorial view the
            video shown above.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

//Navigation options: changing header displayed on the page
ForgotVideoScreen.navigationOptions = {
  headerTitle: "Forgot Password Assistance ",
  headerStyle: {
    backgroundColor: "#2c8ffa",
  },
  headerTintColor: "white",
};

//CSS
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  subScreen: {
    height: "50%",
  },
  bImage: {
    width: "100%",
    height: "100%",
  },
  web: {
    marginRight: 5,
    marginLeft: 5,
    marginTop: 30,
    borderWidth: 2,
    borderColor: "#fb5b5a",
    elevation: 10,
  },

  text: {
    padding: 10,
    marginRight: 40,
    marginTop: 40,
    marginBottom: 30,
    marginLeft: 40,
    color: "white",
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "#fb5b5a",
    borderWidth: 3,
    borderColor: "white",
    shadowOpacity: 2,
    elevation: 5,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
});

export default ForgotVideoScreen;
