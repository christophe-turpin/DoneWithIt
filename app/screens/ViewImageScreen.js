import React from 'react';
import { Image, SafeAreaView, StyleSheet, View, Text } from 'react-native';

import colors from '../config/colors'

function ViewImageScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image
            resizeMode= "contain" 
            style={styles.image} 
            source={require('../assets/chair.jpeg')}
            />
        </SafeAreaView>
    );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
    closeIcon: {
        width: 70,
        height: 70,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 40,
        left: 30,
        borderRadius: 20,
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    deleteIcon: {
        width: 70,
        height: 70,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 40,
        right: 30,
        borderRadius: 20,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    
})