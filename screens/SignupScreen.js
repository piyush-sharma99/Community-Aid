import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image} from 'react-native';
import * as firebase from 'firebase';
import signUpUser from '../functions/signUpUser'

const SignupScreen = props => {

  const db = firebase.firestore();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const fb = firebase.auth();


  return(
    <View style={styles.screen} >
        
    <Image 
    style={styles.logo}
    source={require('../assets/Logo.png')}
    />

    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Name..." 
        placeholderTextColor="#003f5c"
        onChangeText={(name) => setName(name)}/>
    </View>

    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Number..." 
        placeholderTextColor="#003f5c"
        onChangeText={(number) => setNumber(number)}/>
    </View>

     <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Email..." 
        placeholderTextColor="#003f5c"
        onChangeText={(email) => setEmail(email)}/>
    </View>

    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Password..." 
        secureTextEntry
        placeholderTextColor="#003f5c"
        onChangeText={(password) => setPassword(password)}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Repeat Password..." 
        secureTextEntry
        placeholderTextColor="#003f5c"
        onChangeText={(passwordRepeat) => setPasswordRepeat(passwordRepeat)}/>
    </View>

    <View>
    <TouchableOpacity style={styles.signBtn}  onPress = {() => signUpUser(name, number, email, password, passwordRepeat, fb, props, db)}>
      <Text style={styles.signText}>Sign Up</Text>
    </TouchableOpacity>
    </View>

    </View>
   
);

};

SignupScreen.navigationOptions = {
headerTitle: 'Sign up',
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

    logo:{
        justifyContent:"center",
        marginTop:-20
      },

      inputView:{
        width:"80%",
        backgroundColor:"#FDFEFE",
        borderRadius:25,
        height:50,
        marginTop:20,
        marginBottom:20,
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

      signText:{
        color:"white",
        fontSize:20
      },


      signBtn:{
        width:200,
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        borderWidth: 3,
        borderColor: '#fff',
        borderRadius:15,
        shadowOpacity: 1,
        elevation:10,
        marginTop:50,
        marginBottom:90
      },
      
});

export default SignupScreen;