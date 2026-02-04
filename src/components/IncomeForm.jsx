import { useState } from "react";

function IncomeForm({ onAdd, onClose }) {
  const [amount, setAmount] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!amount) return;
    onAdd(Number(amount));
    setAmount("");
    onClose();
  };

  return (
    <form onSubmit={submit} className="modal-form">
      <h2>Add Balance</h2>

      <input
        type="number"
        placeholder="Income Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button type="submit">Add Balance</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
}
export default IncomeForm