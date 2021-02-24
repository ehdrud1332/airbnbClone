import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";

import Login from '../screens/Login';
import Signup from "../screens/Signup";
import ProfileScreen from "../screens/ProfileScreen";
import ForgotPassword from "../components/ForgetPassword";
import LoggedOut from "../screens/LoggedOut";
import DrawerStack from "./stack/DrawerStack";

const RootStack = createStackNavigator();

const SwitchNavigator = () => (
    <RootStack.Navigator
        headerMode='none'
    >
        <RootStack.Screen name='DrawerStack' component={DrawerStack} />
        <RootStack.Screen name='Login' component={Login} />
        <RootStack.Screen name='Signup' component={Signup} />
        <RootStack.Screen name='ProfileScreen' component={ProfileScreen} />
        <RootStack.Screen name='ForgotPassword' component={ForgotPassword} />
        <RootStack.Screen name='LoggedOut' component={LoggedOut} />

    </RootStack.Navigator>
)

export default SwitchNavigator

// const SwitchNavigator = createSwitchNavigator({
//     Login: {
//         screen: Login
//     },
//     Signup: {
//         screen: Signup
//     },
//     ProfileScreen: {
//         screen: ProfileScreen
//     },
//     ForgotPassword: {
//         screen: ForgotPassword
//     },
//     LoggedOut: {
//         screen: LoggedOut
//     },
//     HomeScreen: {
//         screen: HomeScreen
//     }
// },
//     {
//         initialRouteName: 'ProfileScreen',
//         headerMode: 'none'
//     })
//
// export default createAppContainer(SwitchNavigator);