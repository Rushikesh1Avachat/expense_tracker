import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

 function BarChartView({ expenses }) {
  const data = Object.values(
    expenses.reduce((acc, e) => {
      acc[e.category] = acc[e.category] || {
        category: e.category,
        amount: 0
      };
      acc[e.category].amount += e.price;
      return acc;
    }, {})
  );

  return (
    <div>
      <h2>Expense Trends</h2>
      <BarChart width={350} height={250} data={data}>
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" />
      </BarChart>
    </div>
  );
}
export default BarChartView
