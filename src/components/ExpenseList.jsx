import {
  List,
  ListItem,
  ListItemText,
  IconButton
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function ExpenseList({ expenses, onDelete }) {
  return (
    <List>
      {expenses.map((exp) => (
        <ListItem
          key={exp.id}
          secondaryAction={
            <IconButton onClick={() => onDelete(exp.id)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText
            primary={exp.title}
            secondary={`₹${exp.price} • ${exp.category}`}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default ExpenseList;

