const logInUser = (fb, email, password, props) => {
    try{
      
        fb.signInWithEmailAndPassword(email, password).then(function (user) {
            console.log(user),
            props.navigation.navigate({routeName: 'Home'});
        });

    }  
    catch(error){
        console.log(error.toString()),
        alert("Oops! Something went wrong!")
    }
}

export default logInUser;