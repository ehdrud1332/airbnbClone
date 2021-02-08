import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';
import colors from '../color';



const PwInput = ({labelText, labelTextSize, labelColor, textColor, borderBottomColor, inputType}) => {

    const [data, setData] = useState({
        password: "",
        secureTextEntry: true

    })

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const color = labelColor || colors.white;
    const fontSize = labelTextSize || 14;
    const inputColor = textColor || colors.white;
    const borderBottom = borderBottomColor || 'transparent';


    return (
        <View style={[{marginBottom: 30}, styles.wrapper]}>
            <Text style={[{color, fontSize}, styles.label]}>{labelText}</Text>
            <TouchableOpacity style={styles.showButton} onPress={updateSecureTextEntry}>
                {data.secureTextEntry ? (
                    <Feather
                        name='eye-off'
                        color={'black'}
                        size={20}
                    />
                ) : (
                    <Feather
                        name='eye'
                        color={'#fff'}
                        size={20}
                    />
                )}
            </TouchableOpacity>
            <TextInput
                autoCorrect={false}
                secureTextEntry={data.secureTextEntry ? true : false}
                onChangeText={(val) => handlePasswordChange(val)}
                style={[
                    {color: inputColor, borderBottomColor: borderBottom},
                    styles.inputFiled
                ]}
                inputType='password'
            />

        </View>
    );
};

export default PwInput;

const styles = StyleSheet.create({
    wrapper: {
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
    }
})