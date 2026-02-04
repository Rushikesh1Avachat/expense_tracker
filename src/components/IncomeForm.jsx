import { useState } from "react";
import { Button, TextField } from "@mui/material";

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
      <TextField
        type="number"
        placeholder="Income Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
      />

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Add Balance
      </Button>
    </form>
  );
}
export default IncomeForm