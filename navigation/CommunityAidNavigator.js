import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
//import { createBottomTabNavigator } from 'react-navigation-tabs';
//import { createDrawerNavigator } from 'react-navigation-drawer';
import IndexScreen from '../screens/IndexScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import AssistanceRequestsScreen from '../screens/AssistanceRequestsScreen';
import ManageARScreen from '../screens/ManageARScreen';
import AppAssistanceScreen from '../screens/AppAssistanceScreen';
import MapScreen from '../screens/MapScreen';
import SettingScreen from '../screens/SettingScreen';
import MakeAssistanceRequestScreen from '../screens/MakeAssistanceRequestScreen';
import PickUpAssistanceRequestScreen from '../screens/PickUpAssistanceRequestScreen';
import ManageVolunteerRequestScreen from '../screens/ManageVolunteerRequestScreen';
import ManageRequestScreens from '../screens/ManageRequestScreens';
import EditRequestScreen from '../screens/EditRequestScreen';
import MapVideoScreen from '../screens/videoScreens/MapVideoScreen'
import AssistanceVideoScreen from '../screens/videoScreens/AssistanceVideoScreen'
import ManageVideoScreen from '../screens/videoScreens/ManageVideoScreen'
import SettingsVideoScreen from '../screens/videoScreens/SettingsVideoScreen'
import ForgotVideoScreen from '../screens/videoScreens/ForgotVideoScreen'



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
    ForgotV: ForgotVideoScreen



});



export default createAppContainer(NavigatorCA);

//Navigation Syntax
//props.navigation.navigate({routeName: 'SomeIdentifier'});