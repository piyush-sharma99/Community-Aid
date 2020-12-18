import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const ManageVolunteerRequestScreen = props => {
    return(
        <View style={styles.screen} >
        
        <Text> Manage Assistance volunteer Request Screen</Text>

        </View>
    );
};

ManageVolunteerRequestScreen.navigationOptions = {
headerTitle: 'Manage Volunteer Requests',
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

export default ManageVolunteerRequestScreen;