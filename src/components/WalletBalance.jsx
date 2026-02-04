import { Card, CardContent, Button, Typography, Stack } from "@mui/material";

 function WalletBalance({ wallet, onAddIncome, onAddExpense }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          Wallet Balance: ₹{wallet.toFixed(2)}
        </Typography>

        <Stack direction="row" spacing={2} mt={2}>
          <Button variant="contained" onClick={onAddIncome}>
            + Add Income
          </Button>

          <Button variant="outlined" onClick={onAddExpense}>
            + Add Expense
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
export default WalletBalance