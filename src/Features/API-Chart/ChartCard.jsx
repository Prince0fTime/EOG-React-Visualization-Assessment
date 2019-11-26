import React, { useState, useEffect } from "react";
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label} from 'recharts';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { toast } from 'react-toastify';

const GET_MEASUREMENTS = gql`
  query getMeasurements($metricInfo: MeasurementQuery) {
    getMeasurements( input: $metricInfo)
    {
          metric
          at
          value
          unit
        }    
  }
`;

export default (props) => {
  const dataName = props.daName;
  const dataQ = {metricName: dataName ,after: "1574793285580"}
  // const dataQ = {metricName: dataName ,before: "1574793285580"}
  // const dataQ = "injValveOpen"

  const { loading, error, data } = useQuery(GET_MEASUREMENTS,{
    variables: { ["metricInfo"]: dataQ },
  });

  if (loading) return (
    toast.info(`loading Please wait..`),
    <p>loading...</p>
  );
  if (error) {
console.error(error)
    return (
    toast.error(`Error Received: ${error}`),
    <p>Error...</p>
  );
}
    const {getMeasurements} = data;

  const {unit} = getMeasurements[0]

  // useEffect(() => {
  //   setInterval(()=>{
  //     var d1 = new Date();
  //     var d1t2 = parseInt(d1.getTime()/1000);

  //     console.log(dataName);
  //     var dt = new Date();
  //     dt.setMinutes( dt.getMinutes() - 30 );
  //     console.log(JSON.stringify(dt))
  //     console.log(d1t2)
  //   },3000)
  // })


  return (
    <React.Fragment>
          <h2>{dataName}</h2>
          <ResponsiveContainer  width="100%" height={280} >
      <LineChart data={getMeasurements} margin={{ top: 4, right: 0, left: 5, bottom: 5 }}>
        <XAxis dataKey="at">
          <Label value={dataName} offset={-6} position="insideBottomLeft" />
        </XAxis>
        <YAxis offset={6} label={{ value: `units measured in ${unit}`, angle: -90, position: 'insideBottomLeft' }} />

        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" dot={false} />
      </LineChart>
      </ResponsiveContainer>
      </React.Fragment>
  );
};