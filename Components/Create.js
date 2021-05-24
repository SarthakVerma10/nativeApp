import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

export default function Create({ navigation }) {
    return (
        <View>
            <Text
            style={styles.title}>
                Create an account
            </Text>
            <Text
            style={styles.subtitle}>
                Invest and double your income now
            </Text>
            <View
                style={styles.form_container}    
            >
                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                />
                <TouchableOpacity
                style={styles.button}>
                    <Text
                    style={styles.buttonText}
                    >
                    Create account
                    </Text>
                </TouchableOpacity>
                <Text
                style={styles.linkText}
                onPress={() => navigation.navigate('Home')}>
                Already have an account?
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: '34px',
        fontWeight: '700'
    },
    subtitle: {
        textAlign: 'center',
        fontSize: '17px',
        fontWeight: '600',
        color: '#4F4F4F'
    },
    form_container: {
        margin: 'auto',
        marginTop: '87px'
    },
    input: {
        borderWidth: 1,
        width: '343px',
        height: '60px',
        border: '0.5px solid #828282',
        borderRadius: '20px',
        padding: 20,
        marginBottom: '12px'
    },
    button: {
        marginTop: 30,
        width: '100%',
        padding: 20,
        backgroundColor: '#31A062',
        textAlign: 'center',
        borderRadius: 20
    },
    buttonText: {
        color: 'white',
        fontWeight: '600'
    },
    linkText: {
        color: '#31A062',
        textAlign: 'center',
        fontWeight: '600',
        marginTop: '17px'
      }
})

