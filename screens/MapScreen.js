/*
 *  ClassName: MapScreen.js
 *
 *  Date: 28/03/2021
 *
 * @author Piyush Sharma, X17342356
 *
 * @reference https://reactnative.dev/docs/activityindicator
 * @reference https://www.udemy.com/course/react-native-the-practical-guide/
 * @reference https://www.youtube.com/watch?v=AzjWv1X-uyg&t=1398s
 * @reference https://www.youtube.com/watch?v=q4fW3h9Mb7M
 */

//Imports
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import MapView, { Marker, Circle, Callout } from "react-native-maps";
import { Card } from "react-native-paper";
import * as Location from "expo-location";
import * as firebase from "firebase";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import addVid from "../functions/addvid";
import reportRequestTwo from "../functions/reportRequestTwo";

//Main Component
const MapScreen = (props) => {
  //Initialising variables
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [radius, setRadius] = useState(1000);
  const [request, setRequest] = useState([]);
  const [updateRadius, setUpdateRadius] = useState(1000);
  const db = firebase.firestore();
  var user = firebase.auth().currentUser;

  /*
   * The useEffect function below carries out the following:
   * #1: Reads the firebase database for "Unassigned requests"
   * #2: Stores them in a array known as request for use later
   */
  useEffect(() => {
    db.collection("Assistance Request")
      .where("status", "==", "Unassigned")
      .onSnapshot((querySnapshot) => {
        const requests = [];

        querySnapshot.forEach((documentSnapshot) => {
          requests.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.request_ID,
          });
        });
        console.log(requests);
        setRequest(requests);
      });
  }, []);

  /*
   * The useEffect function below carries out the following:
   * #1: Using the expo location library it asks checks users location permissions
   * #2: User is provided with a prompt to allow or deny location services
   * #3: If user allows location services there location is stored
   */
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  // Setting default lat and long for the map
  let text = "Waiting..";
  let latitude = -9.062691;
  let longitude = 53.270962;

  //Pulling and storing users lat and long
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    longitude = location.coords.longitude;
    latitude = location.coords.latitude;
  }
  console.log(longitude);
  console.log(latitude);

  //empty fields function
  resetFieldsOne = () => {
    this.textInputOne.clear();
  };

  return (
    <ImageBackground source={require("../assets/BG.png")} style={styles.bImage}>
      <View style={styles.screen}>
        <Card style={styles.cardView}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Radius in kilometers eg (3)..."
              placeholderTextColor="#003f5c"
              onChangeText={(radius) => setRadius(parseInt(radius))}
              ref={(input) => {
                this.textInputOne = input;
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.Btn}
            //radius calculation in kilometers
            onPressIn={() => setUpdateRadius(radius * 1000)}
            onPress={resetFieldsOne}
          >
            <Text style={styles.subText}>Change radius</Text>
          </TouchableOpacity>
        </Card>

        <View style={styles.mapView}>
          <MapView
            //Displaying mapView
            style={styles.map}
            region={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.02,
              longitudeDelta: 0.3,
            }}
          >
            <Marker
              //Displaying user location on the map
              coordinate={{ latitude: latitude, longitude: longitude }}
              title="Your location"
            >
              <FontAwesome name="user-circle-o" size={25} color="blue" />
            </Marker>
            <Circle
              //Displaying radius ring on the map
              center={{ latitude: latitude, longitude: longitude }}
              radius={updateRadius}
              fillColor={"rgba(43, 98, 227, 0.2)"}
            />

            {
              /*
               * The mapping function below carries out the following:
               * #1: Displaying all request as marker previously read from firebase above
               * #2: Displaying information once these markers are interacted with
               * #3: Displaying a report button per request to report the assistance request
               * #4: Displaying a add button per request to add an the assistance request
               */
              request.map((marker) => (
                <Marker
                  key={marker.request_ID}
                  coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                  }}
                >
                  <MaterialCommunityIcons
                    name="map-marker-remove-variant"
                    size={30}
                    color="red"
                  />
                  <Callout style={styles.callOut}>
                    <Text>{"Request Type: " + marker.request_Type}</Text>
                    <Text>{"Area: " + marker.area}</Text>
                    <Text>{"Description: " + marker.request_Description}</Text>
                    <TouchableOpacity
                      style={styles.BtnTwo}
                      onPressIn={() => addVid(marker, db, user)}
                    >
                      <Text style={styles.subText}>Add request</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.BtnTwo}
                      onPressIn={() => reportRequestTwo(marker, db, user)}
                    >
                      <Text style={styles.subText}>Report request</Text>
                    </TouchableOpacity>
                  </Callout>
                </Marker>
              ))
            }
          </MapView>
        </View>
      </View>
    </ImageBackground>
  );
};

//Navigation options: changing header displayed on the page
MapScreen.navigationOptions = {
  headerTitle: "MAP ",
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
  mapView: {
    width: "100%",
    height: "75%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#61dafb",
    marginTop: 10,
    elevation: 10,
  },
  map: {
    width: "100%",
    height: "100%",
    backgroundColor: "#61dafb",
  },
  cardView: {
    width: "95%",
    padding: 5,
    backgroundColor: "#fb5b5a",
    shadowColor: "black",
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 10,
    marginTop: 20,
    shadowOpacity: 2,
    elevation: 5,
    borderWidth: 3,
    borderColor: "white",
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  inputView: {
    marginTop: 10,
    width: 250,
    backgroundColor: "#FDFEFE",
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    padding: 20,
    borderWidth: 4,
    borderColor: "#2E86C1",
    shadowColor: "black",
    borderRadius: 25,
  },

  inputText: {
    height: 50,
    color: "black",
  },

  Btn: {
    width: 250,
    backgroundColor: "#2E86C1",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "white",
  },
  BtnTwo: {
    width: 240,
    backgroundColor: "#fb5b5a",
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 5,
    borderWidth: 2,
    borderColor: "#2E86C1",
  },

  subText: {
    color: "white",
    fontSize: 20,
  },
  callOut: {
    width: 250,
  },
});

export default MapScreen;
