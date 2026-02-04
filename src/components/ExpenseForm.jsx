import React, { useState } from "react";

const categories = ["Food", "Travel", "Entertainment"];

const ExpenseForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price || !category) return;

    const success = onAdd({
      id: Date.now(),
      title,
      price: parseFloat(price),
      category,
    });

    if (success) {
      setTitle("");
      setPrice("");
      setCategory("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        <input
          type="text"
          name="title"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ flex: "1 1 30%", padding: "0.5rem" }}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          style={{ flex: "1 1 30%", padding: "0.5rem" }}
        />
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          style={{ flex: "1 1 30%", padding: "0.5rem" }}
        >
          <option value="">Select Category</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <button
          type="submit"
          style={{
            flex: "1 0 100%",
            padding: "0.5rem",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          + Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;






