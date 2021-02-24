import React from 'react';
import {View, Text, Image, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import colors from '../color';

const RequestSendNotification = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.content}>
                <Image style={styles.notificaion_logo} source={require('../assets/NotificationIcon.png')}/>
                <Text style={styles.title}> Turn on notification </Text>
                <Text style={styles.description}>
                    We can let you know when someone message you,
                    or notify you about other important account activity
                </Text>
                <TouchableOpacity style={styles.notifyButton}>
                    <Text style={styles.buttonText}>Yes, notify me</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.skipButton}>
                    <Text style={styles.buttonText01}>Skip</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RequestSendNotification;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        marginTop: 80,
        paddingLeft: 20,
        paddingRight: 20
    },
    notificaion_logo: {
        width:70,
        height:70
    },
    title: {
        marginTop: 30,
        fontSize: Platform.OS == 'ios' ? 35 : 32,
        color: colors.black,
        fontWeight: '600',
    },
    description: {
        fontSize: Platform.OS == 'ios' ? 18 : 18,
        paddingRight: 30,
        marginTop: 15,
        lineHeight: 22,
    },
    notifyButton: {
        backgroundColor: colors.green01,
        width: Platform.OS == "ios" ? 160 : 160,
        height: Platform.OS == "ios" ? 50 : 50,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 3,
        marginTop: Platform.OS == "ios" ? 30 : 30
    },
    buttonText: {
        color: colors.white,
        fontSize: Platform.OS == "ios" ? 18 : 18,
        fontWeight: "600",
        alignSelf: "center",
    },
    skipButton: {
        color: colors.green01,
        borderColor: colors.green01,
        width: 100,
        borderWidth: 2,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 3,
        marginTop: 15
    },
    buttonText01: {
        color: colors.green01,
        fontSize: 18,
        fontWeight: '600',
        alignSelf: 'center'
    }
});