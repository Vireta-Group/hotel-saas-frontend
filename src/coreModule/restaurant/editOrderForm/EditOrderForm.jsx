import React, { useState } from "react";
import dummyOrder from "./dummyOrder.js";
import { FaSearch, FaPlus, FaMoneyBillWave } from "react-icons/fa";

const EditTableOrder = () => {
    const [searchTable, setSearchTable] = useState("");
    const [searchOrder, setSearchOrder] = useState("");
    const [orderData, setOrderData] = useState(null);

    // Search handler
    const handleSearch = () => {
        const table = searchTable.trim().toLowerCase();
        const order = searchOrder.trim().toLowerCase();

        const found = dummyOrder.find(
            (o) => o.tableNo.toLowerCase() === table && o.orderNo.toLowerCase() === order
        );

        if (found) {
            setOrderData(JSON.parse(JSON.stringify(found)));
        } else {
            alert("No matching order found.");
            setOrderData(null);
        }
    };

    // Change quantity or discount only for existing items
    const handleExistingItemChange = (index, field, value) => {
        const newItems = [...orderData.items];
        newItems[index][field] = field === "quantity" || field === "discount" ? parseFloat(value) || 0 : value;
        setOrderData({ ...orderData, items: newItems });
    };

    // Add new item with all editable fields
    const handleAddItem = () => {
        const newItem = { name: "", variant: "", quantity: 1, discount: 0, price: 0 };
        setOrderData({ ...orderData, items: [...orderData.items, newItem] });
    };

    // Change for new items - all editable fields
    const handleNewItemChange = (index, field, value) => {
        const newItems = [...orderData.items];
        if (field === "quantity" || field === "discount" || field === "price") {
            newItems[index][field] = parseFloat(value) || 0;
        } else {
            newItems[index][field] = value;
        }
        setOrderData({ ...orderData, items: newItems });
    };

    // Calculate total
    const totalAmount = orderData
        ? orderData.items.reduce(
            (acc, item) => acc + item.quantity * (item.price - item.discount),
            0
        )
        : 0;

    return (
        <div style={{ padding: "2rem", maxWidth: 1280, margin: "auto", fontFamily: "Arial, sans-serif" }}>
            <h2 style={{ textAlign: "center", marginBottom: "1.5rem", fontWeight: "bold" }}>🔍 Edit Table Order</h2>

            <div style={{ display: "flex", gap: "2rem", marginBottom: "1.5rem" }}>
                {/* Table select */}
                <select
                    value={searchTable}
                    onChange={(e) => setSearchTable(e.target.value)}
                    style={{ flex: 1, padding: "0.5rem", borderRadius: 4, border: "1px solid #ccc" }}
                >
                    <option value="">Select Table</option>
                    {[...new Set(dummyOrder.map((o) => o.tableNo))].map((table) => (
                        <option key={table} value={table}>
                            {table}
                        </option>
                    ))}
                </select>

                {/* Order select */}
                <select
                    value={searchOrder}
                    onChange={(e) => setSearchOrder(e.target.value)}
                    style={{ flex: 1, padding: "0.5rem", borderRadius: 4, border: "1px solid #ccc" }}
                >
                    <option value="">Select Order</option>
                    {dummyOrder
                        .filter((o) => (searchTable ? o.tableNo === searchTable : true))
                        .map((order) => (
                            <option key={order.orderNo} value={order.orderNo}>
                                {order.orderNo}
                            </option>
                        ))}
                </select>

                <button
                    onClick={handleSearch}
                    style={{
                        padding: "0.5rem 1rem",
                        borderRadius: 4,
                        border: "none",
                        backgroundColor: "#2563eb",
                        color: "white",
                        cursor: "pointer",
                    }}
                    title="Search"
                >
                    <FaSearch />
                </button>
            </div>

            {orderData && (
                <div
                    style={{
                        border: "1px solid #ddd",
                        padding: "1rem",
                        borderRadius: 6,
                        backgroundColor: "white",
                    }}
                >
                    <p>
                        <strong>Table:</strong> {orderData.tableNo}
                    </p>
                    <p>
                        <strong>Order:</strong> {orderData.orderNo}
                    </p>

                    <h4 style={{ marginTop: "1rem", marginBottom: "0.5rem", fontWeight: "bold" }}>📝 Items:</h4>

                    <div style={{ fontWeight: "bold", display: "grid", gridTemplateColumns: "2fr 2fr 2fr 2fr 2fr 0.5fr", gap: "0.5rem", marginBottom: 6 }}>
                        <div>Item Name:</div>
                        <div>Variant:</div>
                        <div>Quantity:</div>
                        <div>Discount:</div>
                        <div>Price:</div>
                    </div>

                    {orderData.items.map((item, i) => {
                        const isExisting = dummyOrder.some(
                            (o) =>
                                o.tableNo === orderData.tableNo &&
                                o.orderNo === orderData.orderNo &&
                                o.items.some(
                                    (it) =>
                                        it.name === item.name &&
                                        it.variant === item.variant &&
                                        it.price === item.price
                                )
                        );
                        return (
                            <div
                                key={i}
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "2fr 2fr 2fr 2fr 2fr 0.5fr",
                                    gap: "0.5rem",
                                    marginBottom: "0.4rem",
                                }}
                            >
                                {/* Name */}
                                <input
                                    type="text"
                                    value={item.name}
                                    readOnly={isExisting}
                                    onChange={(e) =>
                                        isExisting
                                            ? null
                                            : handleNewItemChange(i, "name", e.target.value)
                                    }
                                    style={{
                                        border: "1px solid #ccc",
                                        borderRadius: 4,
                                        padding: "0.3rem 0.5rem",
                                        backgroundColor: isExisting ? "#f0f0f0" : "white",
                                    }}
                                />

                                {/* Variant */}
                                <input
                                    type="text"
                                    value={item.variant}
                                    readOnly={isExisting}
                                    onChange={(e) =>
                                        isExisting
                                            ? null
                                            : handleNewItemChange(i, "variant", e.target.value)
                                    }
                                    style={{
                                        border: "1px solid #ccc",
                                        borderRadius: 4,
                                        padding: "0.3rem 0.5rem",
                                        backgroundColor: isExisting ? "#f0f0f0" : "white",
                                    }}
                                />

                                {/* Quantity */}
                                <input
                                    type="number"
                                    min={0}
                                    value={item.quantity}
                                    onChange={(e) =>
                                        isExisting
                                            ? handleExistingItemChange(i, "quantity", e.target.value)
                                            : handleNewItemChange(i, "quantity", e.target.value)
                                    }
                                    style={{
                                        border: "1px solid #ccc",
                                        borderRadius: 4,
                                        padding: "0.3rem 0.5rem",
                                    }}
                                />

                                {/* Discount */}
                                <input
                                    type="number"
                                    min={0}
                                    value={item.discount}
                                    onChange={(e) =>
                                        isExisting
                                            ? handleExistingItemChange(i, "discount", e.target.value)
                                            : handleNewItemChange(i, "discount", e.target.value)
                                    }
                                    style={{
                                        border: "1px solid #ccc",
                                        borderRadius: 4,
                                        padding: "0.3rem 0.5rem",
                                    }}
                                />

                                {/* Price */}
                                <input
                                    type="number"
                                    // min={0}
                                    value={item.price}
                                    readOnly={isExisting}
                                    onChange={(e) =>
                                        isExisting ? null : handleNewItemChange(i, "price", e.target.value)
                                    }
                                    style={{
                                        border: "1px solid #ccc",
                                        borderRadius: 4,
                                        padding: "0.3rem 0.5rem",
                                        backgroundColor: isExisting ? "#f0f0f0" : "white",
                                    }}
                                />

                                <div></div>
                            </div>
                        );
                    })}

                    <button
                        onClick={handleAddItem}
                        style={{
                            marginTop: "0.5rem",
                            padding: "0.3rem 0.6rem",
                            borderRadius: 4,
                            border: "1px solid #444",
                            cursor: "pointer",
                            backgroundColor: "#eee",
                            fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.3rem",
                        }}
                        title="Add new item"
                    >
                        <FaPlus /> Add Item
                    </button>

                    <div
                        style={{
                            marginTop: "1rem",
                            fontWeight: "bold",
                            fontSize: "1.25rem",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <strong>Comments:</strong> {orderData.comments || "None"}
                            <br />
                            <strong>Paid:</strong> {orderData.isPaid}
                        </div>
                        <div>
                            <FaMoneyBillWave style={{ marginRight: 6 }} />
                            Total: ৳ {totalAmount.toFixed(2)}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditTableOrder;
