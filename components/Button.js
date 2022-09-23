import React from 'react'
import { Pressable, Text, View, StyleSheet } from 'react-native'
import { Colors } from '../theme/Colors';



export default function Button({text, onPress, variant}) {
  return (
    <View
      style={[
        styles.pressable,
        { backgroundColor: variant ? Colors[variant] : Colors.primary },
      ]}
    >
      <Pressable
        onPress={onPress}
        android_ripple={{
          color: variant ? "#e64f45" : "#46a88f"
        }}
      >
        <View style={styles.button}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  pressable: {
    marginVertical: 10,
    overflow: "hidden",
    borderRadius: 15,
  },

  button: {
    padding: 13,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});