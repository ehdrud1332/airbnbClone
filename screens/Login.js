import React, {useState} from 'react';
import Firebase from '../config/Firebase';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView} from 'react-native';
import {Feather, FontAwesome} from '@expo/vector-icons';
import colors from "../color";
import Notification from "../navigation/Notification";
import Loader from "../components/Loader";
import FadeInView from "../components/FadeInView";


const Login = ({navigation}) => {

    const [result, setResult] = useState({
        name: "",
        email: "",
        password: "",
        check_textInputChange: false,
        formValid: true,
        error: "",
        loadingVisible: false,
        check_markDown: 0,
        secureTextEntry: true
    })

    // const showNotification = result.formValid ? false : true

    const handlePasswordChange = (val) => {
        setResult({
            ...result,
            password: val
        })
    }

    const textInputChange = (val) => {
        if(val.length !== 0) {
            setResult({
                ...result,
                email: val,
                check_textInputChange: true,
            })
        } else {
            setResult({
                ...result,
                email: val,
                check_textInputChange: false,
            })
        }
    }




    const handleSignup = () => {

        setResult({loadingVisible: true})

        Firebase.auth()
            .signInWithEmailAndPassword(result.email, result.password)
            .then(() => navigation.navigate('ProfileScreen'))
            .catch(error =>
                setResult({
                    error: console.log("아이디 또는 비밀번호가 일치하지 않습니다."),
                    loadingVisible: false
                })
            );

    }

    return (
        <KeyboardAvoidingView style={styles.wrapper} behavir='padding'>
            <View style={styles.scrollViewWrapper}>
                <ScrollView style={styles.avoidView}>
                    <Text style={styles.loginHeader}>Login</Text>
                    <View style={[{marginBottom: 30}, styles.wrapper01]}>
                        <Text style={[{color: 'white'}, styles.label]}>EMAIL ADDRESS</Text>
                        {result.check_textInputChange ? (
                            <FadeInView>
                                <FontAwesome
                                    name='check'
                                    color={colors.white}
                                    size={20}
                                />
                            </FadeInView>
                        ) : (null)}
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
            {/*나중에 수정요망, error notification*/}
            {/*<View>*/}
            {/*    <Notification*/}
            {/*        showNotification={showNotification}*/}
            {/*        handleCloseNotification={handleCloseNotification}*/}
            {/*        title="Error"*/}
            {/*        message="Those credentials don't look right please try again"*/}
            {/*    />*/}
            {/*</View>*/}
            <Loader
                modalVisible={result.loadingVisible}
                animationType="fade"
            />
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
    },
    checkmarkWrapper: {
        position: 'absolute',
        right: 0,
        bottom: 12
    }
})