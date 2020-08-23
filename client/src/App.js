import React, { Component } from 'react';
import Customer from './Components/Customer'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/Styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})


class App extends Component {

  state = {
    customers: ""
  }
  
  componentDisMount() {
    this.callApi()
    .then(res => this.SVGElementInstanceList({customers: res}))
    .catch(err => console.log(err));
  }
  
  CallApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>image</TableCell>
              <TableCell>name</TableCell>
              <TableCell>birthday</TableCell>
              <TableCell>gender</TableCell>
              <TableCell>job</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { this.state.customers ? this.state.customers.map(c => { return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />);})
              : "" }
        </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles) (App);
