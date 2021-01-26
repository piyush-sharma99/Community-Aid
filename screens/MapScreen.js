import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import MapView, {Marker, Circle} from 'react-native-maps';
import {Card} from 'react-native-paper';
import * as Location from 'expo-location';



const MapScreen = props => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [radius, setRadius] = useState(1000);
  const [updateRadius, setUpdateRadius] = useState(1000);

  


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
        <Marker coordinate = {{latitude: latitude, longitude:longitude}}/>
        <Circle
        center={{latitude: latitude, longitude:longitude}}
        radius={updateRadius}
        fillColor={'rgba(43, 98, 227, 0.2)'}
         />
        </MapView>
        </View>

        <Card style={styles.cardView}>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Radius in kilometers eg (3)..." 
            placeholderTextColor="#003f5c"
            onChangeText={(radius) => setRadius(parseInt(radius))}
            />
            </View>
            <TouchableOpacity style={styles.Btn} onPress = {()=>setUpdateRadius(radius * 1000)}>
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
        width:'95%',
        height:'65%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: "#fb5b5a",
        backgroundColor: "#61dafb",
        marginBottom: 20,
        marginTop:-30,
        shadowColor: 'black',
        shadowOpacity: 2,
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
        backgroundColor:"#ffffff",
        shadowColor: 'black',
        alignItems: 'center',
        borderRadius:25,
        shadowOpacity: 2,
        elevation: 10,
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
        borderColor: "#fb5b5a",
        shadowColor: 'black',
        borderRadius:25,
      },

      inputText:{
        height:50,
        color:"black"
      },

      Btn:{
        width:250,
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:5
      },

      subText:{
        color:"white",
        fontSize:20
      },
    
});

export default MapScreen;