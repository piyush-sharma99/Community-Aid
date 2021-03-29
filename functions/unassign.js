/*
 *  ClassName: unassign.js
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
 * #1: Takes in inputs from the ManageVolunteerRequestScreen.js
 * #2: Reads request details from firebase
 * #3: Updates the firebase assistance request
 * #4: Sends a notification to the the user who created the request
 */
const unassign = (db, item) => {
  const request = item.request_ID;

  try {
    db.collection("Assistance Request")
      .where("request_ID", "==", request)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const docID = doc.id;
          const data = doc.data();
          console.log(docID);

          db.collection("Assistance Request").doc(doc.id).update({
            vid: "",
            status: "Unassigned",
          }),
            alert("Request was Unassigned successfully!"),
            db
              .collection("users")
              .doc(data.uid)
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
                    data: { extraData: "Request ID: " + data.request_ID },
                    title: "Request made was dropped by volunteer",
                    body:
                      "Please check your assistance requests of type:" +
                      "\r\n" +
                      data.request_Type,
                  }),
                });
              });
        });
      });
  } catch (error) {
    console.log("Request status was not edited");
    console.log(error.toString());
  }
};

export default unassign;
