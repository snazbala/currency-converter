import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Amount from './components/Amount';
import {Euro} from './components/Euro';
import {Pound} from './components/Pound';
import {CanadianDollars} from './components/CanadianDollars';
import {getCurrencyRatesAction} from './actions/currencyRates';

// instead of using each individual component, we should have one Currency component
// and then using a map, map over several times to generate the right children components
const getCurrencyConverters = (prefix) => (amount, currencyRates, children) => (
  <div>
    <Pound amount={amount} prefix={prefix} currencyRate={currencyRates.pound} />
    <Euro amount={amount} prefix={prefix} currencyRate={currencyRates.euro} />
    <CanadianDollars amount={amount} prefix={prefix} currencyRate={currencyRates.canadianDollar} />
    {children}
  </div>
);

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
          {getCurrencyConverters(this.state.prefix)}
        </Amount>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
    initializeCurrencyRates: () => dispatch(getCurrencyRatesAction())
})

export default connect(null, mapDispatchToProps)(App);
