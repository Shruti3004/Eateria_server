import styled from 'styled-components';


export const ButtonContainer = styled.button`
text.transform: capitalize;
font-size: 1.2rem;
font-weight: 600;
background: transparent;
border: 0.07rem solid var(--lightBlue);
border-color: ${props => (props.cartBtn ? "var(--mainBlue)" : "var(--lightBlue)")};
border-radius: 60px;
color: ${prop => (prop.cartBtn ? "var(--mainBlue)" : "var(--lightBlue)")};
padding: 0rem 0.7rem;
cursor:pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: ${prop => (prop.cartBtn ? "var(--mainBlue)" : "var(--lightBlue)")};
    color: var(--mainWhite);
}
&:focus{
    outline: none;
}
`