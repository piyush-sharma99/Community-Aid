import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import MapView, {Marker, Circle} from 'react-native-maps';
import {Card} from 'react-native-paper';
import * as Location from 'expo-location';
import * as firebase from 'firebase';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import addVid from '../functions/addvid';



const MapScreen = props => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [radius, setRadius] = useState(1000);
  const [request, setRequest] = useState([]);
  const [addRequest, setAddRequest] = useState('');
  const [updateRadius, setUpdateRadius] = useState(1000);
  const db = firebase.firestore();
  var user = firebase.auth().currentUser;


  useEffect(() => {
    db.collection('Assistance Request')
    .where('status', '==', 'Unassigned')
    .onSnapshot(querySnapshot => {
      const requests = [];

      querySnapshot.forEach(documentSnapshot => {
          requests.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.request_ID,
        });
      });
      console.log(requests);
      setRequest(requests);
    });

}, []);

    useEffect(() => {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
  
    let text = 'Waiting..';
    let latitude = -9.062691;
    let longitude = 53.270962;
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
      longitude = location.coords.longitude;
      latitude = location.coords.latitude;
      
    }
    console.log(longitude);
    console.log(latitude);


    resetFieldsOne = () => {
      this.textInputOne.clear();       
  }
  resetFieldsTwo = () => {
      this.textInputTwo.clear();       
  }



    return (
    <View style={styles.screen} >
        <View style={styles.mapView}>
        <MapView style={styles.map} 
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.30,
        }}> 

        <Marker coordinate = {{latitude: latitude, longitude:longitude}}
        title = "Your location">
        <FontAwesome name="user-circle-o" size={25} color="blue" />
        </Marker>
        <Circle
        center={{latitude: latitude, longitude:longitude}}
        radius={updateRadius}
        fillColor={'rgba(43, 98, 227, 0.2)'}
         />
         {
           request.map(marker => (
            <Marker
            key={marker.request_ID}
            coordinate = {{latitude: marker.latitude, longitude: marker.longitude}}
            title = {"Request Type: " + marker.request_Type}

            description = {"Request ID: " + marker.request_ID + " & "+ "Area: " + marker.area}>
            
              <MaterialCommunityIcons name="map-marker-remove-variant" size={30} color="red" />
            </Marker>

           ))
         }
        </MapView>
        </View>

        <Card style={styles.cardView}>
        <View style={styles.inputView} >
          
          <TextInput  
            style={styles.inputText}
            placeholder="Add request" 
            placeholderTextColor="#003f5c"
            onChangeText={(addRequest) => setAddRequest(addRequest)}
            ref={input => { this.textInputOne = input }}
            />
            </View>
            <TouchableOpacity style={styles.Btn} onPressIn = {() => addVid(addRequest, db, user)} onPress = {resetFieldsOne}>
             <Text style={styles.subText} >Add request</Text>

        </TouchableOpacity>
            </Card>

        <Card style={styles.cardView}>

        <View style={styles.inputView} >
          
          <TextInput  
            style={styles.inputText}
            placeholder="Radius in kilometers eg (3)..." 
            placeholderTextColor="#003f5c"
            onChangeText={(radius) => setRadius(parseInt(radius))}
            ref={input => { this.textInputTwo = input }}
            />
            </View>
            <TouchableOpacity style={styles.Btn} onPressIn = {()=>setUpdateRadius(radius * 1000)} onPress = {resetFieldsTwo}>
             <Text style={styles.subText} >Change radius</Text>
        </TouchableOpacity>
            </Card>
    </View>
    );
};

MapScreen.navigationOptions = {
    headerTitle: 'MAP ',
    headerStyle: {
    backgroundColor: '#2E86C1'
    },
    headerTintColor:"white"
    };
    

const styles = StyleSheet.create({
    screen: {
        width:'100%',
        height:'100%',
        flex: 1,
        backgroundColor: '#2E86C1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapView: {
        width:'100%',
        height:'43%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#61dafb",
        marginBottom: 20,
        elevation: 10
        
    },
    map: {
        width:'100%',
        height:'100%',
        backgroundColor: "#61dafb",

    },
    cardView: {
        width:'95%',
        height:'25%',
        padding:5,
        backgroundColor:"#fb5b5a",
        shadowColor: 'black',
        alignItems: 'center',
        borderRadius:25,
        marginBottom:20,
        shadowOpacity: 2,
        elevation: 5,
        borderWidth: 3,
        borderColor: 'white',
        shadowOffset: {
          width: 3,
          height: 3
      }
    },
    inputView:{
        marginTop:30,
        width:250,
        backgroundColor:"#FDFEFE",
        borderRadius:25,
        height:50,
        justifyContent:"center",
        padding:20,
        borderWidth: 4,
        borderColor: "#2E86C1",
        shadowColor: 'black',
        borderRadius:25,
      },

      inputText:{
        height:50,
        color:"black"
      },

      Btn:{
        width:250,
        backgroundColor:"#2E86C1",
        borderRadius:10,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:5,
        borderWidth:2,
        borderColor: "white"
      },

      subText:{
        color:"white",
        fontSize:20
      },
    
});

export default MapScreen;