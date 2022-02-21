import React from 'react';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import Header from './Header';

const PropTypes = {
    children: PropTypes.node.isRequired
}

const Layout = ({ children }) => {
    return (
        <Box>
            <Box>
                <Header />
            </Box>
            <Box mt={8} ml={5}>
                {children}
            </Box>
        </Box>
    );
};

Layout.PropTypes = PropTypes;
export default Layout;
