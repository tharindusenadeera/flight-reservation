import React, { Component, Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

class FlightSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const classes = makeStyles(theme => ({
        formControl: {
          margin: theme.spacing(2),
          minWidth: 300,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));

    return (
      <Fragment>
        <Typography variant="h6" gutterBottom>
          Search Flights
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">Class</InputLabel>
              <Select native onChange={() => ({})}>
                <option value="" />
                <option value={"economic"}>Economic</option>
                <option value={"business"}>Business</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">Departure</InputLabel>
              <Select native onChange={() => ({})}>
                <option value="" />
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">Arrival</InputLabel>
              <Select native onChange={() => ({})}>
                <option value="" />
              </Select>
            </FormControl>
          </Grid>
          {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={1}
          onChange={() => ({})}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={1}
          onChange={() => ({})}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={1}
          onChange={() => ({})}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider> */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveAddress" value="yes" />
              }
              label="Use this address for payment details"
            />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default FlightSearch;
