import React from 'react'
import {View, Text, StyleSheet } from 'react-native'

export default function Title(props) {
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    width: '100%',
    margin: '0 auto',
    padding: '0 16px',
    position: 'relative',
    flexDirection: 'row',
  },
  titleText: {
    marginLeft: '24px',
    fontSize: 20,
    lineHeight: 29,
    fontWeight: '700',
    color: '#141415',
  },
})