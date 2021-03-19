const editStatus = (db, item, status) => {
  const request = item.request_ID;

  if (status == "" || status == " ") {
    alert("Please fill in all of the fields!");
    return;
  } else {
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
              status: status,
            }),
              alert("Request status updated successfully!"),
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
                      title:
                        "Status was updated for request Type: " +
                        data.request_Type,
                      body:
                        "Status was: " +
                        data.status +
                        "\r\n" +
                        "Status updated to: " +
                        status,
                    }),
                  });
                });
          });
        });
    } catch (error) {
      console.log("Request status was not edited");
      console.log(error.toString());
    }
  }
};

export default editStatus;
