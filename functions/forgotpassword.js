/*
 *  ClassName: forgotpassword.js
 *
 *  Date: 28/03/2021
 *
 * @author Piyush Sharma, X17342356
 *
 * @reference https://reactnative.dev/docs/activityindicator
 * @reference https://firebase.google.com/docs
 * @reference https://docs.expo.io/
 */

//This function recieves inputs from ForgotPasswordScreen.js and  uses them to send a change password email to the users account
const forgotPassword = (fb, email, props) => {
  try {
    fb.sendPasswordResetEmail(email)
      .then(function () {
        alert("Check your email"),
          props.navigation.navigate({ routeName: "Login" });
      })
      .catch(function (error) {
        console.log(error), alert(error);
      });
  } catch (error) {
    console.log(error.toString()),
      alert("Oops! Error occured Email not sent! :{");
  }
};

export default forgotPassword;
