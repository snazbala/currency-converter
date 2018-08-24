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

// this gets re-rendered every time a new currency rate is added :(
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
  // pass in the function as a function, not a function call. Let
  // Amount.js do the calling.
  constructor(props) {
    super(props);
    this.state = {
      prefix: 'converts to',
    };
  }

  componentDidMount() {
    this.props.initializeCurrencyRates();
  }

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
