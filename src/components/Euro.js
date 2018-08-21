import React from 'react';

export const Euro = ({amount, prefix, currencyRate}) => (
    <p>{prefix} {amount * currencyRate} Euros</p>
);