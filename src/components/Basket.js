import React, { Component } from 'react';
import util from '../util'
export default class Basket extends Component {
    render() {
        const { cartItems } = this.props;

        return (
            <div className="alert alert-info">
                {cartItems.length === 0
                    ? "Your Cart is empty" :
                    <div>Your Cart <hr /></div>
                }
                {cartItems.length > 0 &&
                    <div>
                        <ul style={{ marginLeft: -25 }}>
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <b>{item.title}</b>
                                    <button style={{ float: 'right' }} className="btn btn-danger btn-xs"
                                        onClick={(e) => this.props.handleRemoveFromCart(e, item)}>Remove </button>
                                    <br />
                                    {item.count} X {util.formatCurrency(item.price)}
                                </li>))
                            }
                        </ul>

                        <b>Total Amount: {util.formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}
                        </b>
                    </div>
                }
            </div>
        )
    }
}
