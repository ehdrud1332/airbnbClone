import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../../color';
import {FontAwesome} from "@expo/vector-icons";
import * as Google from 'expo-google-app-auth';

const RoundedButton = () => {

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
        <TouchableOpacity style={[{}, styles.wrapper]} onPress={() => signInAsync()}>
            <View style={styles.ButtonTextWrapper}>
                <FontAwesome name='google' size={20} style={styles.facebookIcon}/>
                <Text style={styles.buttonText}>Connect to facebook</Text>
            </View>
        </TouchableOpacity>
    );
};

export default RoundedButton;


const styles = StyleSheet.create({
    wrapper: {
        padding: 15,
        display: "flex",
        borderRadius: 40,
        borderWidth: 1,
        borderColor: colors.white,
        marginBottom: 15,
        alignItems: "center",
        backgroundColor: colors.white

    },
    buttonText: {
        fontSize: 16,
        width: "100%",
        textAlign: "center",
        fontWeight: '600'
    },
    ButtonTextWrapper: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    facebookIcon: {
        color: colors.green01,
        position: "relative",
        left: 20,
        zIndex: 8
    },
});
