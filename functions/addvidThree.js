/*
 *  ClassName: addVidThree.js
 *
 *  Date: 28/03/2021
 *
 * @author Piyush Sharma, X17342356
 *
 * @reference https://reactnative.dev/docs/activityindicator
 * @reference https://firebase.google.com/docs
 * @reference https://www.udemy.com/course/react-native-the-practical-guide/
 * @reference https://docs.expo.io/
 */

/*
 * The function below carries out the following:
 * #1: Takes in inputs from the mapScreen.js
 * #2: Reads request details from firebase
 * #3: Updates the firebase assistance request if it can be added
 * #4: Then a notification is sent to the user that created the assistance request using expo notifications and a post request
 */
const addVidThree = (addRequest, db, user) => {
  if (addRequest == "" || addRequest == " ") {
    alert("issue has occured :(");
    return;
  } else {
    try {
      db.collection("Assistance Request")
        .where("request_ID", "==", addRequest)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            const data = doc.data();
            const docID = doc.id;
            console.log(docID);
            console.log(data);

            if (user.uid == data.uid) {
              alert("This ticket was created by you!");
              return;
            } else {
              db.collection("Assistance Request").doc(doc.id).update({
                vid: user.uid,
                status: "Assigned to a Volunteer",
              }),
                db
                  .collection("users")
                  .doc(data.uid)
                  .get()
                  .then((snapshot) => {
                    const userInfo = snapshot.data();
                    console.log(userInfo);
                    alert("Request was added sucessfully!");

                    fetch("https://exp.host/--/api/v2/push/send", {
                      method: "POST",
                      headers: {
                        Accept: "application/json",
                        "Accept-Encoding": "gzip, deflate",
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        to: userInfo.expoToken,
                        data: { extraData: "Request ID: " + data.request_ID },
                        title:
                          "Request made on " + data.date + " was picked up",
                        body:
                          "Please check your assistance request of type:" +
                          "\r\n" +
                          data.request_Type,
                      }),
                    });
                  });
            }
          });
        });
    } catch (error) {
      console.log(error.toString()), alert("OOPs something went wrong :(");
    }
  }
};

export default addVidThree;
