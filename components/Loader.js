import React from 'react';
import {View, Image, Modal, StyleSheet, Text} from 'react-native';
import colors from '../color';

const Loader = ({animationType, modalVisible}) => {
    return (
        <Modal animationType={animationType} transparent={true} visible={modalVisible}>
            <View style={styles.wrapper}>
                <View style={styles.loaderContainer}>
                    <Image style={styles.loaderImage} source={require('../assets/loading.gif')}/>
                </View>
            </View>
        </Modal>
    );
};

export default Loader;

const styles = StyleSheet.create({
    wrapper: {
        zIndex: 9,
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0
    },
    loaderContainer: {
        width: 90,
        height: 90,
        // backgroundColor: colors.white,
        borderRadius: 15,
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginLeft: -45,
        marginRight: -45
    },
    loaderImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        position: 'relative',
        left: '50%',
        marginLeft: -10,
        top: '50%',
        marginTop: -35,
    },
})
