import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function MyAppText({ children }) {
  return (
    <Text style={styles.defaultTextStyles}>
      <Text>{children}</Text>
    </Text>
  )
};

const styles = StyleSheet.create({
  defaultTextStyles: {
    fontFamily: 'Dosis'
  }
})
