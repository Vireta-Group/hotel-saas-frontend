// src/pages/DailySellReport.jsx
import React, { useState, useMemo } from "react";
import { FaSortAmountDown, FaMoneyBillWave, FaTag } from "react-icons/fa";
import "../../../style/coreModule/restaurant/dailySellReport/DailySellReport.css";

const DailySellReport = () => {
  // Initial sales data
  const initialItems = [
    { id: 1, name: "Biryani", tableSell: 7, roomSell: 15, price: 150 },
    { id: 2, name: "Chicken Curry", tableSell: 8, roomSell: 12, price: 180 },
    { id: 3, name: "Fried Rice", tableSell: 12, roomSell: 6, price: 120 },
    { id: 4, name: "Grilled Fish", tableSell: 3, roomSell: 7, price: 220 },
    { id: 5, name: "Mutton Korma", tableSell: 4, roomSell: 5, price: 250 },
    { id: 6, name: "Vegetable Pulao", tableSell: 7, roomSell: 4, price: 110 },
    { id: 7, name: "Paneer Tikka", tableSell: 9, roomSell: 8, price: 140 },
  ];

  const [items, setItems] = useState(initialItems);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "desc",
  });

  // Calculate total amount and total quantity
  const processedItems = useMemo(() => {
    return items.map((item) => ({
      ...item,
      totalQuantity: item.tableSell + item.roomSell,
      totalAmount: (item.tableSell + item.roomSell) * item.price,
    }));
  }, [items]);

  // Sorting function
  const handleSort = (key) => {
    let direction = "desc";

    if (sortConfig.key === key && sortConfig.direction === "desc") {
      direction = "asc";
    }

    setSortConfig({ key, direction });

    const sortedItems = [...items].sort((a, b) => {
      // Calculate values for comparison
      const aValue =
        key === "totalQuantity"
          ? a.tableSell + a.roomSell
          : key === "totalAmount"
          ? (a.tableSell + a.roomSell) * a.price
          : a[key];

      const bValue =
        key === "totalQuantity"
          ? b.tableSell + b.roomSell
          : key === "totalAmount"
          ? (b.tableSell + b.roomSell) * b.price
          : b[key];

      if (aValue < bValue) return direction === "asc" ? -1 : 1;
      if (aValue > bValue) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setItems(sortedItems);
  };

  // Get sort icon based on direction
  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  // Calculate grand totals
  const grandTotals = useMemo(() => {
    return processedItems.reduce(
      (acc, item) => {
        acc.totalQuantity += item.totalQuantity;
        acc.totalAmount += item.totalAmount;
        return acc;
      },
      { totalQuantity: 0, totalAmount: 0 }
    );
  }, [processedItems]);

  return (
    <div className="daily-sell-report">
      <div className="report-header">
        <h2>Daily Sales Report</h2>
        <div className="sort-controls">
          <button
            className={`sort-btn ${
              sortConfig.key === "totalQuantity" ? "active" : ""
            }`}
            onClick={() => handleSort("totalQuantity")}
          >
            <FaSortAmountDown className="icon" /> Top Sell{" "}
            {getSortIcon("totalQuantity")}
          </button>
          <button
            className={`sort-btn ${
              sortConfig.key === "totalAmount" ? "active" : ""
            }`}
            onClick={() => handleSort("totalAmount")}
          >
            <FaMoneyBillWave className="icon" /> High Earn{" "}
            {getSortIcon("totalAmount")}
          </button>
          <button
            className={`sort-btn ${sortConfig.key === "price" ? "active" : ""}`}
            onClick={() => handleSort("price")}
          >
            <FaTag className="icon" /> High Price {getSortIcon("price")}
          </button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="sales-table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Table Sell</th>
              <th>Room Sell</th>
              <th>Price </th>
              <th>Total Amount </th>
            </tr>
          </thead>
          <tbody>
            {processedItems.map((item) => (
              <tr key={item.id}>
                <td className="item-name">{item.name}</td>
                <td>{item.tableSell}</td>
                <td>{item.roomSell}</td>
                <td>{item.price.toLocaleString()}</td>
                <td className="total-amount">
                  {item.totalAmount.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="grand-total">
              <td>Grand Total</td>
              <td></td>
              <td></td>
              <td></td>
              <td className="total-amount">
                {grandTotals.totalAmount.toLocaleString()}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default DailySellReport;
