import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import style from './Chart.module.scss';

export interface ChartProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Array<any>;
  title: string;
}

export const Chart: React.FC<ChartProps> = ({ data, title }) => (
  <div className={style.root}>
    <h3 className={style.title}>{title}</h3>
    <div className={style.chart}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 40,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);
