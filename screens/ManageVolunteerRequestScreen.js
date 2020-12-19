import React from 'react';
import { StyleSheet, Text, View, ScrollView,TextInput, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';

const ManageVolunteerRequestScreen = props => {
    return(
        <ScrollView style={styles.scroll}>
        <View style={styles.SubScreen} >
        <View style={styles.screen} >
        <Text style={styles.text}>Edit Request below:</Text>
        
            <Card style={styles.cardView1}>

                <View style={styles.inputView} >
                    <TextInput style={styles.inputText} placeholder="Request ID..." placeholderTextColor="#003f5c"/>
                </View>
                <View style={styles.inputView} >
                    <TextInput style={styles.inputText} placeholder="Edit Status..." placeholderTextColor="#003f5c"/>
                </View>

                <View>
                    <TouchableOpacity style={styles.Btn} onPress = {() => {props.navigation.navigate({routeName: 'Home'}); }}>
                        <Text style={styles.Text}>Edit Request</Text>
                        </TouchableOpacity>
                </View>

            </Card>
            

        </View>
        <View style={styles.Subheading}>
                <Text style={styles.text2}>Your picked up requests are below: </Text>
            </View>
        <View style={styles.screen} >
        
            <Card style={styles.cardView2}>

                <View  >
                    <Text style={styles.text2}> Request ID: 1</Text>
                    <Text style={styles.text2}> Date made: 1/1/2021</Text>
                    <Text style={styles.text2}> Type: Guidance</Text>
                    <Text style={styles.text2}> Description: Dont know how to fix my plumbing?</Text>
                    <Text style={styles.text2}> Status: Done</Text>
                </View>

            </Card>

            
        </View>
        <View style={styles.screen} >
        
            <Card style={styles.cardView2}>

                <View  >
                    <Text style={styles.text2}> Request ID: 2</Text>
                    <Text style={styles.text2}> Date made: 2/1/2021</Text>
                    <Text style={styles.text2}> Type: Guidance</Text>
                    <Text style={styles.text2}> Description: Dont know how to fix my machine?</Text>
                    <Text style={styles.text2}> Status: To Do</Text>
                </View>

            </Card>
        </View>
        <View style={styles.screen} >
        
            <Card style={styles.cardView2}>

                <View  >
                    <Text style={styles.text2}> Request ID: 3</Text>
                    <Text style={styles.text2}> Date made: 3/1/2021</Text>
                    <Text style={styles.text2}> Type: hep</Text>
                    <Text style={styles.text2}> Description: Go shopping forme?</Text>
                    <Text style={styles.text2}> Status: To Do</Text>
                </View>

            </Card>
        </View>

            
        </View>
        
    </ScrollView>
    );
};

ManageVolunteerRequestScreen.navigationOptions = {
headerTitle: 'Manage Volunteer Requests',
headerTitleStyle: { alignSelf: 'center' },
headerStyle: {
backgroundColor: '#2E86C1'
},
headerTintColor:"white"
};

const styles = StyleSheet.create({
    screen: {
        width:'100%',
        flex:1,
        backgroundColor: '#2E86C1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    SubScreen: {
        width:'100%',
        backgroundColor: '#2E86C1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    scroll: {
        width:'100%',
        height:'100%',
        backgroundColor: '#2E86C1',
    },
    text: {
        padding:10,
        marginBottom: 20,
        marginRight:40,
        marginLeft:40,
        color:"white",
        fontSize:20,
        textAlign: 'center',
        marginTop:25,
        borderWidth: 3,
        borderColor: '#fb5b5a',
        borderRadius:15,
    
    },
    text2: {
        padding:10,
        marginRight:40,
        marginLeft:40,
        color:"white",
        fontSize:20,
        textAlign: 'center',
        
    
    },

     inputView:{
        width:300,
        backgroundColor:"#FDFEFE",
        borderRadius:25,
        height:35,
        marginTop:15,
        marginBottom:20,
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
    Subheading: {
        alignSelf: 'stretch',
        borderBottomWidth: 2,
        marginLeft:30,
        marginRight:30,
        marginTop:-240,
        borderColor: '#fb5b5a',
        fontSize: 30,
        color: '#fff',
        justifyContent:"center"
    },
          
    Btn:{
        width:300,
        backgroundColor:"#2E86C1",
        borderRadius:10,
        height:35,
        alignItems:"center",
        justifyContent:'center',
        marginTop:5,
        borderWidth:2,
        borderColor: "white"
        },
        
    cardView1: {
        justifyContent: 'center',
        width:'90%',
        height:'39%',
        backgroundColor:"#fb5b5a",
        shadowColor: 'black',
        borderRadius:25,
        shadowOpacity: 1,
        marginBottom:270,
        elevation: 10,
        alignItems:"center",
        shadowOffset: {
            width: 3,
            height: 3
        },
        
    },
         
    cardView2: {
        justifyContent: 'center',
        width:'90%',
        backgroundColor:"#fb5b5a",
        shadowColor: 'black',
        borderRadius:25,
        borderWidth:3,
        borderColor:'#fff',
        shadowOpacity: 1,
        marginTop:20,
        marginBottom:20,
        padding:20,
        elevation: 10,
        alignItems:"center",
        shadowOffset: {
            width: 3,
            height: 3
        },
        
    },
      
});

export default ManageVolunteerRequestScreen;