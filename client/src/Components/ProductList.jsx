import React, { useContext, useState } from 'react';
import Product from './Product';
import Navbar from './Navbar';
import girl from '../images/menuPageGirl.png';
import { ProductContext } from '../context'
import PlaceOrder from './PlaceOrder';
import {AuthContext} from '../Auth';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';


function ProductList() {
    const {products} = useContext(ProductContext);
    const [search, setSearch] = useState('');

    const {currentUser} = useContext(AuthContext);

    const filteredItems = products.filter(product => {
        return product.title.toLowerCase().includes(search.toLowerCase());
    });
    
    if(currentUser!==null){
    return (
        <>
            <Navbar />
            <div className="menu-background">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-12 col-sm-12">
                            <h1 className="font-weight-bold py-5 text-purple text-uppercase main-heading d-none d-sm-block">
                                <strong>
                                    hungry?<br />
                                    <span className="text-pink">Trouble </span>
                                    finding a table?<br />
                                    can not <span className="text-pink">decide </span>
                                    what to <span className="text-pink">eat?</span>
                                </strong>
                            </h1>
                            <h2 className="font-weight-bold py-4 text-purple d-none d-sm-block">
                                <span className="text-pink">Eateria </span>
                                is here to 
                                <span className="text-pink"> help </span>
                                you now.
                            </h2>
                            <div className="form-group row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 menu-phone">
                                    <div className="input-group mt-4">
                                        <input type="text" className="form-control text-purple" placeholder="What are you craving for?" onChange={(e) => setSearch(e.target.value)}/>
                                        <div className="input-group-append">
                                            <span className="input-group-text background-pink px-3"><i className="fas fa-search text-white" /></span>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                        <div className="col-lg-4 d-none d-lg-block">
                            <img src={girl} alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
                <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto my-2 text-center text-title">
                        <h1 className="text-capitalize font-weight-bold text-purple">
                            <strong>Our Recipies</strong>
                        </h1>
                    </div>
                </div>
                    <div className="row mb-5">
                        {filteredItems.length > 0 ? 
                            (filteredItems.map(product => {
                                return (
                                    <Product key={product.id} product={product}/>
                                )      
                            }))
                            :(<h4 className="text-center text-danger font-weight-bold mt-4 px-3 pb-5">
                                No items matched your search
                            </h4>)
                        }
                    </div>
                    <div className="fixed-bottom p-2 fixed-button">
                        <PlaceOrder/>
                    </div>
                </div>
            </div>
        </>
    )
}else{
    return (
        <>
            <div className="container">
                <ErrorMessage>
                    <div className="p-3 bg-danger error-box font-weight-bold container">
                        <h5 className="text-center text-white">Oops!! Seems you haven't logged in.</h5>
                        <Link to="/login">
                            <div className="d-flex justify-content-center">
                                <button className="btn bg-light text-danger font-weight-bold mt-4"><i className="fas fa-arrow-left text-danger" />&nbsp;&nbsp;&nbsp;Back to Login</button>
                            </div>
                        </Link>
                    </div>
                </ErrorMessage>
            </div>            
        </>
    )
}
}
const ErrorMessage = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;    
    .error-box{
        border-radius: 15px !important;
        box-shadow: 2px 2px 15px rgba(0,0,0,0.5) !important;
    }
`
export default withRouter(ProductList)