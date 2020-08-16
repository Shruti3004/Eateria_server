import React from 'react';
import logo from '.././images/mainLogo.png';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// import firebase from './Config/Config'

function LogoPage() {

    // const handleUser = () => {
    //     firebase.authChange(user => {
    //         if (user) {
    //             props.history.push('/products')
    //         } else {
    //             props.history.push('/login')
    //         }
    //     })
    // }

    // useEffect(() => {
    //     handleUser();
    // }, [])

    return (
        <Link to="/login">
            <LogoContainer >
                <img src={logo} alt="" className="img-fluid"/>                                
            </LogoContainer>
        </Link>
    )
}

const LogoContainer = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background: white;
    // .logo-plate{
    //     height: 25vmin;
    //     pointer-events: none;
    // }
    // .logo-text{
    //     height: 7vmin;
    //     pointer-events: none;
    // }
    // @media (prefers-reduced-motion: no-preference) {
    //     .logo-plate {
    //         animation: App-logo-spin infinite 40s linear !important;
    //     }
    // }      
    // @keyframes App-logo-spin {
    //     from {
    //         transform: rotate(0deg);
    //     }
    //     to {
    //         transform: rotate(360deg);
    //     }
    // }
    
      
`

export default LogoPage
