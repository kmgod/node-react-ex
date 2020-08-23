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

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '강민신',
  'birthday': '650128',
  'gender': '남자',
  'job': '사업가'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '이세인',
  'birthday': '720223',
  'gender': '여자',
  'job': '회사원'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '강체로',
  'birthday': '120504',
  'gender': '아이',
  'job': '초딩생'
}]
class App extends Component {
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
            { customers.map(c => { return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />);}) }
        </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles) (App);
