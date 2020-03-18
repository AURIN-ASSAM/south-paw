import React from 'react';
import { useState } from 'react';
import { ContextConsumer } from '../context';
import '../styles/details.css';
import { Link } from 'react-router-dom';
const Details = (props) => {
    const [amount, setAmount] = useState(1);
    const [maxAmount, setMaxAmount] = useState(10);
    const [price, setPrice] = useState(null);
    const [inCart, setInCart] = useState(false);
    const [inCartBtn, setInCartBtn] = useState('btn btn-primary');


    const Buy = (p) => {
        console.log(p, amount);
    }
    const alreadyInMyCart = (p) => {
        let flag = false;
        for (let i = 0; i < p.myCart.length; i++) {
            if (p.product._id == p.myCart[i].product._id) {
                setInCart(true);
                setInCartBtn('btn btn-outline-secondary');
                flag = true;
                break;
            }
        }
        if (!flag) {
            setInCart(false);
            setInCartBtn('btn btn-primary');

        }
    }

    return (
        <div>
            <ContextConsumer>
                {
                    (v) => {
                        if (v.product.length === 0) {
                            setTimeout(() => {
                                document.getElementById('goback').click();
                            }, 100)
                            return (
                                <div style={{ padding: "4rem" }}><h1 style={{ color: 'red' }}>404 error</h1>
                                    <h6 style={{ textAlign: 'center' }}>Page not found</h6>
                                    <Link to='/'><button className='btn btn-link' id='goback'>Go Back</button></Link>
                                </div>
                            )
                        }
                        alreadyInMyCart(v);

                        return (
                            <div className='row'>
                                <div className='col-md-3 col-sm-6'>
                                    <img src={v.product.image} class="img-thumbnail" alt="Cinque Terre" />
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                    <h4 style={{ margin: '0.5rem' }}>{v.product.name}</h4>
                                    <div className='quantity' >
                                        <h6>Quantity</h6>
                                        <button type="button" class="btn btn-outline-info"
                                            onClick={() => {
                                                setAmount(amount === 1 ? 1 : amount - 1);
                                                v.amountSingleBuy(amount)
                                            }}>-</button>
                                        <button type="button" class="btn btn-default">{amount}kg</button>
                                        <button type="button" class="btn btn-outline-info"
                                            onClick={() => {
                                                setAmount(amount === maxAmount ? maxAmount : amount + 1);
                                                v.amountSingleBuy(amount + 1)
                                            }}
                                        >+</button>
                                        <button class={inCartBtn} style={{ marginLeft: '1rem' }} onClick={
                                            () => {
                                                if (inCart) {
                                                    v.deleteMyCart(v.product);
                                                    alreadyInMyCart(v)


                                                } else {
                                                    v.setMyCart(v.product, v.amountSingle)
                                                }

                                            }
                                        }>{inCart ? "Remove" : "Add to Cart"}</button>
                                        <Link to='/finalBuy'>
                                            <button class="btn btn-primary" style={{ marginLeft: '1rem' }} onClick={() => v.amountSingleBuy(amount)}>Buy</button>
                                        </Link>
                                        <div style={{ marginTop: '1rem' }}><h6>Price:{v.product.price}/kg</h6></div>
                                    </div>
                                </div>
                                <div className='col-md-4 col-sm-6'>
                                    <p className='description'>{v.product.description}</p>
                                </div>
                            </div>
                        )
                    }
                }
            </ContextConsumer>

        </div>
    )
}
export default Details;