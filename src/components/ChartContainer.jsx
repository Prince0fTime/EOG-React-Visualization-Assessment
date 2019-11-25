import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ChartCard from './ChartCard'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
}));

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
const dataNames =  [
  "injValveOpen",
  "oilTemp",
  "tubingPressure",
  "flareTemp",
  "casingPressure",
  "waterTemp"
];
export default () => {
  const classes = useStyles(0);
  const {metric, unit} = data[0]
  return (
    <div className={classes.root}>
    {dataNames.map((dataName) => (
      <Grid item xs={5} sm={6}>
      <ChartCard daName={dataName}/>
    </Grid>
  ))}
    </div>
  );
};