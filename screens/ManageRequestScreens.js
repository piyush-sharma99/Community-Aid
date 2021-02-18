import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView,TextInput, TouchableOpacity,FlatList, SafeAreaView} from 'react-native';
import {Card} from 'react-native-paper';
import * as firebase from 'firebase';
import deleteRequest from '../functions/deleteRequest';


const ManageRequestScreens = props => {

    const [requests, setRequests] = useState([]); 
    const db = firebase.firestore();
    var user = firebase.auth().currentUser;

    useEffect(() => {
          db.collection('Assistance Request')
          .where('uid', '==', user.uid)
          .onSnapshot(querySnapshot => {
            const requests = [];
      
            querySnapshot.forEach(documentSnapshot => {
                requests.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.request_ID,
              });
            });
      
            setRequests(requests);
            console.log(requests);
          });

      }, []);


    const renderRequest = ({ item }) => (
        
        <View style={styles.screen2} >
                
        <Card style={styles.cardView2}>

            <View  >
                <Text style={styles.text2}>Request Date: {"\n"}{item.date}</Text>
                <Text style={styles.text2}>Request Type: {"\n"}{item.request_Type}</Text>
                <Text style={styles.text2}>Request Description: {item.request_Description}</Text>
                <Text style={styles.text2}>Request Status: {"\n"}{item.status}</Text>
                <TouchableOpacity style={styles.Btn} onPress = {() => deleteRequest(item, db)}>
                                <Text style={styles.Text}>Delete Request</Text>
                                </TouchableOpacity>
                <TouchableOpacity style={styles.Btn} onPress = {() => {
            props.navigation.navigate('EditR', {item}); }}>
                                <Text style={styles.Text}>Edit Request</Text>
                                </TouchableOpacity>
                                
            </View>

        </Card>
    </View>
      );
 

    return(
            
                <View style={styles.screen} >
                
                <Text style={styles.text}>Requests made by you :</Text>

                <FlatList
                style={{flex: 1}}
                data={requests}
                renderItem={renderRequest}
                keyExtractor={item => item.request_ID}
                />
                
                    
                </View>
                
            
    );
};

ManageRequestScreens.navigationOptions = {
headerTitle: 'Assistance Requests',
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
        flex:1,
        backgroundColor: '#2E86C1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    screen2: {
        width:410,
        backgroundColor: '#2E86C1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        padding:10,
        marginBottom: 20,
        marginRight:40,
        marginLeft:40,
        color:"white",
        fontSize:20,
        textAlign: 'center',
        marginTop:15,
        borderWidth: 3,
        borderColor: '#fb5b5a',
        borderRadius:15,
    
    },
    text2: {
        padding:5,
        marginRight:40,
        marginLeft:40,
        color:"white",
        fontSize:20,
        textAlign: 'center',
        
    
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
        width:'100%',
        backgroundColor:"#2E86C1",
        borderRadius:10,
        height:40,
        alignItems:"center",
        justifyContent:'center',
        marginTop:10,
        borderWidth:2,
        borderColor: "white"
        },
         
    cardView2: {
        justifyContent: 'center',
        width:'95%',
        backgroundColor:"#fb5b5a",
        shadowColor: 'black',
        borderRadius:25,
        borderWidth:3,
        borderColor:'#fff',
        shadowOpacity: 1,
        marginTop:15,
        marginBottom:20,
        padding:15,
        elevation: 10,
        alignItems: 'center',
        shadowOffset: {
            width: 3,
            height: 3
        },
        
    },
      
});

export default ManageRequestScreens;