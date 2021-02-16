import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button, TouchableOpacity, Image} from 'react-native';
import {Card} from 'react-native-paper';
import * as firebase from 'firebase';
import * as Location from 'expo-location';
import makeRequest from '../functions/makeRequest';

const MakeAssistanceRequestScreen = props => {

  const db = firebase.firestore();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const requestID = Math.random().toString(36).slice(2); //Incrementing a random key
  const [date, setDate] = useState('');
  const [status] = useState('Unassigned');
  const [address, setAddress] = useState('');
  const [area, setArea] = useState('');
  const [requestType, setRequestType] = useState('');
  const [requestDescription, setRequestDescription] = useState('');
  var user = firebase.auth().currentUser;

//async function that pulls users latitude and longitude
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access lo cation was denied');
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

  resetFields = () => {
    this.textInputOne.clear();
    this.textInputTwo.clear();
    this.textInputThree.clear();
    this.textInputFour.clear();
    this.textInputFive.clear();
        
}


    return(

      <ScrollView style={styles.scroll}>
        <View style={styles.screen} >

<Text style={styles.text}>Fill the form below:</Text>
         <Card style={styles.cardView}>

         <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Date" 
            placeholderTextColor="#003f5c"
            onChangeText={(date) => setDate(date)}
            ref={input => { this.textInputOne = input }}/>
        </View>

      
         <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Address..." 
            placeholderTextColor="#003f5c"
            onChangeText={(address) => setAddress(address)}
            ref={input => { this.textInputTwo = input }}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Area..." 
            placeholderTextColor="#003f5c"
            onChangeText={(area) => setArea(area)}
            ref={input => { this.textInputThree = input }}/>
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Request Type..." 
            placeholderTextColor="#003f5c"
            onChangeText={(requestType) => setRequestType(requestType)}
            ref={input => { this.textInputFour = input }}/>
        </View>

        <View style={styles.inputViewBig} >
          <TextInput  
            style={styles.inputText}
            placeholder="Request Description..." 
            placeholderTextColor="#003f5c"
            multiline={true}
            onChangeText={(requestDescription) => setRequestDescription(requestDescription)}
            ref={input => { this.textInputFive = input }}/>
        </View>

        </Card>

        <View>
        <TouchableOpacity style={styles.Btn} onPressIn = {() => makeRequest(user, requestID, db, date, status, address, area, requestType, requestDescription, longitude, latitude)}
        onPress = {resetFields}>
          <Text style={styles.Text}>Submit</Text>
        </TouchableOpacity>
        </View>

        

        </View>
        </ScrollView>
    );
};

MakeAssistanceRequestScreen.navigationOptions = {
headerTitle: 'Make Assistance Request',
headerTitleStyle: { alignSelf: 'center' },
headerStyle: {
backgroundColor: '#2E86C1'
},
headerTintColor:"white"
};


const styles = StyleSheet.create({

  scroll: {
    width:'100%',
    height:'100%',
    backgroundColor: '#2E86C1',
},
  text: {

    padding:10,
    marginBottom: 30,
    marginRight:40,
    marginLeft:40,
    color:"white",
    fontSize:30,
    textAlign: 'center',
    marginTop:30,
    borderWidth: 3,
    borderColor: '#fb5b5a',
    borderRadius:15,

    },
    screen: {
        width:'100%',
        height:'100%',
        flex: 1,
        backgroundColor: '#2E86C1',
        alignItems: 'center',
        justifyContent: 'center'
    },
      inputView:{
        width:300,
        backgroundColor:"#FDFEFE",
        borderRadius:25,
        height:50,
        marginTop:25,
        marginBottom:15,
        justifyContent:"center",
        padding:20,
        elevation: 10,
        borderWidth: 4,
        borderColor: "#2E86C1"
      },
      inputViewBig:{
        width:300,
        backgroundColor:"#FDFEFE",
        borderRadius:25,
        height:130,
        marginTop:25,
        marginBottom:15,
        justifyContent:"center",
        padding:20,
        elevation: 10,
        borderWidth: 4,
        borderColor: "#2E86C1"
      },

      inputText:{
        height:60,
        color:"black"
      },
      inputTextTwo:{
        height:60,
        color:"black"
      },

      Text:{
        color:"white",
        fontSize:20
      },

      
      Btn:{
        width:300,
        backgroundColor:"#fb5b5a",
        borderRadius:15,
        height:50,
        alignItems:"center",
        justifyContent:'center',
        marginTop:30,
        borderWidth:2,
        borderColor: "white"
      },
      cardView: {
        justifyContent: 'center',
        width:'90%',
        height:'77%',
        backgroundColor:"#fb5b5a",
        shadowColor: 'black',
        borderRadius:25,
        shadowOpacity: 1,
        elevation: 10,
        alignItems:"center",
        shadowOffset: {
            width: 3,
            height: 3
        },
    },
      
      
});

export default MakeAssistanceRequestScreen;