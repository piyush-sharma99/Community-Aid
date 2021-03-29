/*
 *  ClassName: deleteProfile.js
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
 * #2: Pops an alert for the user aking if they are sure about deleting there account
 * #3: users account is deleted by the user
 */
import { Alert } from "react-native";

const profileDelete = (user, props, db, confirm) =>
  Alert.alert(
    "Delete Account",
    "Are you sure you want to delete the account",
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
            if (confirm == "Confirm") {
              user.delete().then(() => {
                props.navigation.navigate({ routeName: "Index" });
              });

              db.collection("users").doc(user.uid).delete();
            } else {
              alert("Type Confirm exactly as stated in the field");
              return;
            }
          } catch (error) {
            console.log(error.toString()), alert("Oops! Something went wrong!");
          }
        },
      },
    ],
    { cancelable: false }
  );

export default profileDelete;
