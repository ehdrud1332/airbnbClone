import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Ionicons} from '@expo/vector-icons';
import colors from '../../color';

import HomeScreen from "../../screens/HomeScreen";

const HomeStack = createStackNavigator();

const DrawerStack = ({navigation}) => (
    <HomeStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: colors.green01
            },
            headerTintColor: "#333333",
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#ffffff'
            }
        }}
    >
        <HomeStack.Screen
            name='Home'
            component={HomeScreen}
            options={{
                title : 'Home',
                headerLeft: () => (
                    <TouchableOpacity
                        style={{marginLeft: 20}}
                        onPress={() => navigation.openDrawer()}
                    >
                        <Ionicons name='md-menu' size={30}/>
                    </TouchableOpacity>
                )
            }}
        />
    </HomeStack.Navigator>
)

export default DrawerStack;
