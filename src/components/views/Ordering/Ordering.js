import React from 'react';
//import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import styles from '../Ordering/Ordering.scss'
//import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '../../features/Table/Table';

const Ordering = () => (
    <div className={styles.component}>
        <Paper>
            <Table/>
        </Paper>
    </div>
);

export default Ordering;