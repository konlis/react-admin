import React from 'react';
//import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './PageNav.scss';
import Grid from '@material-ui/core/Grid';
//import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';

const PageNav = () => (
    <div className={styles.component}>     
        <Container>
        <Grid  item xs={2} >
            <Button variant='contained' size='small' color='secondary'>
                <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Dashboard</NavLink>
            </Button>
        </Grid>
        <Grid   item xs={2} >
            <Button variant='outlined' size='small' color='secondary'>
                <NavLink to={`${process.env.PUBLIC_URL}/Ordering`} activeClassName='active'>Ordering</NavLink>
            </Button>
        </Grid>
        <Grid   item xs={2} >
            <Button variant='outlined' size='small' color='secondary'>
                <NavLink to={`${process.env.PUBLIC_URL}/Kitchen`} activeClassName='active'>Kitchen</NavLink>
            </Button>
        </Grid>
        <Grid   item xs={2} >
            <Button variant='outlined' size='small' color='secondary'>
                <NavLink to={`${process.env.PUBLIC_URL}/Tables`} activeClassName='active'>Tables</NavLink>
            </Button>
        </Grid>
        <Grid   item xs={2} >
            <Button variant='outlined' size='small' color='secondary'>
                <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
            </Button>
        </Grid>      
        </Container>           
    </div >
);

export default PageNav;