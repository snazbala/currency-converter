import React from 'react';

export const CanadianDollars = ({amount, prefix, currencyRate}) => (
    <p>{prefix} {amount * currencyRate} Canadian Dollars</p>
);