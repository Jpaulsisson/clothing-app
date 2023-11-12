import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function MyAppHeader({ color = 'anitquewhite', children }) {
  return (
    <Text style={[styles.defaultTextStyles, { color: color}]}>
      <Text>{children}</Text>
    </Text>
  )
};

const styles = StyleSheet.create({
  defaultTextStyles: {
    fontWeight: '300',
    fontSize: 40,
  }
})
