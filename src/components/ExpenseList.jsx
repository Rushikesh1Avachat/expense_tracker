import { Card, CardContent, Button } from "@mui/material";

 function ExpenseList({ expenses, onDelete }) {
  return (
    <Card>
      <CardContent>
        {expenses.map((e) => (
          <div key={e.id} data-testid="expense-item">
            <span>{e.title}</span> |{" "}
            <span>{e.category}</span> |{" "}
            <span>₹{e.price}</span>

            <Button
              size="small"
              color="error"
              onClick={() => onDelete(e.id)}
            >
              Delete
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
export default ExpenseList