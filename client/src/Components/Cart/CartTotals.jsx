import React from 'react'
import {Link} from 'react-router-dom';
import orderTaken from '../../images/orderTaken.png';

function CartTotals({value}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-2 mx-auto col-sm-12 text-center">
                        <Link to='/products'>
                            <button className="btn btn-outline-danger mt-3 px-4 font-weight-bold" 
                                    type="button"
                                    onClick={() => clearCart()}>
                                Clear Cart
                            </button>
                        </Link>
                    </div>                    
                    <div className="col-12 my-2 col-sm-12 col-md-12 col-lg-12 text-center">
                        <hr/>
                        <div className="font-weight-bold text-purple">
                            <img src={orderTaken} alt=""/>
                            &nbsp;&nbsp;Order Taken
                        </div>
                        <hr/>
                        <div>
                            <p className="small-text text-purple font-weight-bold pb-0 mb-0">
                                SubTotal:<span className="text-pink text-center">&#8377;&nbsp;{cartSubTotal}</span><br/>
                                Tax: <span className="text-pink text-center">&#8377;&nbsp;{cartTax}</span>
                            </p>
                            <hr/>
                            <h5 className="font-weight-bold text-purple text-center">
                                GrandTotal: <span className="text-pink">&#8377;&nbsp;{cartTotal}</span>
                            </h5>                            
                        </div>                                                
                    </div>
                </div>
            </div>   
        </>
    )
}

export default CartTotals
