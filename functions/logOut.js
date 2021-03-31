/*
 *  ClassName: logOut.js
 *
 *  Date: 28/03/2021
 *
 * @author Piyush Sharma, X17342356
 *
 * @reference https://reactnative.dev/docs/activityindicator
 * @reference https://firebase.google.com/docs
 */

//This function takes inputs from HomeScreen and uses them to log out the user
const logOut = (fb, props) => {
  fb.signOut()
    .then(() => {
      props.navigation.navigate({ routeName: "Index" });
    })
    .catch((error) => {
      console.log(error.toString());
    });
};

export default logOut;
