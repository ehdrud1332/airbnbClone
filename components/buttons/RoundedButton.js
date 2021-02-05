import React from 'react';
import propTypes from 'prop-types'
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../../color';

const RoundedButton = ({text, backgroundColor, icon}) => {


    return (
        <TouchableOpacity style={[{backgroundColor}, styles.wrapper]}>
            <View style={styles.ButtonTextWrapper}>
                {icon}
                <Text style={styles.buttonText}>{text}</Text>
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
        alignItems: "center"
    },
    buttonText: {
        fontSize: 16,
        width: "100%",
        textAlign: "center"
    },
    ButtonTextWrapper: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
});
