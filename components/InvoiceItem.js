import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../theme/Colors";
import { useNavigation } from "@react-navigation/native";
import { iconColors } from "../theme/Colors";
import numberFormarter from "../helpers/numberFormarter";

export default function InvoiceItem({ name, date, total, currency, color, id }) {
  const navigation = useNavigation();

  function showInvoice() {
    navigation.navigate("InvoiceDetails", {
      id,
    });
  }

  return (
    <View style={styles.pressable}>
      <Pressable android_ripple={{ color: "#f5f5f5" }} onPress={showInvoice}>
        <View style={styles.mainContainer}>
          <View style={styles.invoiceContainer}>
            <View style={[styles.icon, { backgroundColor: iconColors[color] }]}>
              <Ionicons name="reader-sharp" color="#fff" size={25} />
            </View>
            <View>
              <Text style={styles.invoiceName}>{name}</Text>
              <Text style={styles.date}>{date}</Text>
            </View>
          </View>
          <View
            style={[
              styles.priceContainer,
              { backgroundColor: total >= 0 ? Colors.success : Colors.danger },
            ]}
          >
            <Text
              style={[
                styles.price,
                { color: total >= 0 ? Colors.primary : Colors.secondary },
              ]}
            >
              {currency || "R"}
              {numberFormarter(total)}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 5,
    backgroundColor: Colors.background,
    marginBottom: 10,
    overflow: "hidden",
  },

  mainContainer: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  invoiceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 200,
  },

  invoiceName: {
    fontSize: 15,
    fontWeight: "bold",
  },

  date: {
    color: Colors.text,
    fontSize: 12,
  },

  priceContainer: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,
  },

  price: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
