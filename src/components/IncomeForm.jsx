import { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";

function IncomeForm({ onAdd, onClose }) {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) return;

    onAdd(Number(amount));
    setAmount("");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            type="number"
            placeholder="Income Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" fullWidth>
            Add Balance
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default IncomeForm;

