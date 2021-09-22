import React from 'react'
import {View, StyleSheet, Text, Image } from 'react-native'

import group10 from '../assets/images/group10_3x.jpg'
import iconIcCalendarBlack from '../assets/images/iconIcCalendarBlack.svg'

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image source={group10} style={{width: '100%', height: '100px', borderRadius: 5}}/>
        <Text style={{display: 'flex', marginTop: 8,}}>
          <Text style={styles.brandName}>스타벅스</Text>
          <Image source={iconIcCalendarBlack} style={styles.calendar}/>
          <Text style={styles.gificonDate}>~21.10.15</Text>            
        </Text>
        <Text style={styles.productName}>
          아메리카노
        </Text>
        <Text style={styles.productPrice}>
          160,000원
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {    
    width: `calc(100% / 2.1)`,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: '#fff',
    //shadowOffset: {width: 1, height: 1, },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    marginHorizontal: 1,
    marginVertical: 3,
  },
  cardContent: {
    marginTop: '25px',
    marginHorizontal: 10,
    marginVertical: 10,
  },

  brandName: {
    flex: 1,
    lineHeight: 18,
    fontSize: 12,
    color: '#acacbb',
  },

  calendar: {
    width: '16px',
    height: '16px',
    resizeMode: 'cover',
  },

  gificonDate: {
    color: '#000',
    fontWeight: '700',
    lineHeight: 16,
    fontSize: 10,
    paddingLeft: 2,
  },

  productName: {
    lineHeight: 20,
    fontSize: 14,
    color: '#28282d',
    fontWeight: '400',
  },
  
  productPrice: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
    color: '#28282d',
  },
})