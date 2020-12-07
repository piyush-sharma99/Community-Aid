import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const MapScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Map</Text>
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

export default MapScreen;