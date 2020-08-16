import React from 'react'
import cartWomen from '../../images/cartPageGirl.png';
import {ProductContext} from '../../context';
import { useContext } from 'react';
import CartList from './CartList';
import CartTotals from './CartTotals';
import cartMobile from '../../images/cartMobile.png'

function CartColumns() {
    const context = useContext(ProductContext);
    
    return (
        <>
            
            <div className="container">
                <div className="row">                
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 my-4 text-center text-title">
                        <h1 className="font-weight-bold text-purple">
                            <strong>Your Cart</strong>
                        </h1>
                    </div>
                    <div className="col-12 d-block d-sm-none justify-content-center d-flex">
                        <img src={cartMobile} alt="" className="img-fluid mb-3"/>
                    </div>
                </div>
            </div>
            <div className="container mt-lg-4">
                    <div className="row rounded mb-4 text-center ">
                        <div className="col-lg-5 col-md-6 col-sm-12 col-12"> 
                            <div className="pink-bg">
                                <CartList value={context}/>
                            </div>                            
                            <CartTotals value={context}/>            
                        </div>                    
                        <div className="col-lg-7 col-md-6 align-self-center d-none d-md-block">
                            <img src={cartWomen} alt="" className="align-self-center img-fluid"/>
                        </div>
                    </div>
            </div>
            {/* <CartList value={context}/> */}
        </>
    )
}

export default CartColumns
