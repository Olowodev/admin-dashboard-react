import { PieChart, Pie, Tooltip, Cell } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 }
];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 }
];

const Piechart = () => {

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <PieChart width={300} height={300}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data01}
        outerRadius={80}
        fill="#8884d8"
        label
      >
      {data01.map((entry, index) => (
        <Cell key={index} fill={COLORS[index % COLORS.length]} />
      ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

export default Piechart;