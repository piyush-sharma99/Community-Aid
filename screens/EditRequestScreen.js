import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button, TouchableOpacity, Image} from 'react-native';
import {Card} from 'react-native-paper';
import * as firebase from 'firebase';
import editRequest from '../functions/editRequest';

const EditRequestScreen = props => {

  const db = firebase.firestore();
  const request = props.navigation.getParam('item');
  const [address, setAddress] = useState('');
  const [area, setArea] = useState('');
  const [requestType, setRequestType] = useState('');
  const [requestDescription, setRequestDescription] = useState('');
  var user = firebase.auth().currentUser;


  resetFields = () => {
    this.textInputOne.clear();
    this.textInputTwo.clear();
    this.textInputThree.clear();
    this.textInputFour.clear();
     
}


    return(

      <ScrollView style={styles.scroll}>
        <View style={styles.screen} >

<Text style={styles.text}>Fill in the fields you want to edit:</Text>
         <Card style={styles.cardView}>

      
         <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Address..." 
            placeholderTextColor="#003f5c"
            onChangeText={(address) => setAddress(address)}
            ref={input => { this.textInputOne  = input }}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Area..." 
            placeholderTextColor="#003f5c"
            onChangeText={(area) => setArea(area)}
            ref={input => { this.textInputTwo = input }}/>
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Request Type..." 
            placeholderTextColor="#003f5c"
            onChangeText={(requestType) => setRequestType(requestType)}
            ref={input => { this.textInputThree = input }}/>
        </View>

        <View style={styles.inputViewBig} >
          <TextInput  
            style={styles.inputText}
            placeholder="Request Description..." 
            placeholderTextColor="#003f5c"
            multiline={true}
            onChangeText={(requestDescription) => setRequestDescription(requestDescription)}
            ref={input => { this.textInputFour = input }}/>
        </View>

        </Card>

        <View>
        <TouchableOpacity style={styles.Btn} onPressIn = {() => editRequest(request, db, address, area, requestType, requestDescription, props)}
        onPress = {resetFields}>
          <Text style={styles.Text}>Edit</Text>
        </TouchableOpacity>
        </View>

        

        </View>
        </ScrollView>
    );
};

EditRequestScreen.navigationOptions = {
headerTitle: 'Edit Request Screen',
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

export default EditRequestScreen;