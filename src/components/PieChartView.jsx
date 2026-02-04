import { PieChart, Pie, Tooltip, Cell } from "recharts";

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
    <div>
      <h2>Expense Summary</h2>
      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" nameKey="name">
          {data.map((_, i) => (
            <Cell key={i} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
export default PieChartView