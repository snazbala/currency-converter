import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Amount from './components/Amount';
import {Currency} from './components/Currency';
import {getCurrencyRatesAction} from './actions/currencyRates';

const CURRENCIES = [
  {
    currencyName: 'pound',
    displayName: 'Pounds',
  },
  {
    currencyName: 'euro',
    displayName: 'Euros',
  },
  {
    currencyName: 'canadianDollar',
    displayName: 'Canadian Dollars'
  }
];

const getCurrencyComponents = (currencies) => (amount, currencyRates, children) => {
  const currencyComponents = currencies.map(({currencyName, displayName}) => (
      <Currency
        displayName={displayName}
        amount={amount}
        currencyRate={currencyRates[currencyName]}
        key={displayName}
      />
  ))

  return (
    <div>
      {currencyComponents}
      {children}
    </div>
  )
}


class App extends Component {

  componentDidMount() {
    this.props.initializeCurrencyRates();
  }

  // pass in the function as a curried function. Let
  // Amount.js do the second call with the next arguments.
  render() {
    return (
      <div className="App">
        <h1>Currency Converter</h1>
        <Amount>
          {getCurrencyComponents(CURRENCIES)}
        </Amount>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
    initializeCurrencyRates: () => dispatch(getCurrencyRatesAction())
})

export default connect(null, mapDispatchToProps)(App);
