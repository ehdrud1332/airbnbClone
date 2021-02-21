import React, {useRef, useEffect} from 'react';
import {Animated, Text, View, StyleSheet} from 'react-native';

const FadeInView = (props) => {
    // Initial value for opacity : 0
    const fadeAnimation = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(
            fadeAnimation,
            {
                toValue: 1,
                duration: 400,
                useNativeDriver: true
            }
        ).start();
    }, [fadeAnimation])

    return (
        <Animated.View style={[{opacity: fadeAnimation}, styles.checkmarkWrapper]}>
            {props.children}
        </Animated.View>
    );
};

export default FadeInView;

const styles = StyleSheet.create({
    checkmarkWrapper: {
        position: 'absolute',
        right: 0,
        bottom: 12
    }
})