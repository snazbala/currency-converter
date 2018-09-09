import {getCurrencyRatesApi} from '../api/currencyRates';

const _saveCurrencies = (currencyRates) => ({
    type: 'CURRENCIES',
    payload: {
        pound: currencyRates['USDGBP'],
        canadianDollar: currencyRates['USDCAD'],
        euro: currencyRates['USDEUR'],
    }
});

export const getCurrencyRatesAction = () => (dispatch) => {
    getCurrencyRatesApi()
        .then((response) => dispatch(_saveCurrencies(response)))
}