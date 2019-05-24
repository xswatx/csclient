import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 400,
  },
});

const rows = [{
  id:'010-000-0000',
  date:'05-08', 
  device:[{
    id:'A00000000',
    mode:'일반'
  },{
    id:'A00000001',
    mode:'절전'
  },{
    id:'A00000002',
    mode:'절전'
  }]},
];

function MemberInfo(props) {
  const { classes } = props;

  return (
    <fieldset>
    <legend>회원관리</legend>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>회원 id</TableCell>
            <TableCell>가입일</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableHead>
            <TableRow>
            <TableCell>기기id</TableCell>
            <TableCell>모드</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map(member => (member.device.map(data=>(
            <TableRow key={data.id}>
            <TableCell>{data.id}</TableCell>
            <TableCell>{data.mode}</TableCell>
          </TableRow>
          ))))}
        </TableBody>
        
      </Table>
    </Paper>
    </fieldset>
  );
}

MemberInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MemberInfo);