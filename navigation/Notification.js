import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import colors from '../color';

const Notification = ({title, message, handleCloseNotification, showNotification}) => {

    const bottom = showNotification ? -80 : 0;

    const closeNotification = () => {
        handleCloseNotification()
    }

    return (
        <View style={[{marginBottom: bottom},styles.wrapper]}>
            <View style={styles.notificationContent}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.message}>{message}</Text>
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={closeNotification}
                >
                    <FontAwesome name='times' size={20} color={'#676767'}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Notification;

const styles = StyleSheet.create({
    notificationContent : {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    title: {
        color: '#ff590a',
        fontWeight: '700',
        marginRight: 5,
        fontSize: 14,
        marginBottom: 2
    },
    wrapper: {
        backgroundColor: 'white',
        height: 60,
        width: '100%',
        padding: 10,
    },
    message: {
        marginBottom: 2,
        fontSize: 14
    },
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 10
    }
})
