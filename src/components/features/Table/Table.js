import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../Table/Table.scss';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(orderId, date, status, sum, orderIdButton) {
    return { orderId, date, status, sum, orderIdButton };
}
const rows = [
    createData('23456', 12.22, 6.0, 24),
    createData('68323', 237, 9.0, 37),
    createData('23548', 262, 16.0, 24),
    createData('07875', 305, 3.7, 67),
    createData('19544', 356, 16.0, 49),
];

const Tables = () => (
    <div className={styles.component}>
        <TableContainer component={Paper}>
            <Table  aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Order Number</TableCell>
                        <TableCell align="right">Order Date</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Sum</TableCell>
                        <TableCell align="right">Order ID</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.orderId}>
                            <TableCell component="th" scope="row">
                                {row.orderId}
                            </TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">{row.sum}</TableCell>
                            <TableCell align="right">
                                <Link to={`${process.env.PUBLIC_URL}/Ordering/order/ :id`}>Order</Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Card >
            <CardActions>
                <CardContent>
                    <Typography>
                        Take a new Order for Table number [ID]
                    </Typography>
                </CardContent>
                <Button size="small">
                    <Link to={`${process.env.PUBLIC_URL}/Ordering/new`}>CLICK</Link>
                </Button>
            </CardActions>
        </Card>
    </div>
);

export default Tables;