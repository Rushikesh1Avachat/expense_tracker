import { useState } from "react";
import { Button } from "@mui/material";

function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price || !category || !date) return;

    const success = onAdd({
      id: Date.now(),
      title,
      price: Number(price),
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
      <div
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          name="price"
          type="number"
          placeholder="Amount"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Entertainment">Entertainment</option>
        </select>

        <input
          name="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <Button type="submit" variant="contained">
          Add Expense
        </Button>
      </div>
    </form>
  );
}

export default ExpenseForm;
