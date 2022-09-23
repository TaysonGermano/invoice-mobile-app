import React, {useContext} from "react";
import Container from "../components/Container";
import InvoiceItem from "../components/InvoiceItem";
import InvoiceList from "../components/InvoiceList";
import { InvoiceContext } from "../context/invoice/InvoiceContext";

export default function InvoicesScreen() {

  const {invoices} = useContext(InvoiceContext);

  return (
    <Container>
      <InvoiceList data={invoices} currency="$" />
    </Container>
  );
}
