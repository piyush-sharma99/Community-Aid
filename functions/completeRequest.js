const completeRequest = (db, item) => {
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
            status: "Completed by volunteer",
          }),
            db.collection("Completed Requests").doc().set({
              date_Created: data.date,
              creater_UID: data.uid,
              creater_Name: data.name,
              creater_Number: data.number,
              request_ID: request,
              creater_email: data.email,
              status: "Completed by volunteer",
              creater_Address: data.address,
              creater_Area: data.area,
              request_Type: data.request_Type,
              longitude: data.longitude,
              latitude: data.latitude,
              request_Description: data.request_Description,
              Completed_BY: data.vid,
            }),
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
                    title: "Request was completed by a voulnteer",
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
    console.log("Request was not submitted as done");
    console.log(error.toString());
  }
};

export default completeRequest;
