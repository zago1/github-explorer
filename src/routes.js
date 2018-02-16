import React from 'react';
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
} from 'react-navigation';

import { colors } from 'styles';

import Header from 'components/Header';

import Welcome from 'pages/Welcome';
import Repositories from 'pages/Repositories';
import Organizations from 'pages/Organizations';


const createRootNavigator = (userExists = false) => StackNavigator({
  Welcome: {
    screen: Welcome,
  },
  User: {
    screen: TabNavigator({
      Repositories: {
        screen: Repositories,
      },
      Organizations: {
        screen: Organizations,
      },
    }, {
      tabBarPosition: 'bottom',
      tabBarComponent: TabBarBottom,
      tabBarOptions: {
        showLabel: false,
        activeTintColor: colors.white,
        inactiveTintColor: colors.inactive,
        style: {
          backgroundColor: colors.primary,
          height: 54,
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    }),
  },
},
{
  initialRouteName: userExists ? 'User' : 'Welcome',
  navigationOptions: {
    header: props => <Header {...props} />,
  },
});

export default createRootNavigator;
