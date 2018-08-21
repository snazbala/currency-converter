import React from 'react';
import {connect} from 'react-redux';
import {incrementAction, decrementAction} from '../actions/amount';

class Amount extends React.Component {
    increment = () => {
        this.props.increment();
    }

    decrement = () => {
        this.props.decrement();
    }

    render() {
        let {
            amount,
            currencyRates,
        } = this.props;
        return (
            <div>
                <span>US Dollar: {amount}</span>
                <button type="button" onClick={this.increment}>+</button>
                <button type="button" onClick={this.decrement}>_</button>
                {this.props.children(amount, currencyRates)}
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    amount: state.amount.amount,
    currencyRates: state.currencyRates,
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(incrementAction()),
    decrement: () => dispatch(decrementAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Amount);