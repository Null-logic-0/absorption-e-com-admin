"use client";
import { Tooltip } from "antd";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

function SalesChart({ data }) {
  return (
    <div className="w-full mx-auto bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Sales Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{ fill: "rgb(75, 85, 99)" }} // Tailwind gray-700
            tickLine={{ stroke: "rgb(229, 231, 235)" }} // Tailwind gray-200
          />
          <YAxis
            unit="$"
            tick={{ fill: "rgb(75, 85, 99)" }} // Tailwind gray-700
            tickLine={{ stroke: "rgb(229, 231, 235)" }} // Tailwind gray-200
          />
          <CartesianGrid strokeDasharray="4 4" stroke="rgb(229, 231, 235)" />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgb(255, 255, 255)", // Tailwind white
              border: "1px solid rgb(229, 231, 235)", // Tailwind gray-200
              borderRadius: "0.5rem", // Tailwind rounded-lg
              color: "rgb(75, 85, 99)", // Tailwind gray-700
            }}
          />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke="rgb(34, 197, 94)" // Tailwind green-500
            fill="rgba(34, 197, 94, 0.2)" // Tailwind green-500 with opacity
            strokeWidth={2}
            name="Total sales"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;
