import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SwitchNavigator from "./navigation/SwitchNavigator";
import DrawerScreen from "./screens/DrawerScreen";
import SplashScreen from "react-native-splash-screen";

const Drawer = createDrawerNavigator();

const App = () => {

    // useEffect(() => {
    //     SplashScreen.hide()
    // }, [])


    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerScreen {...props}/>}>
                <Drawer.Screen name='HomeDrawer' component={SwitchNavigator}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
