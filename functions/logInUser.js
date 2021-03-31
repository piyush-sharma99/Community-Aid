/*
 *  ClassName: logInUser.js
 *
 *  Date: 28/03/2021
 *
 * @author Piyush Sharma, X17342356
 *
 * @reference https://reactnative.dev/docs/activityindicator
 * @reference https://firebase.google.com/docs
 * @reference https://docs.expo.io/
 */

//This function takes in inputs sent from LoginScreen.js and uses them to create a user account.
//After login it navigates the user to the HomeScreen.js
const logInUser = (fb, email, password, props) => {
  try {
    fb.signInWithEmailAndPassword(email, password)
      .then(function (user) {
        console.log(user), props.navigation.navigate({ routeName: "Home" });
      })
      .catch(function (error) {
        console.log(error), alert(error);
      });
  } catch (error) {
    console.log(error.toString()), alert("Oops! Something went wrong!");
  }
};

export default logInUser;
