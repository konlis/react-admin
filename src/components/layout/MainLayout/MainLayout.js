import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../layout/Header/Header';
//import Box from '@material-ui/core/Box';


const MainLayout = ({ children }) => (
    
        <div>
            <Header />
            {children}
        </div>
        
    
);

MainLayout.propTypes = {
    children: PropTypes.node,
};

export default MainLayout;

