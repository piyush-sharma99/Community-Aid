import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import {Card} from 'react-native-paper';
import { FontAwesome5, AntDesign, FontAwesome, MaterialIcons, Feather} from '@expo/vector-icons';


const AssistanceRequestsScreen = props => {
    return(
        <View style={styles.screen}>

        <Text style={styles.text}>Choose one below:</Text>

        <TouchableOpacity style={styles.clickView} onPress = {() => {
            props.navigation.navigate({routeName: 'MakeR'});
          }}>
        <Card style={styles.cardView}>
                <View style={styles.content}>
                    <FontAwesome name="wpforms" size={70} color="white" />
                    <Text style={styles.textStyle}> Make Assistance Request</Text>
                </View>
            </Card>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clickView} onPress = {() => {
            props.navigation.navigate({routeName: 'PickUpR'});
          }}>
        <Card style={styles.cardView}>
                <View style={styles.content}>
                    <FontAwesome5 name="hands-helping" size={70} color="white" />
                    <Text style={styles.textStyle}>Pick Up Assistance Requests</Text>
                </View>
            </Card>
        </TouchableOpacity>
            
        </View>
    );
};

AssistanceRequestsScreen.navigationOptions = {
    headerTitle: 'Assistance Request Options',
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
            color:"white",
            fontSize:30,
            textAlign: 'center',
            marginTop:30,
            borderWidth: 3,
            borderColor: '#fb5b5a',
            borderRadius:15,
    
            }
});

export default AssistanceRequestsScreen;