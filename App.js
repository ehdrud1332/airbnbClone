import React from 'react';
import LoggedOut from "./screens/LoggedOut";
import Login from './screens/Login';
import Signup from "./screens/Signup";
import {Text, View} from 'react-native';
import SwitchNavigator from '././navigation/SwitchNavigator';

const App = () => {
    return (
        <SwitchNavigator />
    );
};

export default App;