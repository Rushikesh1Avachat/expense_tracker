import React from "react";
import { Modal, Box, Typography, TextField, MenuItem, Button, Stack } from "@mui/material";
import { useSnackbar } from "notistack";

const modalStyle = {
  position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: 400 }, bgcolor: "#efefef", borderRadius: 4, p: 4, color: "black"
};

const AddExpenseModal = ({ isOpen, handleClose, setExpenses, balance, setBalance }) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const price = Number(formData.get("price"));

    // Requirement: Prevent users from spending more than available balance
    if (price > balance) {
      enqueueSnackbar("You don't have enough balance!", { variant: "error" });
      return;
    }

    const newExpense = {
      id: Date.now(),
      title: formData.get("title"), // Requirement: name="title"
      price: price,                 // Requirement: name="price"
      category: formData.get("category"), // Requirement: name="category"
      date: formData.get("date"),   // Requirement: name="date"
    };

    setExpenses((prev) => [...prev, newExpense]);
    setBalance((prev) => prev - price);
    handleClose();
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Typography variant="h5" fontWeight="bold" mb={2}>Add Expenses</Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField name="title" placeholder="Title" fullWidth required />
            <TextField name="price" placeholder="Price" type="number" fullWidth required />
            <TextField name="category" select fullWidth required defaultValue="" label="Select Category">
              <MenuItem value="Food">Food</MenuItem>
              <MenuItem value="Entertainment">Entertainment</MenuItem>
              <MenuItem value="Travel">Travel</MenuItem>
            </TextField>
            <TextField name="date" type="date" fullWidth required InputLabelProps={{ shrink: true }} />
            <Stack direction="row" spacing={2}>
              <Button variant="contained" type="submit" sx={{ bgcolor: "#FF9304", borderRadius: 2 }} fullWidth>
                Add Expense
              </Button>
              <Button variant="contained" onClick={handleClose} sx={{ bgcolor: "#E3E3E3", color: "black", borderRadius: 2 }} fullWidth>
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};

export default AddExpenseModal;