import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../Ordering/Ordering.scss'
import { Button } from '@material-ui/core';

const Ordering = () => (
    <div className={styles.component}>
        <h2>
            Ordering View
        </h2>
        <Button variant='outlined' size='small' color='secondary'>
        
            <Link to={`${process.env.PUBLIC_URL}/Ordering/new`}>NewOrder</Link>
        </Button>
        <Button variant='outlined' size='small' color='secondary'>
            <Link to={`${process.env.PUBLIC_URL}/Ordering/order/ :id`}>Order id</Link>
       </Button>
            
    </div>
);

export default Ordering;