import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

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

        <TouchableOpacity style={styles.signBtn} onPress = {() => {
            props.navigation.navigate({routeName: 'About'});
          }}>
          <Text style={styles.signText} >Learn more about us!</Text>
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
        marginTop:-300,
        width:200,
        height:200,
      },
      loginText:{
        color:"white",
        fontSize:20
      },

      signText:{
        color:"white",
        fontSize:20
      },
      loginBtn:{
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
        marginTop:30,
        marginBottom:5
      },

      signBtn:{
        width:300,
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        borderWidth: 3,
        borderColor: '#fff',
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        elevation:10,
        shadowOpacity: 1,
        marginBottom:10
      },
      about:{
        marginTop:60,
        marginBottom:-70,
        color:"white",
        fontSize:20,

      },
      
      
      
});

export default IndexScreen;