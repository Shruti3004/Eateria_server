import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/eateriaLogo.png';
import myCart from '../images/myCart.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button'
import {AuthContext} from '../Auth';

function Navbar() {

    const {currentUser} = useContext(AuthContext);

    return (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to='/products'>
                <img src={logo} alt="logo" className="navbar-brand"/>
            </Link>            
            <div className="ml-auto navbar-nav">
                <Link to="/cart">
                    <ButtonContainer cartBtn className="py-1 nav-item">                    
                        <img src={myCart} alt="My Cart" className="img-fluid"/>
                    </ButtonContainer>                
                </Link>
                <div className="name-user px-3 py-2 text-center font-weight-bold align-self-center nav-item d-none d-sm-block">
                    {currentUser.displayName.slice(0,1)}
                </div>
            </div>            
        </NavWrapper>
    )
}

const NavWrapper = styled.nav`
    background: var(--mainWhite);   
    .name-user{
        background: var(--lightBlue);
        border-radius: 50% !important;
        color: var(--mainWhite) !important; 
        box-shadow: 1px 1px 5px 1px var(--lightBlue);
    } 
`

export default Navbar
