import React from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label} from 'recharts';

const data = [
  {
    metric: 'injValveOpen',
    at: 1574561322794,
    value: 64.17,
    unit: '%',
  },
  {
    metric: 'injValveOpen',
    at: 1574561324094,
    value: 66.55,
    unit: '%',
  },
  {
    metric: 'injValveOpen',
    at: 1574561325394,
    value: 65.76,
    unit: '%',
  },
  {
    metric: 'injValveOpen',
    at: 1574561326694,
    value: 64.94,
    unit: '%',
  },
  {
    metric: 'injValveOpen',
    at: 1574561327994,
    value: 90.78,
    unit: '%',
  },
];
export default (props) => {
  const {metric, unit} = data[0]
  const dataName = props.daName;
  return (
    <React.Fragment>
          <h2>{dataName}</h2>
          <ResponsiveContainer  width="100%" height={280} >
      <LineChart data={data} margin={{ top: 4, right: 0, left: -25, bottom: 5 }}>
        <XAxis dataKey="at">
          <Label value={dataName} offset={-6} position="insideBottomLeft" />
        </XAxis>
        <YAxis offset={6} label={{ value: `units measured in ${unit}`, angle: -90, position: 'Left' }} />

        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" />
      </LineChart>
      </ResponsiveContainer>
      </React.Fragment>
  );
};