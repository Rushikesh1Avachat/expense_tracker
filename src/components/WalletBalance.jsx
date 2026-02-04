import React from "react";

const WalletBalance = ({ wallet, onAddIncome }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        marginTop: "1rem",
      }}
    >
      <h2>Wallet Balance: ₹{wallet}</h2>

      <button
        type="button"
        onClick={onAddIncome}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        + Add Income
      </button>
    </div>
  );
};

export default WalletBalance;



