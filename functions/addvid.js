const addVid = (request, db, user) => {

    try{
        db.collection('Assistance Request').where('request_ID', '==', request).get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            const data = doc.data();
            const docID = doc.id;
            console.log(docID);
            console.log(data);

            db.collection("Assistance Request").doc(doc.id).update({
                vid: user.uid,
                status: 'Assigned to a Volunteer'
      
              }),

                db.collection("users").doc(data.uid).get().then(snapshot => {
                    const userInfo = snapshot.data();
                    console.log(userInfo);

                    fetch('https://exp.host/--/api/v2/push/send', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Accept-Encoding': 'gzip, deflate',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        to: userInfo.expoToken,
                        data: { extraData: 'Request ID: ' + data.request_ID},
                        title: 'Request made on ' + data.date + ' was picked up' ,
                        body: 'Please check your assistance request of type:'  + '\r\n' + data.request_Type ,
                    }),
                    });
            
                    
              })

          });
       
       
        })

    }
    catch(error){
        console.log(error.toString())
      }


}

export default addVid;
