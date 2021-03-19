const reportRequest = (item, db, user) => {
  const reportRequest = item.request_ID;

  if (reportRequest == "" || reportRequest == " ") {
    alert("issue has occured :(");
    return;
  } else {
    try {
      db.collection("Assistance Request")
        .where("request_ID", "==", reportRequest)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            const data = doc.data();
            const docID = doc.id;
            console.log(docID);
            console.log(data);

            db.collection("Assistance Request").doc(doc.id).update({
              status: "Under Review by staff",
            }),
              db.collection("Reported Requests").doc().set({
                date_Created: data.date,
                creater_UID: data.uid,
                creater_Name: data.name,
                creater_Number: data.number,
                request_ID: reportRequest,
                creater_email: data.email,
                status: "Under Review by staff",
                creater_Address: data.address,
                creater_Area: data.area,
                request_Type: data.request_Type,
                longitude: data.longitude,
                latitude: data.latitude,
                request_Description: data.request_Description,
                reported_BY: user.uid,
              });
          });
        });
    } catch (error) {
      console.log(error.toString()), alert("OOPs something went wrong :(");
    }
  }
};

export default reportRequest;
