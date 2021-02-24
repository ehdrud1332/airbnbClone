import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {createAppContainer} from "react-navigation";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createStackNavigator} from "@react-navigation/stack";

const HomeScreen = ({navigation}) => {


    return (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Button title="Login with Google" />
        </View>
    );
};

export default HomeScreen;
