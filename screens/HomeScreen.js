import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import {Card} from 'react-native-paper';
import { FontAwesome5, AntDesign, FontAwesome, MaterialIcons, Feather} from '@expo/vector-icons';


const HomeScreen = props => {
    return(
        <View style={styles.screen}>

        <TouchableOpacity style={styles.clickView} onPress = {() => {
            props.navigation.navigate({routeName: 'Map'});
          }}>
        <Card style={styles.cardView}>
                <View style={styles.content}>
                    <FontAwesome5 name="map-marked-alt" size={70} color="white"/>
                    <Text style={styles.textStyle}>Map</Text>
                </View>
            </Card>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clickView} onPress = {() => {
            props.navigation.navigate({routeName: 'AssistanceRequest'});
          }}>
        <Card style={styles.cardView}>
                <View style={styles.content}>
                    <AntDesign name="form" size={70} color="white" justifyContent="center" />
                    <Text style={styles.textStyle}> Assistance Request</Text>
                </View>
            </Card>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clickView} onPress = {() => {
            props.navigation.navigate({routeName: 'ManageAR'});
          }}>
        <Card style={styles.cardView}>
                <View style={styles.content}>
                    <FontAwesome name="edit" size={70} color="white" />
                    <Text style={styles.textStyle}>Manage Requests</Text>
                </View>
            </Card>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clickView} onPress = {() => {
            props.navigation.navigate({routeName: 'App'});
          }}>
        <Card style={styles.cardView}>
                <View style={styles.content}>
                    <MaterialIcons name="help-outline" size={70} color="white" />
                    <Text style={styles.textStyle}>Need Assistance?</Text>
                </View>
            </Card>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clickView} onPress = {() => {
            props.navigation.navigate({routeName: 'setting'});
          }}>
        <Card style={styles.cardView}>
                <View style={styles.content}>
                    <Feather name="settings" size={70} color="white" />
                    <Text style={styles.textStyle}> Settings</Text>
                </View>
            </Card>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clickView} onPress = {() => {
            props.navigation.navigate({routeName: 'AssistanceRequest'});
          }}>
        <Card style={styles.cardView}>
                <View style={styles.content}>
                    <AntDesign name="logout" size={70} color="white" />
                    <Text style={styles.textStyle}>Log Out</Text>
                </View>
            </Card>
        </TouchableOpacity>
            
        </View>
    );
};

HomeScreen.navigationOptions = {
    headerTitle: 'Home',
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
        flexDirection:'row',
        flexWrap:'wrap'
        
    },

    clickView: {
            marginTop:15,
            width:'45%',
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

        }
});

export default HomeScreen;