import React from 'react';
import styles from './Header.scss';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';


export default function ButtonAppBar() {

    return (
        <div className={styles.root}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton edge='start' className={styles.menuButton} color='inherit' aria-label='menu'>
                        
                    </IconButton>
                    <Typography variant='h6' className={styles.title}>
                        <Button variant='contained' size='small' color='secondary'>
                            <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>
                                Dashboard
                            </NavLink>
                        </Button>
                    </Typography>
                    <Button color='inherit'>Login
                        <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'></NavLink>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}