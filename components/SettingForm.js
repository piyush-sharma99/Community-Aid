import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';

export default class SettingForm extends React.Component {
render(){
    return( 
        <View style={styles.structure}>
            
            <View style={styles.SettingForm}>
                <TextInput style={styles.text} placeholder="Edit Name" underlineColorAndroid={'transparent'} placeholderTextColor="white" />
            </View>

            <View style={styles.SettingForm}>
                <TextInput style={styles.text} placeholder="Edit Number" underlineColorAndroid={'transparent'} placeholderTextColor="white" />
            </View>
            <View style={styles.SettingForm}>
                <TextInput style={styles.text} placeholder="Edit Email" underlineColorAndroid={'transparent'} placeholderTextColor="white" />
            </View>

            <View>
                 <TouchableOpacity style={styles.btn} >
                 <Text style={styles.btnText}>Submit</Text>
                 </TouchableOpacity>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({

    structure: {
        alignSelf: 'stretch',
        fontSize: 30,
        color: '#fff',
        marginTop:-100,
        justifyContent:"center"
    },

    SettingForm: {
        alignSelf: 'stretch',
        borderBottomWidth: 2,
        borderColor: '#fb5b5a',
        fontSize: 30,
        color: '#fff',
        marginBottom:40,
        justifyContent:"center"
    },

    text:{  
        alignSelf: 'stretch',
        height:40,
        marginBottom:10,
        fontSize: 20,
        color: '#fff'   
    },

    btnText:{
        color:"white",
        fontSize:20
      },

      btn:{
        width:'100%',
        backgroundColor:"#fb5b5a",
        borderRadius:15,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:50,
        marginBottom:10
      },
});