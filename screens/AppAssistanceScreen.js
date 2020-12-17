import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ReactDropDown from '../components/ReactDropDown';

const AppAssistanceScreen = props => {
    return(
        <View style={styles.screen}>
            <ReactDropDown />
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
        color: "white",
        width:'100%',
        height:'100%',
        flex: 1,
        backgroundColor: '#2E86C1',
        flexDirection:'row',
        flexWrap:'wrap'
        
    },
});

export default AppAssistanceScreen;