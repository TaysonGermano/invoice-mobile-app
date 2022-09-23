import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Colors } from '../theme/Colors';

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}


const styles = StyleSheet.create({
  title: {
    color: Colors.title,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});