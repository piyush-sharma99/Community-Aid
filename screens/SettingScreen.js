import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import * as firebase from 'firebase';
import deleteProfile from '../functions/deleteProfile';
import profileUpdate from '../functions/profileUpdate';
import {Card} from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const SettingScreen = props => {

const db = firebase.firestore();
const signout = firebase.auth();
const [email, setEmail] = useState('');
const [name, setName] = useState('');
const [number, setNumber] = useState('');
const [confirm, setConfirm] = useState('');
const [password, setPassword] = useState('');
var user = firebase.auth().currentUser;

resetFieldsOne = () => {
    this.textInputOne.clear();  
    this.textInputTwo.clear(); 
    this.textInputThree.clear(); 
    this.textInputFour.clear();    
}
resetFieldsTwo = () => {
    this.textInputFive.clear();       
}

 
    return(
        <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.screen}>
              <View style={styles.structure}>

              <Text style={styles.text3}>Edit account information below:</Text>

              <Card style={styles.cardView}>
            
            
                <TextInput style={styles.text1} placeholder="Change Name" underlineColorAndroid={'transparent'} placeholderTextColor="white" onChangeText={(name) => setName(name)} ref={input => { this.textInputOne = input }} />
          

          
                <TextInput style={styles.text} placeholder="Change Number" underlineColorAndroid={'transparent'} placeholderTextColor="white" onChangeText={(number) => setNumber(number)} ref={input => { this.textInputTwo = input }} />
          
           
                <TextInput style={styles.text} placeholder="Change Email" underlineColorAndroid={'transparent'} placeholderTextColor="white" onChangeText={(email) => setEmail(email)} ref={input => { this.textInputThree = input }} />
          
                <TextInput style={styles.text} placeholder="Change Password" underlineColorAndroid={'transparent'} placeholderTextColor="white" secureTextEntry onChangeText={(password) => setPassword(password)} ref={input => { this.textInputFour = input }} />
           
            <View>
                 <TouchableOpacity style={styles.btn} onPress = {() => profileUpdate(user, signout, props, db, email, name, number, password)}  onPressIn = {resetFieldsOne}>
                 <Text style={styles.btnText}>Update Profile</Text>
                 </TouchableOpacity>
            </View>
            </Card>

            <View style={styles.Subheading}>
                        <Text style={styles.text2}> Delete Account Below: </Text>
                    </View>

            <View style={styles.inputView} >
                <TextInput style={styles.inputText} placeholder="Type 'Confirm' here then press delete..." placeholderTextColor="#003f5c" onChangeText={(confirm) => setConfirm(confirm)} ref={input => { this.textInputFive = input }} />
                </View>

            
                <TouchableOpacity style={styles.btn2} onPress = {() => deleteProfile(user, props, db, confirm)} onPressIn = {resetFieldsTwo} >
                <Text style={styles.Text}>Delete</Text>
                </TouchableOpacity>


        </View>
        </View>
        </KeyboardAwareScrollView>
    );
};

SettingScreen.navigationOptions = {
    headerTitle: 'Settings',
    headerStyle: {
    backgroundColor: '#2E86C1'
    },
    headerTintColor:"white"
    };

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        backgroundColor: '#2E86C1',
      
    },
    screen: {
        justifyContent:"center",
        alignItems: 'center',
        flex: 1,
        width:'100%',
        height:'100%',
        backgroundColor: '#2E86C1',
    },
    structure: {
        alignSelf: 'stretch',
        fontSize: 30,
        color: '#fff',
        marginTop:-100,
        justifyContent:"center"
    },
    text3: {
        padding:10,
        marginRight:40,
        marginTop:130,
        marginBottom:30,
        marginLeft:40,
        color:"white",
        fontSize:25,
        textAlign: 'center',
        backgroundColor:'#fb5b5a',
        borderWidth: 3,
        borderColor: 'white',
        
    
    },

    text2: {
        padding:15,
        marginRight:40,
        marginLeft:40,
        fontWeight: "bold",
        color:"white",
        fontSize:20,
        textAlign: 'center',
        
    
    },

    text:{  
        
        height:30,
        color: '#fff' ,
        borderBottomWidth: 2,
        borderColor: 'white',
        fontSize: 25,
        marginBottom:30,  
    },
    text1:{  
        
        height:30,
        color: '#fff' ,
        borderBottomWidth: 2,
        marginTop:30,
        borderColor: 'white',
        fontSize: 25,
        marginBottom:30,  
    },

    btnText:{
        color:"white",
        fontSize:20
      },
      Subheading: {
        marginTop:20,
        alignSelf: 'stretch',
        borderBottomWidth: 2,
        marginLeft:10,
        marginRight:10,
        marginBottom:20,
        borderColor: '#fb5b5a',
        fontSize: 30,
        color: '#fff',
        justifyContent:"center"
    },

      btn:{
        width:'100%',
        height:30,
        backgroundColor:"#2E86C1",
        borderWidth:2,
        shadowOpacity: 1,
        elevation:10,
        borderColor: "white",
        borderRadius:15,
        height:40,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:30,
        marginTop:10
      },
      btn2:{
        width:'70%',
        backgroundColor:"#fb5b5a",
        borderWidth:2,
        shadowOpacity: 1,
        elevation:10,
        borderColor: "white",
        borderRadius:15,
        height:40,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginLeft:60,
        marginBottom:10
      },
    inputView:{
        justifyContent:"center",
        alignItems: 'center',
        width:330,
        backgroundColor:"#FDFEFE",
        borderRadius:25,
        height:35,
        marginTop:15,
        marginBottom:15,
        marginLeft:40,
        justifyContent:"center",
        padding:20,
        elevation: 10,
        borderWidth: 4,
        borderColor: "#fb5b5a"
        },
    
    inputText:{
        height:50,
        color:"black"
    },
    
    Text:{
        color:"white",
        fontSize:20
    },
    cardView: {
        justifyContent: 'center',
        width:'90%',
        padding:10,
        marginRight:20,
        marginLeft:20,
        backgroundColor:"#fb5b5a",
        shadowColor: 'black',
        borderRadius:25,
        borderWidth: 3,
        borderColor: 'white',
        shadowOpacity: 1,
        marginTop:20,
        elevation: 10,
        alignItems:"center",
        shadowOffset: {
            width: 3,
            height: 3
        },
    },
      
});

export default SettingScreen;