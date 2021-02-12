import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image} from 'react-native';
import * as firebase from 'firebase';
import logInUser from '../functions/logInUser';


const LoginScreen = props => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const fb = firebase.auth();

  return(
    <View style={styles.screen} >
    
    <Image 
    style={styles.logo}
    source={require('../assets/Logo.png')}
    />

     <View style={styles.inputViewEmail} >
      <TextInput  
        style={styles.inputText}
        placeholder="Email..." 
        placeholderTextColor="#003f5c"
        onChangeText={(email) => setEmail(email)}/>
    </View>

    <View style={styles.inputViewPassword} >
      <TextInput  
        style={styles.inputText}
        placeholder="Password..." 
        secureTextEntry
        placeholderTextColor="#003f5c"
        onChangeText={(password) => setPassword(password)}/>
    </View>

    <View>
    <TouchableOpacity>
      <Text style={styles.forgot} onPress = {() => {
            props.navigation.navigate({routeName: 'Forgot'});
          }}>Forgot Password?</Text>
    </TouchableOpacity>
    </View>

    <View>
    <TouchableOpacity style={styles.loginBtn} onPress = {() => logInUser(fb, email, password, props)}  >
      <Text style={styles.loginText} >Log In</Text>
    </TouchableOpacity>
    </View>

    </View>
);

};

LoginScreen.navigationOptions = {
headerTitle: 'Log in',
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
        marginTop:-230
      },

      inputViewEmail:{
        width:"80%",
        backgroundColor:"#FDFEFE",
        borderRadius:25,
        height:50,
        marginTop:30,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
        elevation: 10,
        borderWidth: 4,
        borderColor: "#fb5b5a"
      },

      inputViewPassword:{
        width:"80%",
        backgroundColor:"#FDFEFE",
        borderRadius:25,
        height:50,
        marginBottom:20,
        marginTop:10,
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

      forgot:{
        color:"white",
        fontSize:11
      },

      loginText:{
        color:"white",
        fontSize:20
      },

      signText:{
        color:"white",
        fontSize:20
      },

      forgot:{
        color:"white",
        fontSize:15,
        marginBottom:5,
        marginTop:20
      },

      loginBtn:{
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
        marginTop:20,
        marginBottom:5
      },
      
});




export default LoginScreen;