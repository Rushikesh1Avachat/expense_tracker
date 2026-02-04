import React from "react";
import { List, ListItem, ListItemText, Card, CardContent, Typography } from "@mui/material";

const ExpenseList = ({ expenses }) => {
  if (!expenses.length) return null;

  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        {/* Add this Typography heading so Cypress can find "Transactions" */}
        <Typography variant="h6" gutterBottom>
          Transactions
        </Typography>

        <List>
          {expenses.map((e) => (
            <ListItem key={e.id}>
              <ListItemText
                primary={`${e.title} - ₹${e.price}`}
                secondary={`${e.category} | ${e.date}`} // include date for Cypress
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ExpenseList;




