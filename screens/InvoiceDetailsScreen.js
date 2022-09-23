import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "../components/Button";
import Container from "../components/Container";
import { InvoiceContext } from "../context/invoice/InvoiceContext";
import { iconColors } from "../theme/Colors";
import { Colors } from "../theme/Colors";
import { ACTION } from "../context/invoice/action";
import numberFormarter from "../helpers/numberFormarter";

export default function InvoiceDetailsScreen({ route, navigation }) {
  const { invoices, dispatch } = useContext(InvoiceContext);
  const { id } = route.params;

  const invoiceDetails = invoices.find((d) => d.id === id);

  function onEdit() {
    navigation.navigate("Upload", {
      id,
    });
  }

  function onDelete() {
    navigation.navigate("Invoices");
    dispatch({ type: ACTION.delete, payload: id });
  }

  return (
    <>
      {invoiceDetails && (
        <Container>
          <View style={styles.headerContainer}>
            <View
              style={[
                styles.profileLetterContainer,
                { backgroundColor: iconColors[invoiceDetails?.color] },
              ]}
            >
              <Text style={styles.profileLetter}>
                {invoiceDetails?.name[0]}
              </Text>
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.name}>{invoiceDetails?.name}</Text>
              <Text style={styles.date}>{invoiceDetails?.date}</Text>
            </View>
          </View>
          <View style={styles.amountContainer}>
            <Text>Amout due</Text>
            <Text style={styles.amount}>
              ${numberFormarter(invoiceDetails?.total)}
            </Text>
            <Text style={styles.description}>
              {invoiceDetails?.serviceDescription}
            </Text>
          </View>
          <View style={styles.invoiceDetails}>
            <View style={styles.invoiceDetailsContainer}>
              <Text style={styles.invoiceDetailsTitle}>Invoice title:</Text>
              <Text>{invoiceDetails?.title}</Text>
            </View>
            <View style={styles.invoiceDetailsContainer}>
              <Text style={styles.invoiceDetailsTitle}>Reference:</Text>
              <Text>{invoiceDetails?.id}</Text>
            </View>
            <View style={styles.invoiceDetailsContainer}>
              <Text style={styles.invoiceDetailsTitle}>Client:</Text>
              <Text>{invoiceDetails?.name}</Text>
            </View>
            <View style={styles.invoiceDetailsContainer}>
              <Text style={styles.invoiceDetailsTitle}>Quantity:</Text>
              <Text>{invoiceDetails?.quantity}</Text>
            </View>
            <View style={styles.invoiceDetailsContainer}>
              <Text style={styles.invoiceDetailsTitle}>Price per unit:</Text>
              <Text>${numberFormarter(invoiceDetails?.pricePerUnit)}</Text>
            </View>
            <View style={styles.invoiceDetailsContainer}>
              <Text style={styles.invoiceDetailsTitle}>Discount:</Text>
              <Text>{invoiceDetails?.discount}%</Text>
            </View>
            <View style={styles.invoiceDetailsContainer}>
              <Text style={styles.invoiceDetailsTitle}>Status:</Text>
              <Text style={{ color: Colors.secondary }}>Pending</Text>
            </View>
          </View>
          <View>
            <Button text="Edit" onPress={onEdit} />
            <Button text="Delete" variant="secondary" onPress={onDelete} />
          </View>
        </Container>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignContent: "center",
  },

  profileLetterContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 60,
    borderRadius: 100,
    marginRight: 10,
  },

  profileLetter: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  date: {
    color: Colors.text,
  },

  amountContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "40%",
  },

  amount: {
    fontSize: 45,
    color: Colors.text,
    fontWeight: "bold",
  },

  description: {
    textAlign: "center",
    color: Colors.text,
  },

  invoiceDetails: {
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },

  invoiceDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  invoiceDetailsTitle: {
    fontWeight: "bold",
    color: Colors.title,
  },
});
