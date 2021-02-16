const signUpUser = (name, number, email, password, passwordRepeat, fb, props, db) => {
    try{
      if(name == '' || name == ' ' ){
      alert('One or many fields are empty!')
            return;
    }
    else if(number == '' || number.length<10 || number == ' '){
        alert('One or more fields are empty or incorrectly formatted!')
        return;
    }
    else if(email == '' || email == ' '){
        alert('One or many fields are empty!')
        return;
    }
    else if(password == '' || password == ' '){
        alert('One or many fields are empty!')
        return;
    }
    else if(password.length<6 || password == '' || password == ' '){
        alert('Please enter a password more than 6 characters!')
            return;
    }
    else if(passwordRepeat == password){

        fb.createUserWithEmailAndPassword(email, password).then(function (user) {
          console.log(user),
          props.navigation.navigate({routeName: 'Home'});
          db.collection("users").doc(user.user.uid).set({
            name: name,
            number: number,
            email: email
          })
  
      }).catch(function(error) {
        console.log(error),
        alert(error)
      });

      }
      else{

        alert('Your passwords do not match!')
        
      }
     
    }
   
    catch(error){
        console.log(error.toString())
    }
}
export default signUpUser;