import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Alert,
} from "react-native";
import { Card } from "react-native-paper";
import * as firebase from "firebase";
import addVid from "../functions/addvidTwo";
import report from "../functions/reportRequest";

const PickUpAssistanceRequestScreen = (props) => {
  const [requests, setRequests] = useState([]); // Initial empty array of users // Initial empty array of users
  const db = firebase.firestore();
  const [area, setArea] = useState("");
  var user = firebase.auth().currentUser;

  readRequest = () => {
    if (area == "" || area == " ") {
      Alert.alert("Error:", "Area field can not be empty!", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    } else {
      db.collection("Assistance Request")
        .where("area", "==", area)
        .where("status", "==", "Unassigned")
        .onSnapshot((querySnapshot) => {
          const requests = [];

          querySnapshot.forEach((documentSnapshot) => {
            requests.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.request_ID,
            });
          });

          setRequests(requests);
          Alert.alert("Successful:", "All requests are displayed below", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
          console.log(requests);
        });
    }
  };

  resetFieldsOne = () => {
    this.textInputOne.clear();
  };

  const renderRequest = ({ item }) => (
    <View style={styles.screen2}>
      <Card style={styles.cardView2}>
        <View>
          <Text style={styles.text2}>Request Date:</Text>
          <Text style={styles.text3}>{item.date}</Text>
          <Text style={styles.text2}>Request Type:</Text>
          <Text style={styles.text3}>{item.request_Type}</Text>
          <Text style={styles.text2}>Request Description:</Text>
          <Text style={styles.text3}>{item.request_Description}</Text>
          <Text style={styles.text2}>Request Status:</Text>
          <Text style={styles.text3}>{item.status}</Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.Btn}
            onPress={() => addVid(item, db, user)}
          >
            <Text style={styles.Text}>ADD</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.Btn}
            onPress={() => report(item, db, user)}
          >
            <Text style={styles.Text}>REPORT</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );

  return (
    <ImageBackground source={require("../assets/BG.png")} style={styles.bImage}>
      <View style={styles.screen}>
        <Text style={styles.text}>Search or Add Request below:</Text>

        <Card style={styles.cardView1}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Area..."
              placeholderTextColor="#003f5c"
              onChangeText={(area) => setArea(area)}
              ref={(input) => {
                this.textInputOne = input;
              }}
            />
          </View>
          <View>
            <TouchableOpacity
              style={styles.Btn}
              onPress={readRequest}
              onPressIn={resetFieldsOne}
            >
              <Text style={styles.Text}>Search</Text>
            </TouchableOpacity>
          </View>
        </Card>

        <View style={styles.Subheading}>
          <Text style={styles.text2}>Requests below: </Text>
        </View>

        <FlatList
          style={{ flex: 1 }}
          data={requests}
          renderItem={renderRequest}
          keyExtractor={(item) => item.request_ID}
        />
      </View>
    </ImageBackground>
  );
};

PickUpAssistanceRequestScreen.navigationOptions = {
  headerTitle: "Pick Up Assistance Request",
  headerTitleStyle: { alignSelf: "center" },
  headerStyle: {
    backgroundColor: "#2c8ffa",
  },
  headerTintColor: "white",
};

const styles = StyleSheet.create({
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

  bImage: {
    width: "100%",
    height: "100%",
  },

  SubScreen: {
    width: "100%",
    backgroundColor: "#2c8ffa",
  },
  text: {
    padding: 10,
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

  inputView: {
    width: 300,
    backgroundColor: "#FDFEFE",
    borderRadius: 25,
    marginBottom: 10,
    justifyContent: "center",
    padding: 10,
    elevation: 10,
    borderWidth: 4,
    borderColor: "#2E86C1",
  },

  inputText: {
    width: "100%",
    color: "black",
  },

  Text: {
    color: "white",
    fontSize: 15,
  },
  Subheading: {
    alignSelf: "stretch",
    borderBottomWidth: 2,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderColor: "#fb5b5a",
    fontSize: 30,
    color: "#fff",
    justifyContent: "center",
  },

  Btn: {
    width: "100%",
    backgroundColor: "#2E86C1",
    borderRadius: 10,
    height: 40,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "white",
  },

  cardView1: {
    justifyContent: "center",
    width: "90%",
    marginTop: 20,
    backgroundColor: "#fb5b5a",
    shadowColor: "black",
    borderRadius: 25,
    shadowOpacity: 1,
    elevation: 10,
    alignItems: "center",
    padding: 20,
    borderWidth: 3,
    borderColor: "white",
    shadowOffset: {
      width: 3,
      height: 3,
    },
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

export default PickUpAssistanceRequestScreen;
