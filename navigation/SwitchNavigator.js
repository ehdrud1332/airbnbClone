import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from '../screens/Login';
import Signup from "../screens/Signup";
import ProfileScreen from "../screens/ProfileScreen";

const SwitchNavigator = createSwitchNavigator({
    Login: {
        screen: Login
    },
    Signup: {
        screen: Signup
    },
    ProfileScreen: {
        screen: ProfileScreen
    }
},
    {
        initialRouteName: 'Login'
    })

export default createAppContainer(SwitchNavigator);