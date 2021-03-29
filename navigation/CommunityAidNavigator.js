/*
 *  ClassName: CommunityAidNavigator.js
 *
 *  Date: 28/03/2021
 *
 * @author Piyush Sharma, X17342356
 *
 * @reference https://reactnative.dev/docs/activityindicator
 * @reference https://www.udemy.com/course/react-native-the-practical-guide/
 *
 */

//Imports
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IndexScreen from "../screens/IndexScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import HomeScreen from "../screens/HomeScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import AssistanceRequestsScreen from "../screens/AssistanceRequestsScreen";
import ManageARScreen from "../screens/ManageARScreen";
import AppAssistanceScreen from "../screens/AppAssistanceScreen";
import MapScreen from "../screens/MapScreen";
import SettingScreen from "../screens/SettingScreen";
import MakeAssistanceRequestScreen from "../screens/MakeAssistanceRequestScreen";
import PickUpAssistanceRequestScreen from "../screens/PickUpAssistanceRequestScreen";
import ManageVolunteerRequestScreen from "../screens/ManageVolunteerRequestScreen";
import ManageRequestScreens from "../screens/ManageRequestScreens";
import EditRequestScreen from "../screens/EditRequestScreen";
import MapVideoScreen from "../screens/MapVideoScreen";
import AssistanceVideoScreen from "../screens/AssistanceVideoScreen";
import ManageVideoScreen from "../screens/ManageVideoScreen";
import SettingsVideoScreen from "../screens/SettingsVideoScreen";
import ForgotVideoScreen from "../screens/ForgotVideoScreen";
import AboutUsScreen from "../screens/AboutUsScreen";

//Main Component
const NavigatorCA = createStackNavigator({
  Index: IndexScreen,
  Login: LoginScreen,
  Forgot: ForgotPasswordScreen,
  Signup: SignupScreen,
  Home: HomeScreen,
  Map: MapScreen,
  AssistanceRequest: AssistanceRequestsScreen,
  ManageAR: ManageARScreen,
  App: AppAssistanceScreen,
  setting: SettingScreen,
  MakeR: MakeAssistanceRequestScreen,
  PickUpR: PickUpAssistanceRequestScreen,
  ManageVR: ManageVolunteerRequestScreen,
  ManageR: ManageRequestScreens,
  EditR: EditRequestScreen,
  MapV: MapVideoScreen,
  AssistanceV: AssistanceVideoScreen,
  ManageV: ManageVideoScreen,
  SettingV: SettingsVideoScreen,
  ForgotV: ForgotVideoScreen,
  About: AboutUsScreen,
});

export default createAppContainer(NavigatorCA);
