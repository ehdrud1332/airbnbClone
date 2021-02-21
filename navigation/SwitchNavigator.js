import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from '../screens/Login';
import Signup from "../screens/Signup";
import ProfileScreen from "../screens/ProfileScreen";
import ForgotPassword from "../components/ForgetPassword";

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
    }
},
    {
        initialRouteName: 'ForgotPassword'
    })

export default createAppContainer(SwitchNavigator);