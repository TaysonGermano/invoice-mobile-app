import React, { useState, useContext, useLayoutEffect } from "react";
import { Text, TextInput, StyleSheet, View, ScrollView } from "react-native";
import Button from "../components/Button";
import Container from "../components/Container";
import { Colors } from "../theme/Colors";
import { InvoiceContext } from "../context/invoice/InvoiceContext";
import { ACTION } from "../context/invoice/action";

const initialValue = {
  id: Math.random(),
  title: "",
  name: "",
  date: "",
  serviceDescription: "",
  quantity: "",
  pricePerUnit: "",
  discount: "",
  total: "",
  color: Math.floor(Math.random() * 4),
};

export default function UploadScreen({ navigation, route }) {
  const { dispatch, invoices } = useContext(InvoiceContext);
  const params = route.params;

  const [form, setForm] = useState(initialValue);

  function handleChange(value, field) {
    if (field === "quantity") {
      setForm((prev) => ({
        ...prev,
        [field]: value,
        total: +prev.pricePerUnit * +value,
      }));
    } else if (field === "pricePerUnit") {
      setForm((prev) => ({
        ...prev,
        [field]: value,
        total: +value * +prev.quantity,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  }

  function submit() {
    if (!params?.id) {
      dispatch({ type: ACTION.add, payload: form });
      navigation.navigate("Invoices");
    } else {
      dispatch({ type: ACTION.update, payload: form });
      navigation.navigate("InvoiceDetails", {
        id: form.id,
      });
    }
    navigation.setParams({
      id: "",
    });
  }

  useLayoutEffect(() => {
    params?.id
      ? setForm(invoices.find((d) => d.id === params?.id))
      : setForm(() => initialValue);
  }, [params?.id]);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text>Title</Text>
          <TextInput
            style={styles.form}
            value={form.title}
            onChangeText={(e) => handleChange(e, "title")}
          />
        </View>
        <View>
          <Text>Client Name</Text>
          <TextInput
            style={styles.form}
            value={form.name}
            onChangeText={(e) => handleChange(e, "name")}
          />
        </View>
        <View>
          <Text>Invoice Date</Text>
          <TextInput
            style={styles.form}
            value={form.date}
            onChangeText={(e) => handleChange(e, "date")}
          />
        </View>
        <View>
          <Text>Service Description</Text>
          <TextInput
            style={styles.form}
            multiline={true}
            numberOfLines={6}
            value={form.serviceDescription}
            onChangeText={(e) => handleChange(e, "serviceDescription")}
          />
        </View>
        <View>
          <Text>Quantity</Text>
          <TextInput
            style={styles.form}
            keyboardType="phone-pad"
            serviceDescription
            value={form.quantity}
            onChangeText={(e) => handleChange(e, "quantity")}
          />
        </View>
        <View>
          <Text>Price Per Unit</Text>
          <TextInput
            style={styles.form}
            keyboardType="phone-pad"
            value={form.pricePerUnit}
            onChangeText={(e) => handleChange(e, "pricePerUnit")}
          />
        </View>
        <View>
          <Text>Discount (%)</Text>
          <TextInput
            style={styles.form}
            keyboardType="phone-pad"
            value={form.discount}
            onChangeText={(e) => handleChange(e, "discount")}
          />
        </View>
        <View>
          <Button text={params?.id ? "Save" : "Add"} onPress={submit} />
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: Colors.formBgColor,
    color: Colors.formTextColor,
    padding: 8,
    borderRadius: 10,
    marginVertical: 10,
  },
});
