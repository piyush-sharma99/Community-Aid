import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import {Card} from 'react-native-paper';
import * as firebase from 'firebase';
import deleteProfile from '../functions/deleteProfile';
import profileUpdate from '../functions/profileUpdate';

const SettingScreen = props => {

const db = firebase.firestore();
const signout = firebase.auth();
const [email, setEmail] = useState('');
const [name, setName] = useState('');
const [number, setNumber] = useState('');
const [confirm, setConfirm] = useState('');
const [password, setPassword] = useState('');
var user = firebase.auth().currentUser;


 
    return(
        <View style={styles.screen}>
              <View style={styles.structure}>

              <Text style={styles.text3}>Edit account information below:</Text>
            
            <View style={styles.SettingForm}>
                <TextInput style={styles.text} placeholder="Change Name" underlineColorAndroid={'transparent'} placeholderTextColor="white" onChangeText={(name) => setName(name)} />
            </View>

            <View style={styles.SettingForm}>
                <TextInput style={styles.text} placeholder="Change Number" underlineColorAndroid={'transparent'} placeholderTextColor="white" onChangeText={(number) => setNumber(number)} />
            </View>
            <View style={styles.SettingForm}>
                <TextInput style={styles.text} placeholder="Change Email" underlineColorAndroid={'transparent'} placeholderTextColor="white" onChangeText={(email) => setEmail(email)}  />
            </View>
            <View style={styles.SettingForm}>
                <TextInput style={styles.text} placeholder="Change Password" underlineColorAndroid={'transparent'} placeholderTextColor="white" secureTextEntry onChangeText={(password) => setPassword(password)}  />
            </View>
            <View>
                 <TouchableOpacity style={styles.btn} onPress = {() => profileUpdate(user, signout, props, db, email, name, number, password)} >
                 <Text style={styles.btnText}>Update Profile</Text>
                 </TouchableOpacity>
            </View>

            <View style={styles.Subheading}>
                        <Text style={styles.text2}> Delete Account: </Text>
                    </View>

            <View style={styles.inputView} >
                <TextInput style={styles.inputText} placeholder="Type 'Confirm' here then press delete..." placeholderTextColor="#003f5c" onChangeText={(confirm) => setConfirm(confirm)}/>
                </View>

            <View>
                <TouchableOpacity style={styles.btn2} onPress = {() => deleteProfile(user, props, db, confirm)} >
                <Text style={styles.Text}>Delete</Text>
                </TouchableOpacity>
</View>

        </View>
        </View>
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
    screen: {
        justifyContent:"center",
        flex: 1,
        backgroundColor: '#2E86C1',
        paddingRight:60,
        paddingLeft:60
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
        marginTop:40,
        marginBottom:30,
        marginLeft:40,
        color:"white",
        fontSize:20,
        textAlign: 'center',
        backgroundColor:'#fb5b5a',
        borderWidth: 3,
        borderColor: 'white',
        
    
    },

    text2: {
        padding:15,
        marginRight:40,
        marginLeft:40,
        color:"white",
        fontSize:20,
        textAlign: 'center',
        
    
    },

    SettingForm: {
        alignSelf: 'stretch',
        borderBottomWidth: 2,
        borderColor: '#fb5b5a',
        fontSize: 30,
        color: '#fff',
        marginBottom:30,
        justifyContent:"center"
    },

    text:{  
        alignSelf: 'stretch',
        height:40,
        marginBottom:2,
        fontSize: 20,
        color: '#fff'   
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
        backgroundColor:"#fb5b5a",
        borderWidth:2,
        shadowOpacity: 1,
        elevation:10,
        borderColor: "white",
        borderRadius:15,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:30
      },
      btn2:{
        width:'100%',
        backgroundColor:"#fb5b5a",
        borderWidth:2,
        shadowOpacity: 1,
        elevation:10,
        borderColor: "white",
        borderRadius:15,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginBottom:10
      },
    inputView:{
        width:300,
        backgroundColor:"#FDFEFE",
        borderRadius:25,
        height:35,
        marginTop:15,
        marginBottom:15,
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
      
});

export default SettingScreen;