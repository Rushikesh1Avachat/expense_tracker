import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { useSnackbar } from "notistack";

import WalletBalance from "./components/WalletBalance";
import ExpenseForm from "./components/ExpenseForm";
import IncomeForm from "./components/IncomeForm";
import ExpenseList from "./components/ExpenseList";
import PieChartView from "./components/PieChartView";
import BarChartView from "./components/BarChartView";

function App() {
  const { enqueueSnackbar } = useSnackbar();

  const [wallet, setWallet] = useState(
    Number(localStorage.getItem("wallet")) || 5000
  );
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("expenses")) || []
  );

  const [showIncomeModal, setShowIncomeModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("wallet", wallet);
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [wallet, expenses]);

  const addIncome = (amount) => {
    setWallet(wallet + amount);
    enqueueSnackbar("Income added", { variant: "success" });
  };

  const addExpense = (expense) => {
    if (expense.price > wallet) {
      enqueueSnackbar("Insufficient wallet balance", { variant: "error" });
      return false;
    }

    setExpenses([...expenses, expense]);
    setWallet(wallet - expense.price);

    enqueueSnackbar("Expense added", { variant: "success" });
    return true;
  };

  const deleteExpense = (id) => {
    const exp = expenses.find((e) => e.id === id);
    setWallet(wallet + exp.price);
    setExpenses(expenses.filter((e) => e.id !== id));
    enqueueSnackbar("Expense deleted", { variant: "info" });
  };

  const totalExpenses = expenses.reduce((sum, e) => sum + e.price, 0);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Expense Tracker
      </Typography>

      {/* Wallet Balance */}
      <WalletBalance wallet={wallet} onAddIncome={() => setShowIncomeModal(true)} />

      {/* Total Expenses */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Expenses</Typography>
              <Typography variant="h5">₹{totalExpenses}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Add Expense Button */}
      <Box sx={{ mt: 3, textAlign: "center" }}>
        <Button
          variant="contained"
          color="success"
          type="button"
          onClick={() => setShowExpenseModal(true)}
        >
          + Add Expense
        </Button>
      </Box>

      {/* Expense Modal */}
      <Dialog open={showExpenseModal} onClose={() => setShowExpenseModal(false)}>
        <DialogTitle>Add Expense</DialogTitle>
        <DialogContent>
          <ExpenseForm
            onAdd={(expense) => {
              const success = addExpense(expense);
              if (success) setShowExpenseModal(false);
            }}
          />
        </DialogContent>
      </Dialog>

      {/* Expense List & Charts */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <ExpenseList expenses={expenses} onDelete={deleteExpense} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PieChartView expenses={expenses} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BarChartView expenses={expenses} />
        </Grid>
      </Grid>

      {/* Income Modal */}
      <Dialog open={showIncomeModal} onClose={() => setShowIncomeModal(false)}>
        <DialogTitle>Add Income</DialogTitle>
        <DialogContent>
          <IncomeForm
            onAdd={(amount) => {
              addIncome(amount);
              setShowIncomeModal(false);
            }}
            onClose={() => setShowIncomeModal(false)}
          />
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export default App;


