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
              db.collection("users").doc(user.uid).delete(),
                db
                  .collection("Assistance Request")
                  .where("uid", "==", user.uid)
                  .get()
                  .then((snapshot) => {
                    snapshot.forEach((doc) => {
                      const data = doc.data();

                      db.collection("Assistance Request").doc(doc.id).update({
                        uid: "",
                        vid: "",
                        request_Description:
                          "This user has deleted their account please drop the request if it is still assigned to you :)",
                      }),
                        db
                          .collection("users")
                          .doc(data.vid)
                          .get()
                          .then((snapshot) => {
                            const userInfo = snapshot.data();
                            console.log(userInfo);

                            fetch("https://exp.host/--/api/v2/push/send", {
                              method: "POST",
                              headers: {
                                Accept: "application/json",
                                "Accept-Encoding": "gzip, deflate",
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({
                                to: userInfo.expoToken,
                                data: {
                                  extraData: "Request ID: " + data.request_ID,
                                },
                                title: "Request picked is no longer valid",
                                body: "Plese check your requests",
                              }),
                            });
                          });
                    });
                  }),
                user.delete(),
                props.navigation.navigate({ routeName: "Index" });
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
