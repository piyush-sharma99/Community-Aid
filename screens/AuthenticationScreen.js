import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const AuthenticationScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Signup</Text>
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

export default AuthenticationScreen;