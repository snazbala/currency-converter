import React from 'react';

export const Currency = ({displayName, amount, currencyRate}) => (
    <p>{amount * currencyRate} {displayName}</p>
);