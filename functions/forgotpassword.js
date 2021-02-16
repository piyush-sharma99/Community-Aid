const forgotPassword = (fb, email, props) => {
    try{
      
        fb.sendPasswordResetEmail(
            email)
            .then(function() {
              alert('Check your email'),
              props.navigation.navigate({routeName: 'Login'});
            })
            .catch(function(error) {
              console.log(error),
              alert(error)
            });

    }  
    catch(error){
        console.log(error.toString()),
              alert('Oops! Error occured Email not sent! :{')
    }
}

export default forgotPassword;