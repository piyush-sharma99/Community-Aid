/*
 *  ClassName: AppAssistanceSceen.js
 *
 *  Date: 28/03/2021
 *
 * @author Piyush Sharma, X17342356
 *
 * @reference https://reactnative.dev/docs/activityindicator
 *
 */

//Imports
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

//Main Component
const AboutUsScreen = (props) => {
  return (
    <ImageBackground source={require("../assets/BG.png")} style={styles.bImage}>
      <View style={styles.screen}>
        <View>
          <Text style={styles.text}>
            Community Aid is a community based mobile application that can be
            used by users to ask for assistance when needed. The targets
            audience of the application is individuals of all ages above 18.
            This is because the purpose of this application is to help
            individuals gain assistance when needed. My main personal
            inspiration for developing this application was a family member who
            is an elderly woman that has been stuck in her house during the time
            of Covid-19. I help her by doing her weekly shopping. After a few
            conversations with her I realized that it is exceedingly difficult
            for individuals in her position to receive help. Therfore, come on
            and help make the world a better place one assistance request at a
            time.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

//Navigation options: changing header displayed on the page
AboutUsScreen.navigationOptions = {
  headerTitle: "About us",
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
  },
  bImage: {
    width: "100%",
    height: "100%",
  },
  text: {
    padding: 10,
    marginRight: 40,
    marginTop: 30,
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

export default AboutUsScreen;
