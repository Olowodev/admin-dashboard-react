import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import './Chart.css'


const data = [
  {
    name: "January",
    total: 2400
  },
  {
    name: "February",
    total: 2210
  },
  {
    name: "March",
    total: 2290
  },
  {
    name: "April",
    total: 2000
  },
  {
    name: "May",
    total: 2181
  },
  {
    name: "May",
    total: 2181
  },
  {
    name: "May",
    total: 2181
  },
];

const Chart = () => {
  return (
    <div className="chart">
    <ResponsiveContainer width={640} height={400}>
        <AreaChart 
            width={640} 
            height={250} 
            data={data}
            margin={{ 
                top: 0, 
                right: 0, 
                left: 0, 
                bottom: 0 }}>
            <XAxis dataKey="name" stroke="gray" />
            <Tooltip cursor={false} />
            <Area type="monotone" dataKey="total" stroke="#3a70e8" fill="#fff" strokeWidth={4} />
        </AreaChart>
    </ResponsiveContainer>
    </div>
  );
}

export default Chart;