import React, { useState } from "react";

const IncomeForm = ({ onAdd, onClose }) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) return;

    onAdd(Number(amount));
    setAmount("");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <input
        type="number"
        name="income"
        placeholder="Income Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        style={{ flex: 1, padding: "0.5rem" }}
      />

      <button
        type="submit"
        style={{
          flex: "1 0 100%",
          padding: "0.5rem",
          backgroundColor: "#1976d2",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add Balance
      </button>
    </form>
  );
};

export default IncomeForm;


