import React from 'react';
import CartItems from '../CartItems/CartItems';
import Total from '../Total/Total';
class Cart extends React.Component {

    render() {


        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            return <CartItems {...this.props} key={idx} feature={feature} idx={idx} />
        });
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <div>{summary}</div>
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                        <Total selected={this.props.selected} />
                    </div>
                </div>
            </section>
        )
    }
}
export default Cart;