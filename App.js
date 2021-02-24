import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SwitchNavigator from "./navigation/SwitchNavigator";
import DrawerScreen from "./screens/DrawerScreen";

const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerScreen {...props}/>}>
                <Drawer.Screen name='HomeDrawer' component={SwitchNavigator}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
