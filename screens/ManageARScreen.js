import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Card} from 'react-native-paper';
import { Octicons, Entypo} from '@expo/vector-icons';


const ManageARScreen = props => {
    return(
        <View style={styles.screen}>

        <Text style={styles.text}>Choose one below:</Text>

        <TouchableOpacity style={styles.clickView} onPress = {() => {
            props.navigation.navigate({routeName: 'ManageR'});
          }}>
        <Card style={styles.cardView}>
                <View style={styles.content}>
                    <Octicons name="request-changes" size={70} color="white" />
                    <Text style={styles.textStyle}>Assistance Request Made</Text>
                </View>
            </Card>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clickView} onPress = {() => {
            props.navigation.navigate({routeName: 'ManageVR'});
          }}>
        <Card style={styles.cardView}>
                <View style={styles.content}>
                    <Entypo name="awareness-ribbon" size={70} color="white" />
                    <Text style={styles.textStyle}>Picked Up Assistance Requests</Text>
                </View>
            </Card>
        </TouchableOpacity>
            
        </View>
    );
};

ManageARScreen.navigationOptions = {
    headerTitle: 'Manage Assistance Requests',
    headerStyle: {
    backgroundColor: '#2c8ffa'
    },
    headerTintColor:"white"
    };
    

const styles = StyleSheet.create({
    screen: {
        width:'100%',
        height:'100%',
        flex: 1,
        backgroundColor: '#2c8ffa',
        flexWrap:'wrap'
        
    },

    clickView: {
            marginTop:15,
            width:'95%',
            backgroundColor:"#fb5b5a",
            borderRadius:25,
            height:230,
            margin:10,
            justifyContent:"center",
            shadowOpacity: 1,
            shadowOffset: {
            width: 3,
            height: 3
        },
    },

    container: {
        width:'50%',
        backgroundColor:"#fb5b5a",
        height:'30%',
        padding: 10,
        marginTop:10
    },

    content: {
        flex: 1,
        borderRadius:25,
        backgroundColor: '#fb5b5a',
        alignItems: 'center',
        justifyContent: 'center',
    },

    cardView: {
        width:'100%',
        height:'100%',
        backgroundColor:"#fb5b5a",
        shadowColor: 'black',
        borderRadius:25,
        shadowOpacity: 1,
        elevation: 10,
        borderWidth: 3,
        borderColor: 'white',
        shadowOffset: {
            width: 3,
            height: 3
        },
    },
    textStyle: {

        color:"white",
        fontSize:20,
        textAlign: 'center',
        marginTop:10

        },
        text: {
            padding:10,
            marginBottom: 40,
            marginRight:40,
            marginLeft:40,
            fontWeight: "bold",
            color:"white",
            fontSize:30,
            textAlign: 'center',
            marginTop:30,
            borderWidth: 3,
            borderColor: '#fb5b5a',
            borderRadius:15,
    
            }
});

export default ManageARScreen;