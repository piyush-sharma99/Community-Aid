import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image} from 'react-native';
import * as firebase from 'firebase';
import forgotPassword from '../functions/forgotpassword'


const ForgotPasswordScreen = props => {
  
  const [email, setEmail] = useState('');
  const fb = firebase.auth();

  resetFieldsOne = () => {
    this.textInputOne.clear();     
}

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
        onChangeText={(email) => setEmail(email)} 
        ref={input => { this.textInputOne = input }}/>
    </View>

    <View>
    <TouchableOpacity style={styles.ForgotBtn} onPressIn = {() => forgotPassword(fb, email, props)} onPress = {resetFieldsOne}  >
      <Text style={styles.forgotText} >Send Password Reset Email</Text>
    </TouchableOpacity>
    </View>

    </View>
);

};

ForgotPasswordScreen.navigationOptions = {
headerTitle: 'Reset Password',
headerStyle: {
backgroundColor: '#2c8ffa'
},
headerTintColor:"white"
};

const styles = StyleSheet.create({
    screen: {
        width:'100%',
        height:'100%',
        flex: 1,
        backgroundColor: '#2c8ffa',
        alignItems: 'center',
        justifyContent: 'center'
    },

    logo:{
        justifyContent:"center",
        marginTop:-320
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
      inputText:{
        height:50,
        color:"black"
      },

      forgotText:{
        color:"white",
        fontSize:20
      },

      ForgotBtn:{
        width:300,
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




export default ForgotPasswordScreen;