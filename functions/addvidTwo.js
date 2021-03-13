const addVidTwo = (item, db, user) => {
  
  const addRequest = item.request_ID;

  if (addRequest == '' || addRequest == ' '){
    alert('issue has occured :(')
              return;

  } else{

    try{
        db.collection('Assistance Request').where('request_ID', '==', addRequest).get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            const data = doc.data();
            const docID = doc.id;
            console.log(docID);
            console.log(data);
            
            if (user.uid == data.uid){
              alert('This ticket was created by you!')
              return;
            } else {

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
            }

          });

        })

    }
    catch(error){
        console.log(error.toString()),
        alert('OOPs something went wrong :(')
      }
    }


}

export default addVidTwo;
