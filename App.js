import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';

import ComponentsScreen from "./src/screens/ComponentsScreen";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    components: ComponentsScreen
  },
  {
    initialRouteName: 'components',
    defaultNavigationOptions: {
      title: 'OklahomaPancakes',
    },
  }
);

export default createAppContainer(navigator);
