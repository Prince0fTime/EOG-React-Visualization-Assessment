import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from './CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ChartCard from './ChartCard';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    margin: '5% 0.5%',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    maxWidth: 400,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  noLabel: {
    marginTop: theme.spacing(3),
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
const dataNames = ['injValveOpen', 'oilTemp', 'tubingPressure', 'flareTemp', 'casingPressure', 'waterTemp'];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
export default () => {
  const classes = useStyles(0);
  const { metric, unit } = data[0];
  const [SelectedDataName, setSelectedDataName] = React.useState([]);

  const handleChange = event => {
    setSelectedDataName(event.target.value);
  };
  // Hackey solution For scaling chart sizes Check what the current Amount of Selected items there are and it just size as necessary
  let numOfNames = SelectedDataName.length;
  let gridSize = 12;

  if (numOfNames >= 3) {
    gridSize = 4;
  } else if (numOfNames === 2) {
    gridSize = 6;
  }

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader title="Test Data all setup. Now What?" />

        <FormControl className={classes.formControl}>
          <InputLabel id="site-metric-Select">Work Site Metric Data</InputLabel>
          <Select
            labelId="site-metric-Select"
            id="work-site-metric-selecter"
            multiple
            value={SelectedDataName}
            onChange={handleChange}
            input={<Input />}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {dataNames.map(name => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={SelectedDataName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <CardContent>
          <Grid container spacing={3}>
            {SelectedDataName.map(dataName => (
              <Grid item xs={gridSize}>
                <ChartCard daName={dataName} />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
