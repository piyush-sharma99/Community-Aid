import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const PARScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Pick-up Assistance Requests</Text>
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

export default PARScreen;