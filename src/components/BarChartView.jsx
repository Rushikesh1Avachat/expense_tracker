import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

 function BarChartView({ expenses }) {
  const data = Object.values(
    expenses.reduce((acc, e) => {
      acc[e.category] = acc[e.category] || {
        name: e.category,
        amount: 0
      };
      acc[e.category].amount += e.price;
      return acc;
    }, {})
  );

  return (
    <BarChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="amount" />
    </BarChart>
  );
}
export default BarChartView