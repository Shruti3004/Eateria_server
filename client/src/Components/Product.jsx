import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductContext } from '../context';
import icon from '../images/cartIcon.png';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


function Product({product}) {
    
    const {handleDetail, addToCart, openModal} = useContext(ProductContext);

    
    return (
        <ProductWrapper className = "col-12 mx-auto col-md-6 col-lg-4 mt-3 mb-4">
            <div className="card">
                <div className="img-container" 
                onClick = {() => {handleDetail(product.id)}}
                >
                    <Link to="/details">
                        <img src={product.img} className="card-img-top img-fluid rounded" alt="product"/>
                    </Link>
                    {/* {console.log(product.id)} */}
                    <button className="card-btn btn" 
                        disabled={ product.inCart ? true: false} 
                        onClick={() => {
                                        addToCart(product.id); 
                                        openModal(product.id)
                                        }}>
                        {product.inCart? (<p className="text-capitalize mb-0" disabled>In cart</p>): (<img src={icon} className="img-fluid" alt="cart"/>)}
                    </button>
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-between font-weight-bold mb-0 pb-0">
                                    <p className="align-self-center mb-0 pb-0 font-weight-bold text-purple">{product.category === "1" ? (<i className="fas fa-dot-circle text-success"/>) : (<i className="fas fa-dot-circle text-danger"/>)}&nbsp;{product.title}<sup>&reg;</sup></p>
                        <h6 className=" mb-0">
                            <span className="mr-1 font-weight-bold pb-0 text-pink">
                                &#8377; {product.price}
                            </span>
                        </h6>
                    </div>
                    <hr />
                    <p className="text-muted delivery-time py-0 my-0">
                        Expected Time: {product.time}
                    </p>
                </div>
            </div>
        </ProductWrapper>
    )
}

Product.propTypes = {
    product:PropTypes.shape(
        {
            id: PropTypes.number,
            img: PropTypes.string,
            title: PropTypes.string,
            price: PropTypes.number,
            inCart: PropTypes.bool,
            time: PropTypes.string
        }
    ).isRequired
}

const ProductWrapper = styled.div `
    .card{
        border-color: transparent;
        transition: all 1s linear;
    }
    .card-footer{
        background: #F0F4F8;
        border-top: transparent;
        transition: all 1s linear;
    }
    &:hover{
        .card{
            border: 0.04rem solid rgba(0,0,0,0.2);
            box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.4);
        }
        .card-footer{
            background: rgba(247,247,247);
        }
    }
    .img-container{
        position: relative;
        overflow: hidden;
    }
    .card-img-top{
        transition: all 0.1s linear;
    }
    .img-container:focus .card-img-top{
        transform: scale(1.3);
    }
    .card-btn{
        position: absolute ;
        bottom:0 ;
        right:0;
        padding: 0.2rem 0.4rem;
        background: var(--lightBlue) !important;
        color: var(--mainWhite) !important;
        fontsize: 2rem !important;
        border-radius: 0.5rem 0 0 0 !important;
        transform: translate(100%, 100%);
        transition: all 0.1s linear;
    }
    .img-container .card-btn{
        transform: translate(0,0);
    }
    .card-btn:not(:active){
        color: var(--mainBlue);
        cursor: pointer;
    }
    hr{
        padding: 0rem !important;
        margin: 0rem !important;
    }
    .delivery-time{
        font-size: 0.7rem;
        padding: 0.1rem 0rem !important;
        margin: 0rem !important;
    }
    .reg-size{
        font-size: 1rem;
    }
    
`

export default Product