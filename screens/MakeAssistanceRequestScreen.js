import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image} from 'react-native';
import {Card} from 'react-native-paper';

const MakeAssistanceRequestScreen = props => {
    return(
        <View style={styles.screen} >

<Text style={styles.text}>Fill the form below:</Text>
         <Card style={styles.cardView}>

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
            placeholder="Address..." 
            placeholderTextColor="#003f5c"/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Area..." 
            placeholderTextColor="#003f5c"/>
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Request..." 
            secureTextEntry
            placeholderTextColor="#003f5c"/>
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Request Description..." 
            secureTextEntry
            placeholderTextColor="#003f5c"/>
        </View>

        <View>
        <TouchableOpacity style={styles.Btn} onPress = {() => {
            props.navigation.navigate({routeName: 'Home'});
            }}>
          <Text style={styles.Text}>Submit</Text>
        </TouchableOpacity>
        </View>

        </Card>

        </View>
    );
};

MakeAssistanceRequestScreen.navigationOptions = {
headerTitle: 'Make Assistance Request',
headerTitleStyle: { alignSelf: 'center' },
headerStyle: {
backgroundColor: '#2E86C1'
},
headerTintColor:"white"
};


const styles = StyleSheet.create({
  text: {
    padding:10,
    marginBottom: 30,
    marginRight:40,
    marginLeft:40,
    color:"white",
    fontSize:30,
    textAlign: 'center',
    marginTop:-30,
    borderWidth: 3,
    borderColor: '#fb5b5a',
    borderRadius:15,

    },
    screen: {
        width:'100%',
        height:'100%',
        flex: 1,
        backgroundColor: '#2E86C1',
        alignItems: 'center',
        justifyContent: 'center'
    },
      inputView:{
        width:300,
        backgroundColor:"#FDFEFE",
        borderRadius:25,
        height:50,
        marginTop:25,
        marginBottom:15,
        justifyContent:"center",
        padding:20,
        elevation: 10,
        borderWidth: 4,
        borderColor: "#2E86C1"
      },

      inputText:{
        height:50,
        color:"black"
      },

      Text:{
        color:"white",
        fontSize:20
      },

      
      Btn:{
        width:300,
        backgroundColor:"#2E86C1",
        borderRadius:15,
        height:50,
        alignItems:"center",
        justifyContent:'center',
        marginTop:20,
        borderWidth:2,
        borderColor: "white"
      },
      cardView: {
        justifyContent: 'center',
        width:'90%',
        height:'80%',
        backgroundColor:"#fb5b5a",
        shadowColor: 'black',
        borderRadius:25,
        shadowOpacity: 1,
        elevation: 10,
        alignItems:"center",
        shadowOffset: {
            width: 3,
            height: 3
        },
    },
      
      
});

export default MakeAssistanceRequestScreen;