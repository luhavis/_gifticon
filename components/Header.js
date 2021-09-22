import React from 'react'
import {View, Text, StyleSheet, Image } from 'react-native'

import iconIcSearch from '../assets/images/iconIcSearch.svg'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>GIFTCON</Text>
      <Image source={iconIcSearch} style={styles.searchIcon} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    paddingLeft: '24px',
    width: '170px',
    height: '21px',
    fontSize: 16,
    color: '#28282d',
    fontWeight: '700',
  },
  searchIcon: {    
    width: '24px',
    height: '24px',
    position: 'absolute',
    right: '16px',    
    transform: `transateY(-50%)`
  },
})