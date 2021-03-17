import React from 'react';
import { StyleSheet, Text, View,ImageBackground} from 'react-native';
import { WebView } from 'react-native-webview';


const MapVideoScreen = props => {
    return(
        <ImageBackground source={require('../assets/BG.png')} style={styles.bImage}>
        <View style={styles.screen}>
            <View style={styles.subScreen}>
              <WebView
    style={styles.web}
    javaScriptEnabled={true}
    source={{uri: 'https://youtu.be/ZCSVUAULKWI'}}
/>

</View>

<View>
    <Text style={styles.text}>The map page is designed for volunteers who would like to help others in their region. It allows volunteers to view requests in their area, view their area, set a radius ring on the map to measure distance and add requests on demand. To view a tutorial on how to use the features view the video above. </Text>
</View>
    
        </View>
        </ImageBackground>
    );
};

MapVideoScreen.navigationOptions = {
    headerTitle: 'Map Assistance ',
    headerStyle: {
    backgroundColor: '#2c8ffa'
    },
    headerTintColor:"white"
    };

    const styles = StyleSheet.create({

        bImage: {
            width:'100%',
            height:'100%',
        },

        screen: {
            flex: 1
            
        },
        subScreen: {
            height:'50%'
                
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

export default MapVideoScreen;