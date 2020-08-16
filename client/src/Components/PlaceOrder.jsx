import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function PlaceOrder() {
    return (
        <Link to="/cart">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <PlaceOrderButton className=" btn font-weight-bold mx-auto"><i className="fas fa-arrow-right text-white" />&nbsp;&nbsp;&nbsp;Place Order</PlaceOrderButton>
                </div>
            </div>            
        </Link>
    )
}

const PlaceOrderButton = styled.button`
    text-decoration-line: none !important;    
    border-radius: 60px !important;
    padding: 0.3rem 1.9rem !important;
    background: var(--mainBlue);
    color: white;
    &:hover{
        background: var(--lightBlue);
        color: var(--mainWhite);        
    }
`;

export default PlaceOrder;
