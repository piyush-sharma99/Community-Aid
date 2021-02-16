const makeRequest = (user, requestID, db, date, status, address, area, requestType, requestDescription, longitude, latitude) =>{

    try{
      //reading user values
      db.collection("users").doc(user.uid).get().then(snapshot => {
        const userInfo = snapshot.data();

        if(date == '' || date == ' '){

          alert('One or many fields are empty!')
          return;

        }
        else if(address == '' || address == ' '){
          alert('One or many fields are empty!')
          return;

        }
        else if(area == '' || area == ' '){
          alert('One or many fields are empty!')
          return;

        }
        else if(requestType == '' || requestType == ' '){
          alert('One or many fields are empty!')
          return;

        }else if(requestDescription == '' || requestDescription == ' '){
          alert('One or many fields are empty!')
          return;

        } else{

        //uploading data to firestore
        db.collection("Assistance Request").doc().set({
          date: date,
          uid: user.uid,
          name: userInfo.name,
          number: userInfo.number,
          request_ID: requestID,
          email: userInfo.email,
          status: status,
          address: address,
          area: area,
          request_Type: requestType,
          longitude:longitude,
          latitude:latitude,
          request_Description: requestDescription,
          vid: ""


        }),

        alert('Request was successfully created!'),
        
        console.log('Data uploaded');

      } 
  })

  

    }
    catch(error){
      console.log('Data Not uploaded');
      console.log(error.toString())
    }

  };
  export default makeRequest;