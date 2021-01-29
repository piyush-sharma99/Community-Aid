import React, { useState} from 'react';
import { StyleSheet, Text, View, ScrollView,TextInput, TouchableOpacity,FlatList, SafeAreaView} from 'react-native';
import {Card} from 'react-native-paper';
import * as firebase from 'firebase';


const PickUpAssistanceRequestScreen = props => {

    const [requests, setRequests] = useState([]); // Initial empty array of users // Initial empty array of users
    const db = firebase.firestore();
    const [area, setArea] = useState('');
    const [request, setRequest] = useState('');

    var user = firebase.auth().currentUser;

    addVid = () => {

        try{
            db.collection('Assistance Request').where('request_ID', '==', request).get()
            .then(snapshot => {
              snapshot.forEach(doc => {
                const data = doc.data();
                const docID = doc.id;
                console.log(docID);
                console.log(data);

                db.collection("Assistance Request").doc(doc.id).update({
                    vid: user.uid
          
          
                  })

              });
            })


        }
        catch(error){
            console.log('Data Not uploaded');
            console.log(error.toString())
          }


    }

    readRequest = () => {
        db.collection('Assistance Request')
        .where('area', '==', area)
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
    };


    const renderRequest = ({ item }) => (
        <View style={styles.screen} >
                
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
      <View style={styles.screen} >
      <Text style={styles.text}>Search or Add Request below:</Text>
      
          <Card style={styles.cardView1}>

              <View style={styles.inputView} >
                  <TextInput style={styles.inputText} placeholder="Area..." placeholderTextColor="#003f5c" onChangeText={(area) => setArea(area)}/>
              </View>
              <View>
                  <TouchableOpacity style={styles.Btn}  onPress = {readRequest}>
                      <Text style={styles.Text}>Search</Text>
                      </TouchableOpacity>
              </View>

          </Card>
          
          

      </View>
      <View style={styles.screen} >
      
          <Card style={styles.cardView3}>

              <View style={styles.inputView} >
                  <TextInput style={styles.inputText} placeholder="Request ID..." placeholderTextColor="#003f5c" onChangeText={(request) => setRequest(request)}/>
              </View>
              <View>
                  <TouchableOpacity style={styles.Btn} onPress = {addVid}>
                      <Text style={styles.Text}>ADD</Text>
                      </TouchableOpacity>
              </View>

          </Card>
          
          

      </View>
      <View style={styles.Subheading}>
              <Text style={styles.text2}>Requests below: </Text>
          </View>
      

     

        <FlatList
        style={{flex: 1, marginTop:10}}
        horizontal={true}
        data={requests}
        renderItem={renderRequest}
        keyExtractor={item => item.request_ID}
        />
        

          
      </View>
      
    );
};

PickUpAssistanceRequestScreen.navigationOptions = {
headerTitle: 'Pick Up Assistance Request',
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
      marginTop: -50,
      marginRight:40,
      marginLeft:40,
      color:"white",
      fontSize:20,
      textAlign: 'center',
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
      marginTop:-235,
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
      height:'45%',
      marginTop:20,
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
       
  cardView2: {
      justifyContent: 'center',
      width:'60%',
      height:'90%',
      backgroundColor:"#fb5b5a",
      shadowColor: 'black',
      borderRadius:25,
      borderWidth:3,
      borderColor:'#fff',
      shadowOpacity: 1,
      marginTop:20,
      marginBottom:40,
      padding:20,
      elevation: 10,
      alignItems:"center",
      shadowOffset: {
          width: 3,
          height: 3
      },
      
  },
  cardView3: {
    justifyContent: 'center',
    width:'90%',
    height:'45%',
    backgroundColor:"#fb5b5a",
    marginTop:-300,
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

export default PickUpAssistanceRequestScreen;