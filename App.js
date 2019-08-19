import { createStackNavigator, createAppContainer } from 'react-navigation';

// Import Screens
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Restaurant Search',
    },
  },
);

export default createAppContainer(navigator);
