import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from './CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ChartCard from './ChartCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    margin: '5% 0.5%',
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
// const dataNames = ['injValveOpen', 'oilTemp', 'tubingPressure', 'flareTemp', 'casingPressure', 'waterTemp'];
// const dataNames = ['injValveOpen', 'oilTemp', 'tubingPressure'];

const dataNames = ['waterTemp'];

export default () => {
  const classes = useStyles(0);
  const { metric, unit } = data[0];

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader title="Test Data all setup. Now What?" />
        <CardContent>
          <Grid container spacing={3}>
            {dataNames.map(dataName => (
              <Grid item xs={4}>
                <ChartCard daName={dataName} />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
