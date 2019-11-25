import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from './CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from './Avatar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label} from 'recharts';


const useStyles = makeStyles({
  card: {
    margin: '5% 5%',
  },
});
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
  const classes = useStyles(0);
  const {metric, unit} = data[0]
  const dataName = props.daName;
  return (
    <Card className={classes.card}>
      <CardHeader title="Test Data all setup. Now What?" />
      <CardContent>
      <h2>{dataName}</h2>
      <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="at">
          <Label value={dataName} offset={-6} position="insideBottomLeft" />
        </XAxis>
        <YAxis label={{ value: `units measured in ${unit}`, angle: -90, position: 'insideLeft' }} />

        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" />
      </LineChart>
      </CardContent>
    </Card>
  );
};