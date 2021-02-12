import { Alert } from 'react-native';


const profileDelete = (user, props, db, confirm) =>
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete the account",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {try{

            if(confirm == 'Confirm'){
                
                user.delete().then(() => {
                    props.navigation.navigate({routeName: 'Index'});
                  });

                  db.collection("users").doc(user.uid).delete();


            }
            else{
                alert('Type Confirm exactly as stated in the field');
                return;
            }
      
            
                
        }  
        catch(error){
            console.log(error.toString()),
            alert("Oops! Something went wrong!")
        }} }
      ],
      { cancelable: false }
    );



export default profileDelete;