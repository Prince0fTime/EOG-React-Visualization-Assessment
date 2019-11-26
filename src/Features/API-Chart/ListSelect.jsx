import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import { toast } from 'react-toastify';
import { makeStyles } from '@material-ui/core/styles';

import React, { useState, useEffect } from 'react';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';


const client = new ApolloClient({
  uri: 'https://react.eogresources.com/graphql',
});
//Temporary Test values soon to be replaced/Removed
  const metricDataNames = ['injValveOpen', 'oilTemp', 'tubingPressure', 'flareTemp', 'casingPressure', 'waterTemp'];


  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 220,
      maxWidth: 400,
    }
  }));
  
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
  

  export default (props) => {
    const classes = useStyles(0);

  
    const { handleChange, SelectedDataName} = props;
  return (
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
            {metricDataNames.map(name => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={SelectedDataName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

  );

  }