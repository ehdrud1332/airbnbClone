import React, {useState} from 'react';
import Firebase from '../config/Firebase';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView} from 'react-native';
import {Feather} from '@expo/vector-icons';
import colors from "../color";


const Login = ({navigation}) => {

    const [result, setResult] = useState({
        name: "",
        email: "",
        password: "",
        check_textInputChange: false
    })

    const textInputChange = (val) => {
        if(val.length !== 0) {
            setResult({
                ...result,
                email: val,
                check_textInputChange: true
            })
        } else {
            setResult({
                ...result,
                email: val,
                check_textInputChange: false
            })
        }
    }

    const handlePasswordChange = (val) => {
        setResult({
            ...result,
            password: val
        })
    }

    const handleSignup = () => {

        Firebase.auth()
            .signInWithEmailAndPassword(result.email, result.password)
            .then(() => navigation.navigate('ProfileScreen'))
            .catch(error => console.log(error))

    }

    return (
        <KeyboardAvoidingView style={styles.wrapper} behavir='padding'>
            <View style={styles.scrollViewWrapper}>
                <ScrollView style={styles.avoidView}>
                    <Text style={styles.loginHeader}>Login</Text>
                    <View style={[{marginBottom: 30}, styles.wrapper01]}>
                        <Text style={[{color: 'white'}, styles.label]}>EMAIL ADDRESS</Text>
                        <TextInput
                            style={[{color: 'white', borderBottomColor: 'white'}, styles.inputFiled]}
                            value={result.email}
                            onChangeText={(val) => textInputChange(val)}
                            autoCapitalize='none'
                        />
                    </View>
                    <View style={[{marginBottom: 30}, styles.wrapper01]}>
                        <Text style={[{color: 'white'}, styles.label]}>PASSWORD</Text>
                        <TextInput
                            style={[{color: 'white', borderBottomColor: 'white'}, styles.inputFiled]}
                            value={result.password}
                            onChangeText={(val) => handlePasswordChange(val)}
                            autoCapitalize='none'
                            secureTextEntry={true}
                        />
                    </View>
                </ScrollView>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={[{opacity: 0.6}, styles.button]} onPress={handleSignup}>
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

export default Login ;

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
    },
    wrapper01: {
        display: 'flex'
    },
    label: { fontWeight: "700", marginBottom: 10 },
    inputFiled: {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5
    },
    showButton: {
        position: "absolute",
        right: 0
    },
    showButtonText: {
        color: colors.white,
        fontWeight: "700"
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
    icon: {
        marginRight: -2,
        marginTop: -2
    }
})