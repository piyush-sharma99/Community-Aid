/*
 *  ClassName: editRequest.js
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
 * #1: Takes in inputs from the EditRequestScreen.js
 * #2: Reads request details from firebase
 * #3: Updates the firebase assistance request
 * #4: Sends a notification to the volunteer who picked up request
 */
const editRequest = (
  request,
  db,
  address,
  area,
  requestType,
  requestDescription,
  props
) => {
  const docs = request.request_ID;

  try {
    console.log(docs),
      db
        .collection("Assistance Request")
        .where("request_ID", "==", docs)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            const docID = doc.id;
            const data = doc.data();
            console.log(docID);

            if (area != "") {
              db.collection("Assistance Request").doc(doc.id).update({
                area: area,
              });
            } else {
            }

            if (address != "") {
              db.collection("Assistance Request").doc(doc.id).update({
                address: address,
              });
            } else {
            }

            if (requestType != "") {
              db.collection("Assistance Request").doc(doc.id).update({
                request_Type: requestType,
              });
            } else {
            }

            if (requestDescription != "") {
              db.collection("Assistance Request").doc(doc.id).update({
                request_Description: requestDescription,
              });
            } else {
            }

            if (data.vid == "" || data.vid == " ") {
              props.navigation.navigate({ routeName: "ManageR" });
            } else {
              db.collection("users")
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
                      data: { extraData: "Request ID: " + data.request_ID },
                      title:
                        "Changes were made to a request type: " +
                        data.request_Type,
                      body: "Please check your picked up requests!",
                    }),
                  });

                  props.navigation.navigate({ routeName: "ManageR" });
                });
            }
          });
        });
  } catch (error) {
    console.log("Request status was not edited");
    console.log(error.toString());
  }
};

export default editRequest;
