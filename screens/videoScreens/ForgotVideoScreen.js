import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import { WebView } from 'react-native-webview';


const ForgotVideoScreen = props => {
    return(
        <View style={styles.screen}>
            <View style={styles.subScreen}>
              <WebView
    style={styles.web}
    javaScriptEnabled={true}
    source={{uri: 'https://youtu.be/o4n4U_88vic'}}
/>

</View>

<View>
    <Text style={styles.text}>This feature can be used by all users to reset their password in case they forgot their current one. For a full tutorial view the video shown above.</Text>
</View>
    
        </View>
    );
};

ForgotVideoScreen.navigationOptions = {
    headerTitle: 'Forgot Password Assistance ',
    headerStyle: {
    backgroundColor: '#2c8ffa'
    },
    headerTintColor:"white"
    };

    const styles = StyleSheet.create({
        screen: {
            flex: 1,
            backgroundColor: '#2c8ffa',
            
        },
        subScreen: {
            height:'50%',
            backgroundColor: '#2c8ffa',
                
        },
    

          web:{
            marginRight:5,
            marginLeft:5,
            marginTop:30,
            borderWidth:2,
            borderColor: '#fb5b5a',
            elevation: 10
            
            
            
          },

          text: {
            padding:10,
            marginRight:40,
            marginTop:40,
            marginBottom:30,
            marginLeft:40,
            color:"white",
            fontSize:20,
            textAlign: 'center',
            backgroundColor:'#fb5b5a',
            borderWidth: 3,
            borderColor: 'white',
            shadowOpacity: 2,
        elevation: 5,
        shadowOffset: {
          width: 3,
          height: 3
      }
            
        
        },
    });

export default ForgotVideoScreen ;