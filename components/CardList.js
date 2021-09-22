import React from 'react'
import {View, StyleSheet } from 'react-native'


export default function CardList(props) {
  return (
    <View style={styles.cardList}>
      {props}
    </View>
  )
}

const styles = StyleSheet.create({
  cardList: {
    flexDirection: 'row',
  }
})