import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image} from 'react-native';

const IndexScreen = props => {
    return(
        <View style={styles.screen} >
        
        <Image 
        style={styles.logo}
        source={require('../assets/Logo.png')}
        />

        <View>
        <TouchableOpacity style={styles.loginBtn} onPress = {() => {
            props.navigation.navigate({routeName: 'Login'});
          }}>
          <Text style={styles.loginText} >Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signBtn} onPress = {() => {
            props.navigation.navigate({routeName: 'Signup'});
          }}>
          <Text style={styles.signText}>Sign Up</Text>
        </TouchableOpacity>
        </View>

        </View>
    );
};

IndexScreen.navigationOptions = {
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

export default IndexScreen;