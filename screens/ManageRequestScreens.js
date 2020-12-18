import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image} from 'react-native';

const ManageRequestScreens = props => {
    return(
        <View style={styles.screen} >
        
        <Text> Manage Assistance Request Screen</Text>

        </View>
    );
};

ManageRequestScreens.navigationOptions = {
headerTitle: 'Assistance Requests',
headerTitleStyle: { alignSelf: 'center' },
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
        alignItems: 'center',
        justifyContent: 'center'
    },
      
});

export default ManageRequestScreens;