import React, { Component } from 'react';
import Customer from './Components/Customer'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/Styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 800
  },
  progress: {
    margin: theme.spacing(2)
  }
})

/*
  1. constructor()
  2. componentWillMount()
  3. render()
  4. componentDidMount()


*/
class App extends Component {

  state = {
    customers: [],
    completed: 0
  }
  
  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.CallApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }
  
  CallApi = async () => {
    const url = '/api/customers';
    const response = await fetch(url);
    console.log(url);
    const body = await response.json();
    console.log(body);
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
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
            {this.state.customers ? this.state.customers.map(c => { return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />);}) : 
            <TableRow>
              <TableCell colspan="6" align="center">
                <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
              </TableCell>
            </TableRow> 
            }
        </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
