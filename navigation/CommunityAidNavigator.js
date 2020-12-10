import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
//import { createBottomTabNavigator } from 'react-navigation-tabs';
//import { createDrawerNavigator } from 'react-navigation-drawer';
import AuthenticationScreen from '../screens/AuthenticationScreen';
import HomeScreen from '../screens/HomeScreen';
import AssistanceRequestsScreen from '../screens/AssistanceRequestsScreen';
import ManageARScreen from '../screens/ManageARScreen';
import AppAssistanceScreen from '../screens/AppAssistanceScreen';
import MapScreen from '../screens/MapScreen';
import SettingScreen from '../screens/SettingScreen';

const NavigatorCA = createStackNavigator({
    Login: AuthenticationScreen,
    Home: HomeScreen,
    Map: MapScreen,
    AssistanceRequest: AssistanceRequestsScreen,
    ManageAR: ManageARScreen,
    App: AppAssistanceScreen,
    setting: SettingScreen
});



export default createAppContainer(NavigatorCA);

//Navigation Syntax
//props.navigation.navigate({routeName: 'SomeIdentifier'});