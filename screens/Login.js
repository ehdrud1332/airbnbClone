import React from 'react';
import {View, Text, ScrollView, StyleSheet, KeyboardAvoidingView} from 'react-native';
import colors from '../color';
import InputField from "../components/InputField";
import NextArrowButton from "../components/buttons/NextArrowButton";
import PwInput from "../components/PwInput";

const Login = () => {
    return (
        <KeyboardAvoidingView style={styles.wrapper} behavior='padding'>
            <View style={styles.scrollViewWrapper}>
                <ScrollView style={styles.avoidView}>
                    <Text style={styles.loginHeader}>Login</Text>
                    <InputField
                        labelText="EMAIL ADDRESS"
                        labelTextSize={14}
                        labelColor={colors.white}
                        textColor={colors.white}
                        borderBottomColor={colors.white}
                        inputType='email'
                    />
                    <PwInput
                        labelText="PASSWORD"
                        labelTextSize={14}
                        labelColor={colors.white}
                        textColor={colors.white}
                        borderBottomColor={colors.white}
                        inputType='password'

                    />
                </ScrollView>
                <NextArrowButton />
            </View>
        </KeyboardAvoidingView>
    );
};

export default Login;

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flex: 1,
        backgroundColor: colors.green01
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1
    },
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
    }
});