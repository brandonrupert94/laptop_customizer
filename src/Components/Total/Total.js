import React from 'react';

class Total extends React.Component {
    render() {

        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
        );

        return (
            <>
                {USCurrencyFormat.format(total)}
            </>
        )
    }
}
export default Total;