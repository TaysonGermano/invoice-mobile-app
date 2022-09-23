import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const InvoiceContext = createContext()

export default function InvoiceProvider({ children }) {

  const data = [
    {
      id: Math.random(),
      title: "Dstv Installation",
      name: "Jessica Alba",
      date: "23 aug 2023",
      serviceDescription:
        "Dstv installation for all the apartments in the building",
      quantity: 13,
      pricePerUnit: 12500,
      discount: "0",
      total: 13 * 12500,
      color: Math.floor(Math.random() * 4),
    },
    {
      id: Math.random(),
      title: "Netflix Payment",
      name: "Olga Pereira",
      date: "22 mar 2023",
      serviceDescription: "Netflix payment for Jessica's house",
      quantity: 3,
      pricePerUnit: 9500,
      discount: "0",
      total: 3 * 9500,
      color: Math.floor(Math.random() * 4),
    },
    {
      id: Math.random(),
      title: "Phone Bills",
      name: "Jessica Alba",
      date: "08 aug 2023",
      serviceDescription: "Payment for phones on the line 3",
      quantity: 4,
      pricePerUnit: 1000,
      discount: "0",
      total: 4 * 1000,
      color: Math.floor(Math.random() * 4),
    },
    {
      id: Math.random(),
      title: "App Developement",
      name: "Orlando Silva",
      date: "08 aug 2023",
      serviceDescription: "AirBNB App development for the airBNB group",
      quantity: 1,
      pricePerUnit: 200500,
      discount: "0",
      total: 1 * 200500,
      color: Math.floor(Math.random() * 4),
    },
    {
      id: Math.random(),
      title: "Car Maintenance",
      name: "Morning Field",
      date: "01 jan 2023",
      serviceDescription: "Jeep monthly maintenance for the month of december",
      quantity: 1,
      pricePerUnit: 30000,
      discount: "0",
      total: 1 * 30000,
      color: Math.floor(Math.random() * 4),
    },
  ];

    const [invoices, dispatch] = useReducer(reducer, [...data]);

  return (
    <InvoiceContext.Provider value={{ invoices, dispatch }}>
      {children}
    </InvoiceContext.Provider>
  );
}