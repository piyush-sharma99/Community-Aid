import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const AppAssistanceScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>App Assistance</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});

export default AppAssistanceScreen;