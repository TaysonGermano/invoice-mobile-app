import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import InvoiceItem from './InvoiceItem'

export default function InvoiceList({ data, currency}) {
  return (
    <FlatList
      data={data}
      renderItem={(itemData) => (
        <InvoiceItem
          name={itemData.item.name}
          total={itemData.item.total}
          date={itemData.item.date}
          color={itemData.item.color}
          id={itemData.item.id}
          currency={currency}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
