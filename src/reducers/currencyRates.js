export default (state = {}, action) => {
    switch (action.type) {
        case 'CURRENCIES':
            return {
                ...state,
                euro: action.payload.euro,
                canadianDollar: action.payload.canadianDollar,
                pound: action.payload.pound,
            }
    default:
        return state
    }
};