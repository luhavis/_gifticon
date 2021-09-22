import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Card from './components/Card';
import Header from './components/Header';

import Title from './components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Title title="내 쿠폰" />

      <View style={styles.cardList}>        
        <Card/>
        <Card/>
        <Card/>
        <Card/>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardList: {
    flexDirection: 'row',    
    flexWrap: 'wrap'
  }
});
