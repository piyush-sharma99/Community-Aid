import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { WebView } from "react-native-webview";

const SettingsVideoScreen = (props) => {
  return (
    <ImageBackground source={require("../assets/BG.png")} style={styles.bImage}>
      <View style={styles.screen}>
        <View style={styles.subScreen}>
          <WebView
            style={styles.web}
            javaScriptEnabled={true}
            source={{ uri: "https://youtu.be/80VP9kSWZXQ" }}
          />
        </View>

        <View>
          <Text style={styles.text}>
            {" "}
            This page is for anyone who has an account on community aid. Users
            are able to delete their accounts and edit information related to
            their account. For a full tutorial view the video above.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

SettingsVideoScreen.navigationOptions = {
  headerTitle: "Settings page Assistance ",
  headerStyle: {
    backgroundColor: "#2c8ffa",
  },
  headerTintColor: "white",
};

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

export default SettingsVideoScreen;
