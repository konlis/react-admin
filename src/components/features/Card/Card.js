import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../Ordering/Ordering.scss'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const CardTable = () => (
    <div className={styles.component}>
        <Card >
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    TABLE ID
                </Typography>
                <Typography variant="h6" component="h1">
                    Active Orders:
                </Typography>
                <Typography color="textSecondary">
                    Order ID:

                </Typography>

                <Typography color="textSecondary">
                    All:
                </Typography>
                <Typography variant="h6" component="h1">
                    READY Orders:
                </Typography>
            </CardContent>
            <CardActions>
                <Button color='info' size="small">
                    <Link to={`${process.env.PUBLIC_URL}/Ordering/new`}>NewOrder</Link>
                </Button>
                <Button>
                    <Link to={`${process.env.PUBLIC_URL}/Ordering/order/ :id`}>Order id</Link>
                </Button>
            </CardActions>
        </Card>
    </div>
);

export default CardTable;