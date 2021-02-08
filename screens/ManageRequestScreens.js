import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView,TextInput, TouchableOpacity,FlatList, SafeAreaView} from 'react-native';
import {Card} from 'react-native-paper';
import * as firebase from 'firebase';

const ManageRequestScreens = props => {

    const [requests, setRequests] = useState([]); 
    const db = firebase.firestore();
    const [request, setRequest] = useState('');
    var user = firebase.auth().currentUser;

    deleteRequest = () => {

        try{
            db.collection('Assistance Request').where('request_ID', '==', request).get()
            .then(snapshot => {
              snapshot.forEach(doc => {
                const docID = doc.id;
                console.log(docID);

                db.collection("Assistance Request").doc(doc.id).update({
                    uid: "request Deleted by user",
                    vid: ""
          
          
                  })

              });
            })


        }
        catch(error){
            console.log('Request was not deleted');
            console.log(error.toString())
          }


    }

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
                <Text style={styles.text2}>Request ID: {item.request_ID}</Text>
                <Text style={styles.text2}>Request Date: {item.date}</Text>
                <Text style={styles.text2}>Request Type: {item.request_Type}</Text>
                <Text style={styles.text2}>Request Description: {item.request_Description}</Text>
                <Text style={styles.text2}>Request Status: {item.status}</Text>
            </View>

        </Card>
    </View>
      );
 

    return(
            
                <View style={styles.screen} >
                <View style={styles.SubScreen} >
                <Text style={styles.text}>Delete requests below:</Text>
                
                    <Card style={styles.cardView1}>

                        <View style={styles.inputView} >
                            <TextInput style={styles.inputText} placeholder="Request ID..." placeholderTextColor="#003f5c" onChangeText={(request) => setRequest(request)}/>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.Btn} onPress = {deleteRequest}>
                                <Text style={styles.Text}>Delete Request</Text>
                                </TouchableOpacity>
                        </View>

                    </Card>
                    

                </View>
                <View style={styles.Subheading}>
                        <Text style={styles.text2}> Your requests are below: </Text>
                    </View>


             

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
    SubScreen: {
        marginTop:-30,
        width:'100%',
        backgroundColor: '#2E86C1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    scroll: {
       
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
        marginTop:15,
        borderWidth: 3,
        borderColor: '#fb5b5a',
        borderRadius:15,
    
    },
    text2: {
        padding:15,
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
    Subheading: {
        alignSelf: 'stretch',
        borderBottomWidth: 2,
        marginLeft:10,
        marginRight:10,
        marginTop:-290,
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
        height:'28%',
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
        width:400,
        backgroundColor:"#fb5b5a",
        shadowColor: 'black',
        borderRadius:25,
        borderWidth:3,
        borderColor:'#fff',
        shadowOpacity: 1,
        marginTop:10,
        marginBottom:20,
        padding:10,
        elevation: 10,
        alignItems: 'center',
        shadowOffset: {
            width: 3,
            height: 3
        },
        
    },
      
});

export default ManageRequestScreens;