import {getCurrencyRatesApi} from '../api/currencyRates';

const _euroRateAction = (currencyRates) => ({
    type: 'EUR_RATE',
    payload: currencyRates['USDEUR'],
});

const _canadianDollarRateAction = (currencyRates) => ({
    type: 'CAD_RATE',
    payload: currencyRates['USDCAD'],
});

const _poundRateAction = (currencyRates) => ({
    type: 'GBP_RATE',
    payload: currencyRates['USDGBP'],
});

export const getCurrencyRatesAction = () => (dispatch) => {
    getCurrencyRatesApi()
        .then((response) => {
            dispatch(_euroRateAction(response))
            dispatch(_canadianDollarRateAction(response))
            dispatch(_poundRateAction(response))
        })
}