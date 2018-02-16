import 'config/ReactotronConfig';

import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import createRootNavigator from 'routes';

export default class App extends Component {
  state = {
    userExistis: false,
    userChecked: false,
  }

  componentWillMount() {
    this.checkUser().then((response) => {
      this.setState({ userExistis: response, userChecked: true });
    });
  }

  checkUser = async () => {
    const user = await AsyncStorage.getItem('@github_explorer:username');

    return user !== null;
  }

  render() {
    const { userChecked, userExistis } = this.state;

    const Layout = createRootNavigator(userExistis);

    if (!userChecked) return null;

    return (
      <Layout />
    );
  }
}
