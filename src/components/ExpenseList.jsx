import React from "react";
import { Card, CardContent, Typography, IconButton, List, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ExpenseList = ({ expenses, onDelete }) => {
  if (!expenses.length) return null;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Expense List
        </Typography>
        <List>
          {expenses.map((e) => (
            <ListItem key={e.id} secondaryAction={
              <IconButton edge="end" onClick={() => onDelete(e.id)}>
                <DeleteIcon />
              </IconButton>
            }>
              <ListItemText
                primary={`${e.title} - ₹${e.price}`}
                secondary={e.category}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ExpenseList;


