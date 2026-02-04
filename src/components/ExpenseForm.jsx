import React, { useState } from "react";

const categories = ["Food", "Travel", "Entertainment"];

const ExpenseForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price || !category || !date) return;

    // Ensure property names match your Transactions List component
    const success = onAdd({
      id: Date.now(),
      title,
      price: parseFloat(price), 
      category,
      date, 
    });

    if (success) {
      setTitle("");
      setPrice("");
      setCategory("");
      setDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ flex: "1 1 45%", padding: "0.5rem" }}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          style={{ flex: "1 1 45%", padding: "0.5rem" }}
        />
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          style={{ flex: "1 1 45%", padding: "0.5rem" }}
        >
          <option value="">Select category</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <input
          type="date"
          name="date" // This fixes the primary AssertionError
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          style={{ flex: "1 1 45%", padding: "0.5rem" }}
        />

        <button
          type="submit"
          className="add-expense-btn" // Good for styling
          style={{
            flex: "1 0 100%",
            padding: "0.7rem",
            backgroundColor: "#f3bb45", // Matching the UI in your screenshot
            color: "white",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
            borderRadius: "15px",
          }}
        >
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;






