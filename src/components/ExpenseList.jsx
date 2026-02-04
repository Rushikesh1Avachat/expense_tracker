import React from "react";
import { List, ListItem, ListItemText, Card, CardContent } from "@mui/material";

const ExpenseList = ({ expenses }) => {
  if (!expenses.length) return null;

  return (
    <Card>
      <CardContent>
        <List>
          {expenses.map((e) => (
            <ListItem key={e.id}>
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


