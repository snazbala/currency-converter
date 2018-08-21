import React from 'react';

export const Pound = ({amount, prefix, currencyRate}) => (
    <p>{prefix} {amount * currencyRate} Pounds</p>
);