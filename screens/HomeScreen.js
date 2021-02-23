import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import * as Google from 'expo-google-app-auth';

const HomeScreen = ({navigation}) => {

    const signInAsync = async() => {
        console.log("HomeScreen.js 6 | Logged In")

        try {
            const {type, user} = await Google.logInAsync({
                iosClientId: '247140277869-cj2q2ndjvn71v605ffprmfeurdeqh13r.apps.googleusercontent.com'
            });

            if (type === "success") {
                console.log("LoginScreen.js 17 | success, navigation to profile" );
                navigation.navigate("ProfileScreen", {user})
            }
        } catch (error) {
            console.log("LoginScreen.ks 19 | error with login", error)
        }
    }

    return (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Button title="Login with Google" onPress={() => signInAsync()}/>
        </View>
    );
};

export default HomeScreen;
