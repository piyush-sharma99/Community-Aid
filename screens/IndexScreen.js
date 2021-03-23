import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Linking,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

const IndexScreen = (props) => {
  return (
    <ImageBackground source={require("../assets/BG.png")} style={styles.bImage}>
      <View style={styles.screen}>
        <Image style={styles.logo} source={require("../assets/Logo.png")} />

        <View>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              props.navigation.navigate({ routeName: "Login" });
            }}
          >
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signBtn}
            onPress={() => {
              props.navigation.navigate({ routeName: "Signup" });
            }}
          >
            <Text style={styles.signText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signBtn}
            onPress={() => {
              props.navigation.navigate({ routeName: "About" });
            }}
          >
            <Text style={styles.signText}>Learn more about us!</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.socials}>
          <TouchableOpacity
            style={styles.clickView}
            onPress={() => {
              Linking.openURL("https://www.facebook.com/");
            }}
          >
            <View style={styles.content}>
              <AntDesign name="facebook-square" size={80} color="white" />
              <Text style={styles.textStyle}>Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.clickView}
            onPress={() => {
              Linking.openURL("https://www.instagram.com/");
            }}
          >
            <View style={styles.content}>
              <Entypo name="instagram-with-circle" size={80} color="white" />
              <Text style={styles.textStyle}>Instagram</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.clickView}
            onPress={() => {
              Linking.openURL("https://www.linkedin.com/in/piyush-sharma1078/");
            }}
          >
            <View style={styles.content}>
              <AntDesign name="linkedin-square" size={80} color="white" />
              <Text style={styles.textStyle}>linkedin</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

IndexScreen.navigationOptions = {
  headerTitle: "Welcome",
  headerTitleStyle: { alignSelf: "center" },
  headerStyle: {
    backgroundColor: "#2c8ffa",
  },
  headerTintColor: "white",
};

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
  socials: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  logo: {
    justifyContent: "center",
    marginTop: -300,
    width: 200,
    height: 200,
  },
  loginText: {
    color: "white",
    fontSize: 20,
  },

  signText: {
    color: "white",
    fontSize: 20,
  },
  loginBtn: {
    width: 300,
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
    marginTop: 30,
    marginBottom: 5,
  },

  signBtn: {
    width: 300,
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    borderWidth: 3,
    borderColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    elevation: 10,
    shadowOpacity: 1,
    marginBottom: 10,
  },
  about: {
    marginTop: 60,
    marginBottom: -70,
    color: "white",
    fontSize: 20,
  },

  clickView: {
    marginTop: 120,
    marginBottom: -120,
    width: "25%",
    borderRadius: 25,
    height: 80,
    margin: 10,
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },

  content: {
    flex: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
  },
});

export default IndexScreen;
