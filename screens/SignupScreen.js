import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image} from 'react-native';

const SignupScreen = props => {
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
            placeholderTextColor="#003f5c"/>
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Number..." 
            placeholderTextColor="#003f5c"/>
        </View>

         <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"/>
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Password..." 
            secureTextEntry
            placeholderTextColor="#003f5c"/>
        </View>

        <View>
        <TouchableOpacity style={styles.signBtn} onPress = {() => {
            props.navigation.navigate({routeName: 'Home'});
            }}>
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
        marginTop:-140
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

      signBtn:{
        width:200,
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
      
});

export default SignupScreen;