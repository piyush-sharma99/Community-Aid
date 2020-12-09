import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image} from 'react-native';

const AuthenticationScreen = props => {
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
            placeholderTextColor="#003f5c"/>
        </View>

        <View style={styles.inputViewPassword} >
          <TextInput  
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"/>
        </View>

        <View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signBtn}>
          <Text style={styles.signText}>Sign Up</Text>
        </TouchableOpacity>
        </View>

        </View>
    );
};

AuthenticationScreen.navigationOptions = {
headerTitle: 'Welcome',
headerTitleStyle: { alignSelf: 'center' },
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
        padding:20
      },

      inputViewPassword:{
        width:"80%",
        backgroundColor:"#FDFEFE",
        borderRadius:25,
        height:50,
        marginBottom:20,
        marginTop:10,
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:50,
        color:"white"
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
        marginTop:20,
        marginBottom:5
      },

      signBtn:{
        width:200,
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:10
      },
      
});

export default AuthenticationScreen;