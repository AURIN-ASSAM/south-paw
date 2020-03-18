import React from 'react';
import { useState } from 'react';
import { ContextConsumer } from '../context';
import { Link } from 'react-router-dom';
import '../styles/finalbuy.css';
const FinalBuy = () => {
    const [singleProduct, setSingleProduct] = useState([]);
    const [amountSingle, setAmountSingle] = useState(1);

    return (
        <div>
            <ContextConsumer>
                {
                    (v) => {
                        if (v.product.length === 0) {
                            setTimeout(() => {
                                try {
                                    document.getElementById('getBack').click();
                                } catch (e) { }
                            }, 2000);
                            return (<div>
                                <Link to='/'>
                                    <div id='getBack' hidden></div>
                                </Link>
                                <h1>404 error</h1></div>)
                        }
                        else {
                            setSingleProduct(v.product);
                            setAmountSingle(v.amountSingle);
                            return (
                                <div>
                                    <div className='row'>
                                        <div className='col-md-3 col-sm-6'>
                                            <img src={v.product.image} class="img-thumbnail finalImg" alt="Cinque Terre" />
                                        </div>
                                        <div className='col-md-3 col-sm-6'>
                                            <h6>Total Quantity: <strong>{amountSingle}kg</strong> </h6>
                                        </div>
                                        <div className='col-md-3 col-sm-6'>
                                            <h6>price: &#8377; {amountSingle * v.product.price}</h6>
                                        </div>
                                        <div className='col-md-3 col-sm-6'>
                                            <h6 style={{ color: '#5091fa' }}><strong>+</strong> delevery Charges:&#8377;{v.delevaryCharge}</h6>
                                        </div>
                                        <div className='col-md-3 col-sm-6'>
                                            <h6 style={{ color: 'black' }}><strong>Total price:</strong>&#8377;{amountSingle * v.product.price + v.delevaryCharge}</h6>
                                        </div>
                                        <div className='col-md-3 col-sm-6'>
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
                                    </div>
                                    <hr></hr>
                                </div>
                            )
                        }
                    }
                }
            </ContextConsumer>
        </div>
    )
}
export default FinalBuy;