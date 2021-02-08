import React, {useState} from 'react';
import Firebase from '../config/Firebase';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const Signup = () => {

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
            .createUserWithEmailAndPassword(result.email, result.password)
            .then(() => console.log("123123123"))
            .catch(error => console.log(error))

    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputBox}
                value={result.email}
                onChangeText={(val) => textInputChange(val)}
                placeholder="Email"
                autoCapitalize='none'
            />
            <TextInput
                style={styles.inputBox}
                value={result.password}
                onChangeText={(val) => handlePasswordChange(val)}
                placeholder='password'
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={handleSignup}>
                <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Signup ;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#F6820D',
        borderColor: '#F6820D',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonSignup: {
        fontSize: 12
    }
})
