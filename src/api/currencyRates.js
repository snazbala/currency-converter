import 'whatwg-fetch';

export const getCurrencyRatesApi = () => (
    fetch('http://www.apilayer.net/api/live?access_key=4cc60d552a472cbd97c2240c8722a5bf&format=1&currencies=EUR,CAD,GBP')
        .then((response) => response.json())
        .then((data) => data.quotes)
);