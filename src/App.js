import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useSnackbar } from "notistack";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography
} from "@mui/material";

import WalletBalance from "./components/WalletBalance";
import ExpenseForm from "./components/ExpenseForm";
import IncomeForm from "./components/IncomeForm";
import ExpenseList from "./components/ExpenseList";
import PieChartView from "./components/PieChartView";
import BarChartView from "./components/BarChartView";

Modal.setAppElement("#root");

 function App() {
  const { enqueueSnackbar } = useSnackbar();

  const [wallet, setWallet] = useState(
    Number(localStorage.getItem("wallet")) || 5000
  );
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("expenses")) || []
  );

  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showIncomeModal, setShowIncomeModal] = useState(false);

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

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* ONLY h1 */}
      <Typography variant="h4" component="h1" gutterBottom>
        Expense Tracker
      </Typography>

      <WalletBalance
        wallet={wallet}
        onAddIncome={() => setShowIncomeModal(true)}
        onAddExpense={() => setShowExpenseModal(true)}
      />

      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} md={6}>
          <ExpenseList expenses={expenses} onDelete={deleteExpense} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <PieChartView expenses={expenses} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <BarChartView expenses={expenses} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

 <Modal isOpen={showExpenseModal}>
  <ExpenseForm
    onClose={() => setShowExpenseModal(false)}
    onAdd={addExpense}
  />
</Modal>


      <Modal isOpen={showIncomeModal}>
        <IncomeForm
          onClose={() => setShowIncomeModal(false)}
          onAdd={addIncome}
        />
      </Modal>
    </Container>
  );
}
export default App