import { useState } from "react";
import { v4 as uuid } from "uuid";
import {
  Button,
  TextField,
  MenuItem,
  Typography,
  Stack
} from "@mui/material";

 function ExpenseForm({ onAdd, onClose }) {
  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
    date: ""
  });

  const submit = (e) => {
    e.preventDefault();

    if (!form.title || !form.price || !form.category || !form.date) return;

    const success = onAdd({
      ...form,
      id: uuid(),
      price: Number(form.price)
    });

    if (success) {
      setForm({ title: "", price: "", category: "", date: "" });
      onClose();
    }
  };

  return (
    <form onSubmit={submit}>
      <Typography variant="h6" gutterBottom>
        Edit Expenses
      </Typography>

      <Stack spacing={2}>
        <TextField
          name="title"
          label="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <TextField
          name="price"
          type="number"
          label="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <TextField
          select
          name="category"
          label="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          <MenuItem value="Food">Food</MenuItem>
          <MenuItem value="Travel">Travel</MenuItem>
          <MenuItem value="Entertainment">Entertainment</MenuItem>
        </TextField>

        <TextField
          name="date"
          type="date"
          label="Date"
          InputLabelProps={{ shrink: true }}
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <Stack direction="row" spacing={2}>
          <Button type="submit" variant="contained">
            Add Expense
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </Stack>
      </Stack>
    </form>
  );
}
export default ExpenseForm