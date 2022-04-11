import React from 'react';

const defaultCartContextValue = {
  items: [],
  totalAmount: 0,
  addItem: (item) => {
    // do nothing;
  },
  removeItem: (id) => {
    // do nothing;
  },
};

const CartContext = React.createContext(defaultCartContextValue);

export default CartContext;
