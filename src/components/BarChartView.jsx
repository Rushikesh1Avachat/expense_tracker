import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const BarChartView = ({ expenses }) => {
  const data = ["Food", "Travel", "Entertainment"].map((cat) => ({
    name: cat,
    value: expenses.filter((e) => e.category === cat).reduce((sum, e) => sum + e.price, 0),
  }));

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Expense Trends
        </Typography>
        <BarChart width={250} height={250} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </CardContent>
    </Card>
  );
};

export default BarChartView;
