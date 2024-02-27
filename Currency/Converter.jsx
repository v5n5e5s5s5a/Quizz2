import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';

const CurrencyConverter = () => {
  const [dollars, setDollars] = useState('');
  const [francs, setFrancs] = useState('');

  const exchangeRate = 1300; 
  const convertCurrency = () => {
    const dollarsAmount = parseFloat(dollars);
    if (!isNaN(dollarsAmount)) {
      const equivalentFrancs = dollarsAmount * exchangeRate;
      setFrancs(equivalentFrancs.toFixed(2));
    }
  };

  return (
    <View style={styles.container}>
        <StatusBar style="light"/>
      <Text style={styles.label}>Enter amount in dollars:</Text>
      <TextInput
        style={styles.input}
        value={dollars}
        onChangeText={(text) => setDollars(text)}
        keyboardType="numeric"
        
      />
      <Pressable onPress={convertCurrency} style={{borderRadius: 10, backgroundColor: 'lightgray', paddingHorizontal: 20, paddingVertical: 10,}}>
        <Text style={{fontWeight: 'bold',}}>Convert</Text>
      </Pressable>
      <Text style={styles.result}>Amount in Rwandan Francs: {'\n'} <Text style={{color: 'black',}}> {francs}</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
  input: {
    width: '85%',
    height: 40,
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});

export default CurrencyConverter;
