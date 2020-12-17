import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import SettingForm from '../components/SettingForm';

const SettingScreen = props => {
    return(
        <View style={styles.screen}>
            <SettingForm />
        </View>
    );
};

SettingScreen.navigationOptions = {
    headerTitle: 'Settings',
    headerStyle: {
    backgroundColor: '#2E86C1'
    },
    headerTintColor:"white"
    };

const styles = StyleSheet.create({
    screen: {
        justifyContent:"center",
        flex: 1,
        backgroundColor: '#2E86C1',
        paddingRight:60,
        paddingLeft:60
    }
});

export default SettingScreen;