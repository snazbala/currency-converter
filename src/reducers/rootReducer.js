import { combineReducers } from 'redux';
import amount from './amount';
import currencyRates from './currencyRates';

export default combineReducers({amount, currencyRates});