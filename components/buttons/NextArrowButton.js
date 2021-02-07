import React from 'react';
import {Feather} from '@expo/vector-icons'
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import colors from '../../color';

const NextArrowButton = () => {
    return (
        <View style={styles.buttonWrapper}>
            <TouchableOpacity style={[{opacity: 0.6}, styles.button]}>
                <Feather
                    name='arrow-right'
                    color={colors.green01}
                    size={32}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    );
};

export default NextArrowButton;

const styles = StyleSheet.create({
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
});