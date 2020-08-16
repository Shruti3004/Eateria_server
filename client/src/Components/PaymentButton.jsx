import React, {useContext} from 'react';
import styled from 'styled-components';
import { ProductContext } from '../context';
import axios from 'axios'

function PaymentButton() {
    
    const context = useContext(ProductContext);
    const { cartTotal } = context;

    function isDate(val) {
        // Cross realm comptatible
        return Object.prototype.toString.call(val) === '[object Date]'
    }
      
    function isObj(val) {
        return typeof val === 'object'
    }
      
    function stringifyValue(val) {
        if (isObj(val) && !isDate(val)) {
          return JSON.stringify(val)
        } else {
          return val
        }
    }
      
    function buildForm({ action, params }) {
        const form = document.createElement('form')
        form.setAttribute('method', 'post')
        form.setAttribute('action', action)        
      
        Object.keys(params).forEach(key => {
          const input = document.createElement('input')
          input.setAttribute('type', 'hidden')
          input.setAttribute('name', key)
          input.setAttribute('value', stringifyValue(params[key]))
          form.appendChild(input)
        })      
        return form
    }
      
    function post(details) {
        const form = buildForm(details)
        document.body.appendChild(form)
        form.submit()
        form.remove()
    }    

    const handlePayment = async() => {
        try{
            var orderId = "TEST_" + (new Date().getTime())
            var email = "mail2shruti.ag@gmail.com"
            var phone = "+917668717742"
            var params = { cartTotal: cartTotal, orderId: orderId, phone: phone, email: email }
            var url = '/payment'
            var request = {
                url: url,
                params: params,
                method: 'get'
            }
            const res = await axios(request)
            const processParams = await res.data            
            var details = {
                action : "https://securegw-stage.paytm.in/theia/processTransaction",
                params : processParams
            }
            post(details);
        }catch(err){
            console.log(err)
        }  
    }

    return (
        <div className="container">
            <PayButton className=" btn font-weight-bold w-100" onClick={handlePayment}>Proceed to Pay</PayButton>
        </div>
    )
}

const PayButton = styled.button`
    text-decoration-line: none !important;    
    border-radius: 60px !important;
    padding: 0.3rem 1.9rem !important;
    background: var(--mainBlue);
    color: white;
    &:hover{
        background: var(--lightBlue);
        color: var(--mainWhite);        
    }
`

export default PaymentButton
