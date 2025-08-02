const dummyOrder = [
  {
    tableNo: "Table 1",
    orderNo: "ORD001",
    items: [
      {
        name: "Chicken Biryani",
        variant: "Spicy",
        quantity: 2,
        discount: 10,
        price: 180,
      },
      { name: "Lassi", variant: "Sweet", quantity: 1, discount: 0, price: 50 },
    ],
    isPaid: "no",
  },
  {
    tableNo: "Table 2",
    orderNo: "ORD002",
    items: [
      {
        name: "Beef Burger",
        variant: "Cheese",
        quantity: 1,
        discount: 0,
        price: 220,
      },
      {
        name: "French Fries",
        variant: "Large",
        quantity: 2,
        discount: 10,
        price: 70,
      },
    ],
    isPaid: "yes",
  },
  {
    tableNo: "Table 3",
    orderNo: "ORD003",
    items: [
      {
        name: "Grilled Chicken",
        variant: "Half",
        quantity: 1,
        discount: 15,
        price: 300,
      },
      {
        name: "Fresh Lime",
        variant: "Soda",
        quantity: 2,
        discount: 0,
        price: 40,
      },
    ],
    isPaid: "no",
  },
  {
    tableNo: "Table 4",
    orderNo: "ORD004",
    items: [
      {
        name: "Pasta Alfredo",
        variant: "Extra Cheese",
        quantity: 1,
        discount: 20,
        price: 250,
      },
      {
        name: "Garlic Bread",
        variant: "2 pieces",
        quantity: 1,
        discount: 0,
        price: 60,
      },
    ],
    isPaid: "yes",
  },
];

export default dummyOrder;
