import React, {useEffect} from 'react';
import * as Expo from 'expo';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import firebase from "firebase";
import {FontAwesome} from '@expo/vector-icons';
import SplashScreen from 'react-native-splash-screen';
import colors from '../color';
import RoundedButton from "../components/buttons/RoundedButton";


export default function LoggedOut ({navigation}) {

    return (
        <View style={styles.wrapper}>
            <View style={styles.welcomeWrapper}>
                <Image
                    style={styles.logo}
                    source={require('../assets/airbnbWhiteLogo.png')}
                />
                <Text style={styles.welcomeText}>
                    Welcome to Airbnb Clone with React native
                </Text>
                <RoundedButton
                />
                <TouchableOpacity style={[styles.ButtonWrapper]} onPress={() => navigation.navigate("Signup")}>
                <View style={styles.ButtonTextWrapper}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.moreOptionsButton}
                >
                    <Text style={styles.moreOptionsButtonText}>More options</Text>
                </TouchableOpacity>
                <View style={styles.termsAndConditions}>
                    <Text style={styles.termsText}>
                        By tapping Continue, Create Account or More options I agree to Airbnb's
                        Terms of Service, Payments Terms of Service, Privacy Policy, and Nondiscrimination Policy
                    </Text>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: "flex",
        backgroundColor: colors.green01
    },
    welcomeWrapper: {
        flex: 1,
        display: "flex",
        marginTop: 30,
        padding: 20
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 50,
        marginBottom: 40
    },
    welcomeText: {
        fontSize: 30,
        color: colors.white,
        fontWeight: "300",
        marginBottom: 40
    },
    moreOptionsButton: {
        marginTop: 10,
    },
    moreOptionsButtonText: {
        color: colors.white,
        fontSize: 16,
    },
    termsAndConditions: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 30,
    },
    termsText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '600',
    },
    linkButton: {
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
    },
    ButtonWrapper: {
        padding: 15,
        display: "flex",
        borderRadius: 40,
        borderWidth: 1,
        borderColor: colors.white,
        marginBottom: 15,
        alignItems: "center"
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
});