import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../Ordering/Ordering.scss'

const Ordering = () => (
    <div className={styles.component}>
        <h2>
            Ordering View
        </h2>
        <nav>
            <Link to={`${process.env.PUBLIC_URL}/Ordering/new`}>NewOrder</Link>
            <Link to={`${process.env.PUBLIC_URL}/Ordering/order/ :id`}>Order id</Link>
        </nav>
    </div>
);

export default Ordering;