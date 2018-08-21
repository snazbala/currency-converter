export const incrementAction = () => (dispatch) => {
    dispatch({
        type: 'INCREMENT_AMOUNT',
    });
};

export const decrementAction = () => (dispatch) => {
    dispatch({
        type: 'DECREMENT_AMOUNT',
    });
};