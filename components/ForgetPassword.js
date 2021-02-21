import React, {useState} from 'react';
import {View, Text, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import colors from '../color';
import NextArrowButton from "./buttons/NextArrowButton";
import FadeInView from "./FadeInView";
import {Feather, FontAwesome} from "@expo/vector-icons";
import firebase from 'firebase';


const ForgotPassword = ({background}) => {

    const [result, setResult] = useState({
        email: "",
        emailAddress : ""
    })

    const handleEmailChange = email => {
        setResult({
            ...result,
            email: email
        })
    }

    const submitEmail = () => {
        firebase
            .auth()
            .sendPasswordResetEmail(result.email)
            .then(function() {
                Alert.alert("email sent success")
            })
            .catch(function(error) {
                Alert.alert("error.message")
            })
    }

    return (
        <KeyboardAvoidingView style={[{backgroundColor: background}, styles.wrapper]} behavior='padding'>
            <View style={styles.scrollViewWrapper}>
                <ScrollView style={styles.avoidView}>
                    <Text style={styles.ForgotPasswordHeading}>
                        Forgot your password?
                    </Text>
                    <Text style={styles.ForgotPasswordSubHeading}>
                        Enter your email to find your account
                    </Text>
                    <View style={[{marginBottom: 30}, styles.wrapper01]}>
                        <Text style={[{color: 'white'}, styles.label]}>EMAIL ADDRESS</Text>

                        <TextInput
                            style={[{color: 'white', borderBottomColor: 'white'}, styles.inputFiled]}
                            value={result.email}
                            onChangeText={email => handleEmailChange(email)}
                            autoCapitalize='none'
                        />
                    </View>
                </ScrollView>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.button} onPress={submitEmail}>
                        <Feather
                            name='arrow-right'
                            color={colors.green01}
                            size={32}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>

            </View>

        </KeyboardAvoidingView>
    );
};

export default ForgotPassword;

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flex: 1,
        backgroundColor: colors.green01
    },
    form: {
        marginTop: 90,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1
    },
    ForgotPasswordHeading: {
        fontSize: 28,
        color: colors.white,
        fontWeight: "300"
    },
    ForgotPasswordSubHeading: {
        color: colors.white,
        fontWeight: "600",
        fontSize: 15
    },
    inputFiled: {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5
    },
    label: { fontWeight: "700", marginBottom: 10 },
    avoidView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex:1
    },
    loginHeader: {
        fontSize: 28,
        color: colors.white,
        fontWeight: "300",
        marginBottom: 40
    },
    wrapper01: {
        display: 'flex',
        marginTop: 100
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1
    },
    buttonWrapper: {
        alignItems: "flex-end",
        right: 20,
        bottom: 20,
        paddingTop: 0
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        width: 60,
        height: 60,
        backgroundColor: colors.white
    },
});