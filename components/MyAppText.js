import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function MyAppText({ color = 'antiquewhite', size = 28, children }) {
  return (
    <Text style={[styles.defaultTextStyles, { color: color, fontSize: size }]}>
      <Text>{children}</Text>
    </Text>
  )
};

const styles = StyleSheet.create({
  defaultTextStyles: {
    fontWeight: '300',
  }
})
