import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile168089Navigator from '../features/UserProfile168089/navigator';
import Tutorial168088Navigator from '../features/Tutorial168088/navigator';
import NotificationList168060Navigator from '../features/NotificationList168060/navigator';
import Settings168059Navigator from '../features/Settings168059/navigator';
import Settings168051Navigator from '../features/Settings168051/navigator';
import UserProfile168049Navigator from '../features/UserProfile168049/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile168089: { screen: UserProfile168089Navigator },
Tutorial168088: { screen: Tutorial168088Navigator },
NotificationList168060: { screen: NotificationList168060Navigator },
Settings168059: { screen: Settings168059Navigator },
Settings168051: { screen: Settings168051Navigator },
UserProfile168049: { screen: UserProfile168049Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
