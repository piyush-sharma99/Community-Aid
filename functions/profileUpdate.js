import { Alert } from 'react-native';


const profileUpdate = (user, signout, props, db, email, name, number, password) =>
Alert.alert(
  "Update Information",
  "Are you sure you want to update you profile information? (YOU WILL BE LOGGED OUT IF PASSWORD AND EMAIL ARE UPDARED!)",
  [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    },
    { text: "OK", onPress: () => { 
        try{

        if(email != ''){

           
            user.updateEmail(email).then( 
                db.collection("users").doc(user.uid).update({
                email: email
            }),
            signout.signOut().then(() => {
                props.navigation.navigate({routeName: 'Index'});
              })
            );

        }
        else{}

        if(name != ''){

            db.collection("users").doc(user.uid).update({
                name: name
            })

        }
        else{}

        if(number != ''){

            db.collection("users").doc(user.uid).update({
                number: number
            })

        }
        else{}

        if(password != '' && password.length>6){

            user.updatePassword(password).then(
                consol.log('Password Updated')
            ),
            signout.signOut().then(() => {
                props.navigation.navigate({routeName: 'Index'});
              })

        }
        else if(password.length<6){
            alert('Password is too short')
            
        }
        else{

        }   

    }
    catch(error){
        console.log('data is updated');
        console.log(error.toString())
      }
} }
  ],
  { cancelable: false }
);

export default profileUpdate;