import React from 'react';
//import PropTypes from 'prop-types';
import styles from '../Tables/Tables.scss'
import { Link } from 'react-router-dom';

const Tables = () => (
    <div className={styles.component}>
        <nav>
            <Link to={`${process.env.PUBLIC_URL}/Tables/booking/ :id`}>Book Table</Link>
            <Link to={`${process.env.PUBLIC_URL}/Tables/event/ :id`}>Event</Link>
        </nav>
        <h2>
            Table View
        </h2>
    </div>
);

export default Tables;