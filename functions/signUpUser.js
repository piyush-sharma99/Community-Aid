const signUpUser = (name, number, email, password, passwordRepeat, fb, props, db) => {
    try{
      if(name == '' ){
      alert(' Name is empty!')
            return;
    }
    else{
      if(number == ''){
        alert('Number Field is empty!')
        return;
    }
    else{
      if(email == ''){
        alert('Email Field is empty!')
        return;
    }
    else{
      if(password == ''){
        alert('Password Field is empty!')
        return;
    }
    else{
      if(password.length<6){
        alert('Please enter a password more than 6 characters!')
            return;
    }
    else{
      if(passwordRepeat == password){

        fb.createUserWithEmailAndPassword(email, password).then(function (user) {
          console.log(user),
          props.navigation.navigate({routeName: 'Home'});
          db.collection("users").doc(user.user.uid).set({
            name: name,
            number: number,
            email: email
          })
  
      });

      }
      else{

        alert('Your passwords do not match!')
        
      }
     
    }
      
    }
      
    }

    }

    }
        
    }  
    catch(error){
        console.log(error.toString())
    }
}
export default signUpUser;