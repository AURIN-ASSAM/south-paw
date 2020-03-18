import React from 'react';
import { useState } from 'react';
import { ContextConsumer } from '../context';
import { Link } from 'react-router-dom';
const Cart = (props) => {
    const calculateGrandTotal = (v) => {
        let total = 0;
        for (let i = 0; i < v.myCart.length; i++) {
            total += v.myCart[i].product.price * v.myCart[i].amount;
        }
        return total;
    }
    return (
        <div>
            <ContextConsumer>
                {
                    (v) => {

                        return (
                            <div>
                                {
                                    v.myCart.map((each) => {
                                        return (
                                            <div className='row'>
                                                <div className='col-md-3 col-sm-6'>
                                                    <img src={each.product.image} class="img-thumbnail finalImg" alt="Cinque Terre" />

                                                </div>
                                                <div className='col-md-3 col-sm-6'>
                                                    <h6>Total Quantity: <strong>{each.amount}kg</strong> </h6>
                                                </div>
                                                <div className='col-md-3 col-sm-6'>
                                                    <h6>price: &#8377; {each.amount * each.product.price}</h6>
                                                </div>
                                                <div className='col-md-3 col-sm-6'><button className='btn btn-link' onClick={() => { v.deleteMyCart(each.product) }}>Remove from cart</button></div>
                                                <div style={{ position: 'relative', width: '100%', height: '0.1rem', background: '#e3ccb8' }}></div>
                                            </div>
                                        )
                                    })

                                }
                                {
                                    v.myCart.length === 0 ? (
                                        <div> Cart is Empty</div>
                                    ) : (
                                            <div className='col-md-3 col-sm-6'>
                                                <div className='col-md-3 col-sm-6'>
                                                    <h6 style={{ color: '#5091fa' }}><strong>+</strong> delevery Charges:&#8377;{v.delevaryCharge}</h6>
                                                </div>
                                                <div>
                                                    <h4>Grand Total:&#8377;{calculateGrandTotal(v) + v.delevaryCharge} </h4>
                                                </div>
                                                {
                                                    v.isLogedIn ? (
                                                        <div>Log in</div>
                                                    ) : (
                                                            <div><Link to='/login'>
                                                                <button className='btn btn-link'>Log in/signup to Buy</button>
                                                            </Link></div>
                                                        )
                                                }
                                            </div>
                                        )
                                }


                            </div>
                        )

                    }
                }
            </ContextConsumer>
        </div>
    )
}
export default Cart;