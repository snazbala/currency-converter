export default (state = {amount: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT_AMOUNT':
            return {
                amount: state.amount + 1
            }
        case 'DECREMENT_AMOUNT':
            return {
                amount: state.amount - 1
            }
    default:
        return state
    }
}