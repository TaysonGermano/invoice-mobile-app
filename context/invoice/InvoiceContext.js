import React, { createContext, useReducer } from "react";
import { data } from "../../data/dummy-data";
import { reducer } from "./reducer";

export const InvoiceContext = createContext();

export default function InvoiceProvider({ children }) {
  const [invoices, dispatch] = useReducer(reducer, [...data]);

  return (
    <InvoiceContext.Provider value={{ invoices, dispatch }}>
      {children}
    </InvoiceContext.Provider>
  );
}
