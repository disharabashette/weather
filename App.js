import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from './Screen/HomeScreen';
import DetailScreen from './Screen/DetailScreen';
import SplashScreen from './Screen/SplashScreen';
const RootStack = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        header: null,
        tabBarVisible: false,
      }
    },
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
        tabBarVisible: false,
      }
    },
    DetailScreen: {
      screen: DetailScreen,
      navigationOptions: {
        header: null,
        tabBarVisible: false,
      }
    },
  },
  {
    initialRouteName: 'SplashScreen',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
