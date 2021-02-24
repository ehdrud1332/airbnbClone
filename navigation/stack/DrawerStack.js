import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Ionicons} from '@expo/vector-icons';

import HomeScreen from "../../screens/HomeScreen";

const HomeStack = createStackNavigator();

const DrawerStack = ({navigation}) => (
    <HomeStack.Navigator>
        <HomeStack.Screen
            name='Home'
            component={HomeScreen}
            options={{
                title : 'Home',
                headerLeft: () => (
                    <Ionicons.Button
                        name='ios-menu'
                        size={25}
                        backgroundColor='black'
                        onPress={() => navigation.openDrawer()}
                    />
                )
            }}
        />
    </HomeStack.Navigator>
)

export default DrawerStack;
