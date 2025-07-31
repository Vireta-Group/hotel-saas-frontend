import React, { useState } from "react";

const ExpenseForm = () => {
    const [formData, setFormData] = useState({
        category: "",
        amount: "",
        date: "",
        voucher: "",
    });

    const [expenses, setExpenses] = useState([]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { category, amount, date, voucher } = formData;

        if (!category || !amount || !date || !voucher) {
            alert("Please fill in all fields");
            return;
        }

        setExpenses((prev) => [...prev, formData]);
        setFormData({ category: "", amount: "", date: "", voucher: "" });
    };

    const totalAmount = expenses.reduce(
        (sum, exp) => sum + parseFloat(exp.amount || 0),
        0
    );

    return (
        <div className="container mt-5">
            {/* Expense Form */}
            <div className="p-4 mb-5 rounded shadow" style={{ backgroundColor: "#e9ecef" }}>
                <h2 className="mb-4 text-center"
                    style={{
                        backgroundColor: "#343a40",
                        color: "white",
                    }}>
                    Expense Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="mb-3 col-md-3">
                            <label className="form-label">Category</label>
                            <input
                                type="text"
                                name="category"
                                className="form-control"
                                value={formData.category}
                                onChange={handleChange}
                                placeholder="e.g. Office"
                            />
                        </div>

                        <div className="mb-3 col-md-3">
                            <label className="form-label">Amount</label>
                            <input
                                type="number"
                                name="amount"
                                className="form-control"
                                value={formData.amount}
                                onChange={handleChange}
                                placeholder="e.g. 1000"
                            />
                        </div>

                        <div className="mb-3 col-md-3">
                            <label className="form-label">Date</label>
                            <input
                                type="date"
                                name="date"
                                className="form-control"
                                value={formData.date}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3 col-md-3">
                            <label className="form-label">Voucher No</label>
                            <input
                                type="text"
                                name="voucher"
                                className="form-control"
                                value={formData.voucher}
                                onChange={handleChange}
                                placeholder="e.g. VCH001"
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary mt-2">
                        Add Expense
                    </button>
                </form>
            </div>

            {/* Expense Report */}
            {expenses.length > 0 && (
                <div className="p-4 rounded shadow text-center"
                    style={{
                        backgroundColor: "#343a40",
                        color: "white",
                    }}>
                    <h4 className="mb-3">Expense Report</h4>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Category</th>
                                <th>Voucher</th>
                                <th className="text-end">Amount (৳)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map((exp, index) => (
                                <tr key={index}>
                                    <td>{exp.date}</td>
                                    <td>{exp.category}</td>
                                    <td>{exp.voucher}</td>
                                    <td className="text-end">{parseFloat(exp.amount).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h5 className="text-end mt-3">
                        Total Expense: <strong>৳ {totalAmount.toFixed(2)}</strong>
                    </h5>
                </div>
            )}
        </div>
    );
};

export default ExpenseForm;
