import { PieChart, Pie, Cell, Tooltip } from "recharts";

 function PieChartView({ expenses }) {
  const data = Object.values(
    expenses.reduce((acc, e) => {
      acc[e.category] = acc[e.category] || {
        name: e.category,
        value: 0
      };
      acc[e.category].value += e.price;
      return acc;
    }, {})
  );

  return (
    <PieChart width={300} height={300}>
      <Pie data={data} dataKey="value" nameKey="name" />
      <Tooltip />
    </PieChart>
  );
}
export default PieChartView