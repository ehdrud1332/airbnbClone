import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

const DrawerScreen = () => {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView>
                <View>
                    <Text>Test</Text>
                </View>
            </DrawerContentScrollView>
        </View>
    );
};

export default DrawerScreen;
