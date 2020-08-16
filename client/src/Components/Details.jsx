import React, { useContext } from 'react';
import { ProductContext } from '../context';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import styled from 'styled-components';

function Details() {
    const {detailProduct, addToCart, openModal} = useContext(ProductContext);
    const {id, category, title, img, info, price, inCart} = detailProduct;
    return (
        <>
        <Navbar />
        <div className="container mb-3"> 
            <div className="row">
                <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center mt-3 mb-2">
                    <h2 className="font-weight-bold text-purple">{title}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-10 col-sm-10 mx-auto col-md-7 col-lg-7 my-3">
                    <DetailImage>
                        <div className="card img-container">
                            <img src={img} className="img-fluid card-img-top rounded" alt="product"/>
                        </div>
                    </DetailImage>                    
                </div>
                <div className="col-10 mx-auto col-md-6">                    
                    <h5 className="font-weight-bold text-center">
                        {category === "1" ? (<p className="text-success">Vegetarian</p>): (<p className="text-danger">Non-Vegetarian</p>) }
                    </h5>
                    <hr className="py-0 my-0"/>
                    <h5 className="text-purple text-center mt-2">
                        <strong>
                            Price: &#8377;&nbsp;{price}
                        </strong>
                    </h5>
                    <hr/>
                    <h6 className="text-capitalize text-center font-weight-bold mb-1 text-purple">
                        some info about product
                    </h6>
                    <p className="text-muted small-text text-center">
                        {info}
                    </p>
                    <hr/>
                    <div className="d-flex justify-content-center">
                        <Link to="/products">
                            <ButtonContainer className="py-1">Back to Products</ButtonContainer>
                        </Link>
                    </div>
                    <div className="d-flex justify-content-center mt-1">
                        <ButtonContainer cartBtn 
                        disabled={inCart?true:false} 
                        onClick={() => {
                            addToCart(id);
                            openModal(id);
                        }}
                        className="py-1"
                        >
                        {inCart? "In Cart" : "Add to Cart"}
                        </ButtonContainer>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

const DetailImage = styled.div`
    .card{
        border-color: transparent;
        transition: all 0.4s linear;
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 3px 3px 10px 0px rgba(0,0,0,0.4);
    }
    &:hover{
        .card{
            box-shadow: 3px 3px 15px 0px rgba(0,0,0,0.4);
        }
    }
    .img-container{
        position: relative;
        overflow: hidden;
    }
    .card-img-top{
        transition: all 0.4s linear;
    }
    .card-img-top:hover{
        transform: scale(1.2);
    }
`
export default Details
