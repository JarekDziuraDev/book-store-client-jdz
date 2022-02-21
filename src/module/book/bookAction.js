import getBooksService from './bookService';

const getBooksAction = () => async dispatch => {
    try {
        const books = await getBooksService();
        // console.log("tutaj" + books);
        dispatch({
            type: 'BOOKLIST',
            payload: books.data
        });
    } catch (err) {
        console.log(err);
    }
};

export default getBooksAction;
