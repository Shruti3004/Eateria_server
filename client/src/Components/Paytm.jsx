import React,{useEffect} from 'react'
import Navbar from './Navbar';
import axios from 'axios';

function Paytm() {

    useEffect(() => {
        axios.get("/payment").then(res => {
            console.log(res);
        })
    },[]);
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        paytm
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Paytm
