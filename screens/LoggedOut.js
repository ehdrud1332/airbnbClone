import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import colors from '../color';
import RoundedButton from "../components/buttons/RoundedButton";

const LoggedOut = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.welcomeWrapper}>
                <Image
                    style={styles.logo}
                    source={require('../assets/airbnbWhiteLogo.png')}
                />
                <Text style={styles.welcomeText}>
                    Welcome to Airbnb Clone with React native
                </Text>
                <RoundedButton
                    icon={<FontAwesome name='facebook' size={20} style={styles.facebookIcon}/>}
                    text="Connect to facebook"
                    backgroundColor={colors.white}
                />
                <RoundedButton
                    text="Create Account"
                />
                <TouchableOpacity
                    style={styles.moreOptionsButton}
                >
                    <Text style={styles.moreOptionsButtonText}>More options</Text>
                </TouchableOpacity>
                <View style={styles.termsAndConditions}>
                    <Text style={styles.termsText}>
                        By tapping Continue, Create Account or More options I agree to Airbnb's
                        Terms of Service, Payments Terms of Service, Privacy Policy, and Nondiscrimination Policy
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default LoggedOut;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: "flex",
        backgroundColor: colors.green01
    },
    welcomeWrapper: {
        flex: 1,
        display: "flex",
        marginTop: 30,
        padding: 20
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 50,
        marginBottom: 40
    },
    welcomeText: {
        fontSize: 30,
        color: colors.white,
        fontWeight: "300",
        marginBottom: 40
    },
    facebookIcon: {
        color: colors.green01,
        position: "relative",
        left: 20,
        zIndex: 8
    },
    moreOptionsButton: {
        marginTop: 10,
    },
    moreOptionsButtonText: {
        color: colors.white,
        fontSize: 16,
    },
    termsAndConditions: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 30,
    },
    termsText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '600',
    },
    linkButton: {
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
    },
});