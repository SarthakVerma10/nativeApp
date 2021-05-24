import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import hero from '../resources/hero.svg';
import { useFonts, DMSans_400Regular, DMSans_700Bold } from '@expo-google-fonts/dm-sans'

export default function Login({ navigation }) {
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_700Bold
  })
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={hero}
      />
      <Text 
      style={styles.hero_title}>
      Stay on top of your finance with us.
      </Text>
      <Text
      style={styles.hero_subtitle}>
      We are your new financial Advisors
      to recommed the best investments for you.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Create')}
      >
        <Text style={styles.buttonText}>Create account</Text>
      </TouchableOpacity>
      <Text 
      style={styles.linkText}
      onPress={() => navigation.navigate('Home')}
      >
        Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: '154px',
    flex: 1,
  },
  img: {
    height: '273.23px',
    width: '300px',
  },
  hero_title: {
    fontSize: '34px',
    fontWeight: "700",
    maxWidth: '90%',
    textAlign: 'center',
    fontFamily: 'DMSans_700Bold'
  },
  hero_subtitle: {
    maxWidth: '85%',
    color: '#4F4F4F',
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 15,
    fontSize: '17px',
    fontFamily: 'DMSans_400Regular'
  },
  button: {
    marginTop: 30,
    width: '80%',
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
});
