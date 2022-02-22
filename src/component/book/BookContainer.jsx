import { Box } from '@material-ui/core';
import React, { useEffect } from 'react';
import BookFilter from './BookFilter';
import styles from './BookStyles';
import { useDispatch, useSelector } from 'react-redux';
import getBooksAction from '../../module/book/bookAction.js';
import { getBooksSelector } from '../../module/book/bookSelector.js';

const BookContainer = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getBooksAction());
    },[dispatch])
    
    const books = useSelector(getBooksSelector);
    console.log(books);

    const classes = styles();
    return (
        <Box className={classes.bookContainer}>
            <BookFilter />
            <Box className={classes.bookList}>
                Here we will display all books!
                {}
            </Box>
        </Box>
    );
};

export default BookContainer;
