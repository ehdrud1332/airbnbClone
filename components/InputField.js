import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import colors from '../color';


const InputField = ({labelText, labelTextSize, labelColor, textColor, borderBottomColor, inputType}) => {

    const color = labelColor || colors.white;
    const fontSize = labelTextSize || 14;
    const inputColor = textColor || colors.white;
    const borderBottom = borderBottomColor || 'transparent';

    return (
        <View style={[{marginBottom: 30}, styles.wrapper]}>
            <Text style={[{color, fontSize}, styles.label]}>{labelText}</Text>
            <TextInput
                style={[
                    {color: inputColor, borderBottomColor: borderBottom},
                    styles.inputFiled
                ]}
                autoCapitalize='none'
                inputType='email'
            />
        </View>
    );
};

export default InputField;

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