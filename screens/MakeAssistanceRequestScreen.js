import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button, TouchableOpacity, Image} from 'react-native';
import {Card} from 'react-native-paper';
import * as firebase from 'firebase';
import * as Location from 'expo-location';

const MakeAssistanceRequestScreen = props => {

  const db = firebase.firestore();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const requestID = Math.random().toString(36).slice(2); //Incrementing a random key
  const [date, setDate] = useState('');
  const [status] = useState('To Do');
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

  UploadData = () =>{

    try{
      //reading user values
      db.collection("users").doc(user.uid).get().then(snapshot => {
        const userInfo = snapshot.data();

        //uploading data to firestore
        db.collection("Assistance Request").doc().set({
          date: date,
          uid: user.uid,
          name: userInfo.name,
          number: userInfo.number,
          request_ID: requestID,
          email: userInfo.email,
          status: status,
          address: address,
          area: area,
          request_Type: requestType,
          longitude:longitude,
          latitude:latitude,
          request_Description: requestDescription


        })

        


        
        console.log('Data uploaded');
  })

  

    }
    catch(error){
      console.log('Data Not uploaded');
      console.log(error.toString())
    }

  };
  


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
            onChangeText={(date) => setDate(date)}/>
        </View>

      
         <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Address..." 
            placeholderTextColor="#003f5c"
            onChangeText={(address) => setAddress(address)}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Area..." 
            placeholderTextColor="#003f5c"
            onChangeText={(area) => setArea(area)}/>
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Request Type..." 
            placeholderTextColor="#003f5c"
            onChangeText={(requestType) => setRequestType(requestType)}/>
        </View>

        <View style={styles.inputViewBig} >
          <TextInput  
            style={styles.inputText}
            placeholder="Request Description..." 
            placeholderTextColor="#003f5c"
            onChangeText={(requestDescription) => setRequestDescription(requestDescription)}/>
        </View>

        </Card>

        <View>
        <TouchableOpacity style={styles.Btn} onPress = {UploadData}>
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
    marginTop:50,
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
        height:50,
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
        marginTop:20,
        borderWidth:2,
        borderColor: "white"
      },
      cardView: {
        justifyContent: 'center',
        width:'90%',
        height:'75%',
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