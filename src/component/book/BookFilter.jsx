import { Box, Paper } from '@material-ui/core';
import React from 'react';
import styles from './BookStyles';

const BookFilter = () => {
    const classes = styles();
    return(
        <Box className={classes.bookFilter}>
            <Paper className={classes.bookFilterPaper}>
                book filter
            </Paper>
        </Box>
    );
}

export default BookFilter;