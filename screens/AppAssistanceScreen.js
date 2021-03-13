import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';


const AppAssistanceScreen = props => {
    return(
        <View style={styles.screen}>
              <Text style={styles.text}>Pick the topic of confusion:</Text>

              <TouchableOpacity style={styles.Btn1} onPress = {() => {
            props.navigation.navigate({routeName: 'MapV'});
          }}>
             <Text style={styles.subText} >Map Assistance</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn} onPress = {() => {
            props.navigation.navigate({routeName: 'AssistanceV'});
          }} >
             <Text style={styles.subText} >Assistance Request Page</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn} onPress = {() => {
            props.navigation.navigate({routeName: 'ManageV'});
          }} >
             <Text style={styles.subText} >Manage Requests Page</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn}  onPress = {() => {
            props.navigation.navigate({routeName: 'SettingV'});
          }}>
             <Text style={styles.subText} >Settings</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn} onPress = {() => {
            props.navigation.navigate({routeName: 'ForgotV'});
          }} >
             <Text style={styles.subText} >Forgot Password</Text>

        </TouchableOpacity>
            
            

        
        </View>
    );
};

AppAssistanceScreen.navigationOptions = {
    headerTitle: 'Help ',
    headerStyle: {
    backgroundColor: '#2E86C1'
    },
    headerTintColor:"white"
    };

    const styles = StyleSheet.create({
        screen: {
            flex: 1,
            backgroundColor: '#2E86C1',
        },
        text: {
          padding:10,
          marginRight:40,
          marginLeft:40,
          color:"white",
          fontWeight: "bold",
          fontSize:25,
          textAlign: 'center',
          marginTop:40,
          borderWidth: 3,
          borderColor: '#fb5b5a',
          borderRadius:15,
      
      },  
        
        Btn1:{
            backgroundColor:'#fb5b5a',
            borderRadius:10,
            height:50,
            marginRight:40,
            marginLeft:40,
            alignItems:"center",
            justifyContent:"center",
            marginTop:100,
            marginBottom:5,
            borderWidth:2,
            borderColor: "white",
            shadowOpacity: 2,
        elevation: 5,
        shadowOffset: {
          width: 3,
          height: 3
      }
            
          },
          Btn:{
            backgroundColor:'#fb5b5a',
            borderRadius:10,
            height:50,
            marginRight:40,
            marginLeft:40,
            alignItems:"center",
            justifyContent:"center",
            marginTop:30,
            marginBottom:5,
            borderWidth:2,
            borderColor: "white",
            shadowOpacity: 2,
        elevation: 5,
        shadowOffset: {
          width: 3,
          height: 3
      }
          },
    
          subText:{
            color:"white",
            fontSize:20
          },
    });

export default AppAssistanceScreen;