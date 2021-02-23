import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from '../screens/Login';
import Signup from "../screens/Signup";
import ProfileScreen from "../screens/ProfileScreen";
import ForgotPassword from "../components/ForgetPassword";
import LoggedOut from "../screens/LoggedOut";
import HomeScreen from "../screens/HomeScreen";

const SwitchNavigator = createSwitchNavigator({
    Login: {
        screen: Login
    },
    Signup: {
        screen: Signup
    },
    ProfileScreen: {
        screen: ProfileScreen
    },
    ForgotPassword: {
        screen: ForgotPassword
    },
    LoggedOut: {
        screen: LoggedOut
    },
    HomeScreen: {
        screen: HomeScreen
    }
},
    {
        initialRouteName: 'LoggedOut',
        headerMode: 'none'
    })

export default createAppContainer(SwitchNavigator);