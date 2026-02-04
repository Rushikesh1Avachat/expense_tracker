import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

const WalletBalance = ({ wallet, onAddIncome }) => {
  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Wallet Balance: ₹{wallet}</Typography>
          <Button variant="contained" color="primary" type="button" onClick={onAddIncome}>
            + Add Income
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WalletBalance;


