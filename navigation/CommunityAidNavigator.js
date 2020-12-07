import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
//import { createBottomTabNavigator } from 'react-navigation-tabs';
//import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from '../screens/HomeScreen';
import MARScreen from '../screens/MARScreen';
import PARScreen from '../screens/PARScreen';
import ManageARScreen from '../screens/ManageARScreen';
import AppAssistanceScreen from '../screens/AppAssistanceScreen';
import MapScreen from '../screens/MapScreen';

const NavigatorCA = createStackNavigator({
    Home: HomeScreen,
    Map: MapScreen,
    MAR: MARScreen,
    PAR: PARScreen,
    ManageAR: ManageARScreen,
    App: AppAssistanceScreen,
    Map: MapScreen
});

export default createAppContainer(NavigatorCA);