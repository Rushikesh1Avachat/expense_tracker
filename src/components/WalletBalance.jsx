import { Card, CardContent, Typography, Button } from "@mui/material";

 function WalletBalance({ wallet, onAddIncome }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          Wallet Balance: ₹{wallet.toFixed(2)}
        </Typography>

        <Button
          type="button"
          variant="contained"
          onClick={onAddIncome}
          sx={{ mt: 2 }}
        >
          + Add Income
        </Button>
      </CardContent>
    </Card>
  );
}
export default WalletBalance