import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors'

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View syle={styles.closeIcon}></View>
            <View syle={styles.deleteIcon}></View>
            <Image
            resizeMode= "contain" 
            style={styles.image} 
            source={require('../assets/chair.jpeg')}
            />
        </View>
    );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 40,
        left: 30,
    },
    container: {
        backgroundColor: "#000",
        flex: 1,
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 40,
        right: 30,
    },
    image: {
        width: "100%",
        height: "90%",
    },
    
})