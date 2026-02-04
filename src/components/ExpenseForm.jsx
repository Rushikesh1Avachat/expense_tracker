import React, { useState } from "react";
import { Grid, TextField, MenuItem, Button } from "@mui/material";

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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            name="title"
            label="Expense Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            name="price"
            label="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            name="category"
            label="Category"
            select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            required
          >
            {categories.map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" fullWidth>
            Add Expense
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ExpenseForm;




