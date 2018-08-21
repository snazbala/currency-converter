export default (state = {}, action) => {
    switch (action.type) {
        case 'EUR_RATE':
            return {
                ...state,
                euro: action.payload,
            }
        case 'CAD_RATE':
            return {
                ...state,
                canadianDollar: action.payload,
            }
        case 'GBP_RATE':
            return {
                ...state,
                pound: action.payload,
            }
    default:
        return state
    }
};