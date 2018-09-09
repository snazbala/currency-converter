import React from 'react';

export const Currency = ({displayName, amount, currencyRate}) => (
    <p>{(amount * currencyRate).toFixed(2)} {displayName}</p>
);