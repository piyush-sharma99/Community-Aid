/*
 *  ClassName: profileUpdate.js
 *
 *  Date: 28/03/2021
 *
 * @author Piyush Sharma, X17342356
 *
 * @reference https://reactnative.dev/docs/activityindicator
 * @reference https://firebase.google.com/docs
 * @reference https://docs.expo.io/
 */

/*
 * The function below carries out the following:
 * #1: Takes in inputs from the SettingsScreen.js
 * #2: Checks inputs and updated user data in firebase
 */
import { Alert } from "react-native";

const profileUpdate = (
  user,
  signout,
  props,
  db,
  email,
  name,
  number,
  password
) =>
  Alert.alert(
    "Update Information",
    "Are you sure you want to update you profile information? (YOU WILL BE LOGGED OUT IF PASSWORD AND EMAIL ARE UPDATED!)",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          try {
            if (email != "") {
              user.updateEmail(email).then(
                db.collection("users").doc(user.uid).update({
                  email: email,
                }),
                signout.signOut().then(() => {
                  props.navigation.navigate({ routeName: "Index" });
                })
              );
            } else {
            }

            if (name != "") {
              db.collection("users").doc(user.uid).update({
                name: name,
              });
            } else {
            }

            if (number != "") {
              db.collection("users").doc(user.uid).update({
                number: number,
              });
            } else {
            }

            if (password != "" && password.length > 6) {
              if (password.length < 6 || password == "" || password == " ") {
                alert("Password is too short");
              } else {
                user
                  .updatePassword(password)
                  .then(consol.log("Password Updated")),
                  signout.signOut().then(() => {
                    props.navigation.navigate({ routeName: "Index" });
                  });
              }
            } else {
            }
          } catch (error) {
            console.log("data is updated");
            console.log(error.toString());
          }
        },
      },
    ],
    { cancelable: false }
  );

export default profileUpdate;
