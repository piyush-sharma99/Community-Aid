import { Alert } from "react-native";

const deleteRequest = (item, db) => {
  const request = item.request_ID;

  if (request == "" || request == " ") {
    alert("request field was left empty!");
    return;
  } else {
    Alert.alert(
      "Delete request",
      "Are you sure you want to delete this request",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "No",
        },
        {
          text: "Yes",
          onPress: () => {
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
                      uid: "request Deleted by user",
                      vid: "",
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
                              title: "Request picked up was deleted",
                              body:
                                "Request Type: " +
                                data.request_Type +
                                "\r\n" +
                                "Request ID: " +
                                data.request_ID,
                            }),
                          });
                        });
                  });
                });
            } catch (error) {
              console.log("Request was not deleted");
              console.log(error.toString());
            }
          },
        },
      ],
      { cancelable: false }
    );
  }
};

export default deleteRequest;
